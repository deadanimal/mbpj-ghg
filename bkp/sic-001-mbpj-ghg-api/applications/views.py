from django.shortcuts import render
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from datetime import datetime

from django_filters.rest_framework import DjangoFilterBackend

from .models import (
    Application,
    ApplicationAssessment,
    AssessmentAspect,
    Evaluation,
    EvaluationSchedule,
    ApplicationEvent
)

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
    filterset_fields = ['status', 'applied_house', 'evaluator_nominated', 'applicant']

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
        queryset = Application.objects.filter(date_submitted__year=now.strftime("%Y")).count()

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