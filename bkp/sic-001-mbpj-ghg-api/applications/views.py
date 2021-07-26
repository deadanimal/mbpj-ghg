from django.shortcuts import render
from django.db.models import F, Q, Count, Sum
from django.db.models.functions import ExtractYear

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from datetime import datetime
import json

from django_filters.rest_framework import DjangoFilterBackend

from .models import (
    Application,
    ApplicationAssessment,
    AssessmentAspect,
    Evaluation,
    EvaluationSchedule,
    ApplicationEvent
)

from carbonemissionfactors.models import CarbonEmissionFactor

from houses.models import (
    House
)

from .serializers import (
    ApplicationSerializer, 
    ApplicationExtendedSerializer,
    ApplicationAssessmentSerializer,
    AssessmentAspectSerializer,
    EvaluationSerializer,
    EvaluationScheduleSerializer,
    ApplicationEventSerializer
)

class ApplicationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['id', 'status', 'applied_house', 'evaluator_nominated', 'applicant']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        queryset = Application.objects.all()
        return queryset

    @action(methods=['GET'], detail=False)
    def get_application_details(self, request):

        applicant = self.request.user
        # applicant = request.data['applicant']
        applications = Application.objects.filter(applicant=applicant).order_by('-date_submitted').values()

        application_data = []
        for application in applications:
            # print('application data', application)
            applied_house = House.objects.filter(id=application['applied_house_id']).values()
            # print('house data', applied_house)
            application_assessments = ApplicationAssessment.objects.filter(application=application['id']).values()
            # print('application assessment data', application_assessments)

            evaluation = []
            for application_assessment in application_assessments:
                evaluation = Evaluation.objects.filter(application_assessment=application_assessment['id']).values()
            
            # print('evaluation', evaluation)
            data = {
                'id': application['id'],
                'status': application['status'],
                'date_submitted': application['date_submitted'],
                'applied_house': applied_house,
                'application_assessment': application_assessments,
                'evaluation': evaluation
            }
            application_data.append(data)

        return Response(application_data)
    
    def create(self, request):
        ApplicationEvent.objects.create(
            action = 'Create application',
            action_by = self.request.user
        )
        return super().create(request)
    
    def update(self, request, pk=None):
        ApplicationEvent.objects.create(
            action = 'Update application details',
            action_by = self.request.user
        )
        return super().update(request)

    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):

        queryset = Application.objects.all()
        id = request.query_params.get('id', None)
        status = request.query_params.get('status', None)
        applicant = request.query_params.get('applicant', None)
        evaluator_nominated = request.query_params.get('evaluator_nominated', None)
        applied_house = request.query_params.get('applied_house', None)

        if id is not None:
            queryset = queryset.filter(id=id)
        if status is not None:
            queryset = queryset.filter(status=status)
        if applicant is not None:
            queryset = queryset.filter(applicant=applicant)
        if evaluator_nominated is not None:
            queryset = queryset.filter(evaluator_nominated=evaluator_nominated)
        if applied_house is not None:
            queryset = queryset.filter(applied_house=applied_house)

        serializer_class = ApplicationExtendedSerializer(
            queryset, many=True)

        return Response(serializer_class.data)

    @action(methods=['GET'], detail=False)
    def get_total_app_received_since_2011(self, request):

        queryset = Application.objects.count()

        return Response(queryset)

    @action(methods=['GET'], detail=False)
    def get_total_app_received_current_year(self, request):

        now = datetime.now()
        queryset = Application.objects.filter(year_application=now.strftime("%Y")).count()

        return Response(queryset)

    @action(methods=['GET'], detail=False)
    def get_total_app_approved_since_2011(self, request):

        queryset = Application.objects.filter(status='CM').count()

        return Response(queryset)
    
    @action(methods=['GET'], detail=False)
    def get_total_app_approved_current_year(self, request):

        now = datetime.now()
        queryset = Application.objects.filter(status='CM', date_approved__year=now.strftime("%Y")).count()

        return Response(queryset)

    @action(methods=['POST'], detail=False)
    def get_total_approved_rejected_by_year(self, request):

        data = request.data

        year = ''
        if data['year'] != '':
            year = data['year']
        else:
            year = datetime.now().strftime("%Y")

        # PENDING
        queryset_approved = Application.objects.filter(year_application=year, status='CM').count()
        queryset_rejected = Application.objects.filter(year_application=year, status='RJ').count()

        data = [
            {
                'status': 'Approved',
                'amount': queryset_approved    
            },
            {
                'status': 'Rejected',
                'amount': queryset_rejected    
            } 
        ]

        return Response(data)

    @action(methods=['POST'], detail=False)
    def get_total_app_by_area(self, request):

        data = request.data

        year = ''
        if data['year'] != '':
            year = data['year']
        else:
            year = datetime.now().strftime("%Y")

        queryset = Application.objects.filter(year_application=year).values('applied_house__area').annotate(location=F('applied_house__area'), amount=Count('applied_house__area')).order_by()

        data = queryset

        return Response(data)
    
    @action(methods=['GET'], detail=False)
    def get_total_app_by_year(self, request):

        # queryset = Application.objects.values('date_submitted__year').annotate(year=ExtractYear('date_submitted'), value=Count('date_submitted__year')).order_by()
        queryset = Application.objects.values('year_application').annotate(year=F('year_application'), value=Count('year_application')).order_by()

        data = queryset

        return Response(data)
    
    @action(methods=['POST'], detail=False)
    def get_carbon_emission(self, request):

        data = request.data

        year = ''
        if data['year'] != '':
            year = data['year']
        else:
            year = datetime.now().strftime("%Y")
            
        queryset_electric = Application.objects.filter(date_submitted__year=year).values('applied_house__electricity_bill_1_usage', 'applied_house__electricity_bill_2_usage', 'applied_house__electricity_bill_3_usage').aggregate(total_electric_month1=Sum('applied_house__electricity_bill_1_usage'), total_electric_month2=Sum('applied_house__electricity_bill_2_usage'), total_electric_month3=Sum('applied_house__electricity_bill_3_usage'))
        queryset_water = Application.objects.filter(date_submitted__year=year).values('applied_house__water_bill_1_usage', 'applied_house__water_bill_2_usage', 'applied_house__water_bill_3_usage').aggregate(total_electric_month1=Sum('applied_house__water_bill_1_usage'), total_electric_month2=Sum('applied_house__water_bill_2_usage'), total_electric_month3=Sum('applied_house__water_bill_3_usage'))
        
        queryset_carbon = CarbonEmissionFactor.objects.filter(year=year).values('electric_carbon_emission_factor', 'water_carbon_emission_factor')
        
        electric = 0 if not all(queryset_electric.values()) else sum(queryset_electric.values())
        water = 0 if not all(queryset_water.values()) else sum(queryset_water.values())
        
        data = [{
            'usage': "Electric usage",
            'value': electric * queryset_carbon[0]['electric_carbon_emission_factor']
        },
        {
            'usage': "Water usage",
            'value': water * queryset_carbon[0]['water_carbon_emission_factor']
        }]
        
        return Response(data)
    
    @action(methods=['POST'], detail=False)
    def get_filter_one_application_per_year(self, request):
        
        data = request.data
        
        queryset = Application.objects.filter(date_submitted__year=data['year'], applied_house=data['house']).count()
        
        data = queryset
        
        return Response(data)

class ApplicationAssessmentViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplicationAssessment.objects.all()
    serializer_class = ApplicationAssessmentSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['application', 'assessment_aspect']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    
    
    def get_queryset(self):
        queryset = ApplicationAssessment.objects.all()
        return queryset

    def create(self, request):
        ApplicationEvent.objects.create(
            action = 'Create application assessment',
            action_by = self.request.user
        )
        return super().create(request)
    
    def update(self, request, pk=None):
        ApplicationEvent.objects.create(
            action = 'Update application assessment details',
            action_by = self.request.user
        )
        return super().update(request)      
    
    @action(methods=['POST'], detail=False)
    def get_total_app_by_category(self, request):
        
        data = request.data

        year = ''
        if data['year'] != '':
            year = data['year']
        else:
            year = datetime.now().strftime("%Y")
            
        queryset_energy = ApplicationAssessment.objects.filter(application__year_application=year, assessment_aspect__aspect_type='EN').count()
        queryset_water = ApplicationAssessment.objects.filter(application__year_application=year, assessment_aspect__aspect_type='WA').count()
        queryset_transportation = ApplicationAssessment.objects.filter(application__year_application=year, assessment_aspect__aspect_type='TR').count()
        queryset_biodiversity = ApplicationAssessment.objects.filter(application__year_application=year, assessment_aspect__aspect_type='BI').count()
        queryset_waste = ApplicationAssessment.objects.filter(application__year_application=year, assessment_aspect__aspect_type='WE').count()
        
        data = [
            {
                'category': "Energy",
                'value': queryset_energy,
            },
            {
                'category': "Waste",
                'value': queryset_waste,
            },
            {
                'category': "Water",
                'value': queryset_water,
            },
            {
                'category': "Transportation",
                'value': queryset_transportation,
            },
            {
                'category': "Biodiversity",
                'value': queryset_biodiversity,
            },
        ]
        
        return Response(data)
    
    @action(methods=['POST'], detail=False)
    def get_total_assessment_by_year(self, request):
        
        data = request.data

        year = ''
        if data['year'] != '':
            year = data['year']
        else:
            year = datetime.now().strftime("%Y")
            
        queryset = ApplicationAssessment.objects.values('assessment_aspect__name').filter(application__year_application=year, assessment_aspect__aspect_type=data['aspect_type']).annotate(amount=Count('application__year_application')).order_by()
        
        data = queryset
        
        return Response(data)

class AssessmentAspectViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = AssessmentAspect.objects.all()
    serializer_class = AssessmentAspectSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['aspect_type']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    

    def get_queryset(self):
        queryset = AssessmentAspect.objects.all()
        return queryset
    
    def create(self, request):
        ApplicationEvent.objects.create(
            action = 'Create application aspect',
            action_by = self.request.user
        )
        return super().create(request)
    
    def update(self, request, pk=None):
        ApplicationEvent.objects.create(
            action = 'Update application aspect details',
            action_by = self.request.user
        )
        return super().update(request)

class EvaluationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['application_assessment']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    

    def get_queryset(self):
        queryset = Evaluation.objects.all()
        return queryset
    
    def create(self, request):
        ApplicationEvent.objects.create(
            action = 'Create evaluation',
            action_by = self.request.user
        )
        return super().create(request)

    def create(self, request):
        is_many = isinstance(request.data, list)

        serializer = self.get_serializer(data=request.data, many=is_many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        ApplicationEvent.objects.create(
            action = 'Create evaluation',
            action_by = self.request.user
        )
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        # return super().create(request)
    
    def update(self, request, pk=None):
        ApplicationEvent.objects.create(
            action = 'Update evaluation details',
            action_by = self.request.user
        )
        return super().update(request)

class EvaluationScheduleViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = EvaluationSchedule.objects.all()
    serializer_class = EvaluationScheduleSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['session', 'date', 'application']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    

    def get_queryset(self):
        queryset = EvaluationSchedule.objects.all()
        return queryset
    
    def create(self, request):
        ApplicationEvent.objects.create(
            action = 'Create evaluation schedule',
            action_by = self.request.user
        )
        return super().create(request)
    
    def update(self, request, pk=None):
        ApplicationEvent.objects.create(
            action = 'Update evaluation schedule',
            action_by = self.request.user
        )
        return super().update(request)

class ApplicationEventViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplicationEvent.objects.all()
    serializer_class = ApplicationEventSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['action_by', 'date_time']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    
    
    def get_queryset(self):
        queryset = ApplicationEvent.objects.all()
        return queryset