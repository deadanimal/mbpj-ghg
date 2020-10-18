import json
import time
import uuid
import datetime
from django.utils import timezone

from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

from django.template.loader import render_to_string
from weasyprint import HTML
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse

from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings

from ghg.helpers import PathAndRename

from django.db.models import Count
from django.db.models.functions import TruncMonth
from django.core import serializers

from .models import (
    Application,
    ApplicationAssessment,
    ApplicationEvaluation,
    ApplicationEvaluationSchedule
)

from .serializers import (
    ApplicationSerializer,
    ApplicationExtendedSerializer,
    ApplicationAssessmentSerializer,
    ApplicationAssessmentExtendedSerializer,
    ApplicationEvaluationSerializer,
    ApplicationEvaluationExtendedSerializer,
    ApplicationEvaluationScheduleSerializer,
    ApplicationEvaluationScheduleExtendedSerializer
)

from houses.models import (
    House
)

from rebates.models import (
    Rebate
)


class ApplicationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'applicant',
        'evaluator_nominated',
        'status',
        'applied_house',
        'total_lamp'
    ]

    def get_permissions(self):
        permission_classes = [AllowAny] #[IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Application.objects.all()
        
        # if user.user_type == 'AP':
        #     queryset = Application.objects.all()
        # elif user.user_type == 'EV':
        #     queryset = Application.objects.all()
        # elif user.user_type == 'AD':
        #     queryset = Application.objects.all()              
        # else:
        #     queryset = Application.objects.none()
        
        return queryset  
    
    @action(methods=['GET'], detail=True)
    def approved(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'AP'
        application.approved_at = datetime.datetime.now()
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def completed(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'CM'
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def drafted(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'DR'
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def evaluation(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'EV'
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def progress(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'IP'
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def paid(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'PD'
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def rejected(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'RJ'
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def submitted(self, request, *args, **kwargs):
        application = self.get_object()
        application.status = 'SM'
        application.save()

        serializer = ApplicationSerializer(application)
        return Response(serializer.data)

    @action(methods=['POST'], detail=False)
    def count_all(self, request, *args, **kwargs):
        format_default = '%Y-%m-%d %H:%M:%S'
        format_compared = '%Y-%m-%d %H:%M:%S %z'
        application_monthly = Application.objects.annotate(month=TruncMonth('created_at')).values('month').annotate(total=Count('id'))
        datetime_month = datetime.datetime.strptime(str(datetime.datetime(datetime.date.today().year, 1, 1)), format_default)
        

        for month_index in application_monthly:
            dt_date = month_index['month']
            # strip_month = datetime.datetime.strptime(str(dt_date[:19]), format_default)

            print('Original', month_index['month'])
            # print('Stripped', strip_month)
            print('Current', datetime_month)

            

            # now = datetime.datetime.strptime(str(datetime.datetime(datetime.date.today().year, 1, 1)), format_default)
            # compare = datetime.datetime.strptime(str(month_index['month']), format_default)
            # now_new = str(now)
            # print ('date', now)
            # print('tocomp', compare)
            # print('date', datetime.datetime.strptime(str(now), ('%Y-%m-%d %H:%M:%S %z')).date())

        return Response(application_monthly)
    
    @action(methods=['POST'], detail=False)
    def report_application(self, request, *args, **kwargs):
        # application = self.get_object()
        # application.status = 'SM'
        # application.save()
        applications = Application.objects.all()
        now = datetime.datetime.now()
        count_jan = 0
        count_feb = 0
        count_mar = 0
        count_apr = 0
        count_may = 0
        count_jun = 0
        count_jul = 0
        count_aug = 0
        count_sep = 0
        count_oct = 0
        count_nov = 0
        count_dec = 0

        for application in applications:
            #now = datetime.datetime(datetime.date.today().year, 1, 1)
            date_now = datetime.datetime(application.created_at.year, application.created_at.month, application.created_at.day)
            if ((date_now >= datetime.datetime(datetime.date.today().year, 1, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 1, 31))):
                count_jan += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 2, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 2, 29))):
                count_feb += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 3, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 3, 31))):
                count_mar += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 4, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 4, 30))):
                count_apr += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 5, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 5, 31))):
                count_may += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 6, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 6, 30))):
                count_jun += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 7, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 7, 31))):
                count_jul += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 8, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 8, 31))):
                count_aug += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 9, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 9, 30))):
                count_sep += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 10, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 10, 31))):
                count_oct += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 10, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 11, 30))):
                count_nov += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 12, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 12, 31))):
                count_dec += 1

        # print(len(applications))
        items = {
            'count_jan': count_jan,
            'count_feb': count_feb,
            'count_mar': count_mar,
            'count_apr': count_apr,
            'count_may': count_may,
            'count_jun': count_jun,
            'count_jul': count_jul,
            'count_aug': count_aug,
            'count_sep': count_sep,
            'count_oct': count_oct,
            'count_nov': count_nov,
            'count_dec': count_dec
        }
        # print(items)

        html_string = render_to_string('report_applications.html', {'items': items})
        html = HTML(string=html_string)
        pdf_file = html.write_pdf()
        
        file_path = "mbpj-ghg/application-report/" + datetime.datetime.utcnow().strftime("%s") + "-" + uuid.uuid4().hex + '.pdf'
        # "mbpj-ghg/application-report/" <-- naming system
        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        # print(full_url_path)

        serializer = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        return Response(serializer)

    @action(methods=['POST'], detail=False)
    def report_building(self, request, *args, **kwargs):
        applications = Application.objects.all()
        houses = House.objects.all()
        count_cd = 0
        count_fl = 0
        count_to = 0
        count_te = 0
        count_bs = 0
        count_as = 0
        count_ot = 0

        for application in applications:
            print('application', application)
            for house in houses:
                if application.applied_house.id == house.id:
                    if house.building_type == 'CD':
                        count_cd += 1
                    elif house.building_type == 'FL':
                        count_fl += 1
                    elif house.building_type == 'TO':
                        count_to += 1
                    elif house.building_type == 'TE':
                        count_te += 1
                    elif house.building_type == 'BS':
                        count_bs += 1
                    elif house.building_type == 'AS':
                        count_as += 1
                    elif house.building_type == 'OT':
                        count_ot += 1

        items = {
            'count_cd': count_cd,
            'count_fl': count_fl,
            'count_to': count_to,
            'count_te': count_te,
            'count_bs': count_bs,
            'count_as': count_as,
            'count_ot': count_ot
        }

        html_string = render_to_string('report_buildings.html', {'items': items})
        html = HTML(string=html_string)
        pdf_file = html.write_pdf()
        
        file_path = "mbpj-ghg/building-report/" + datetime.datetime.utcnow().strftime("%s") + "-" + uuid.uuid4().hex + '.pdf'
        # "mbpj-ghg/application-report/" <-- naming system
        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        # print(full_url_path)

        serializer = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        return Response(serializer)

    @action(methods=['POST'], detail=False)
    def report_area(self, request, *args, **kwargs):
        applications = Application.objects.all()
        houses = House.objects.all()

        count_aman_suria = 0
        count_ara_damansara = 0
        count_asia_jaya = 0
        count_bandar_sri_damansara = 0
        count_bandar_sunway = 0
        count_bandar_utama = 0
        count_bukit_gasing = 0
        count_damansara_damai = 0
        count_damansara_jaya = 0
        count_damansara_kim = 0
        count_damansara_perdana = 0
        count_damansara_utama = 0
        count_dataran_prima = 0
        count_kampung_lindungan = 0
        count_kampung_medan = 0
        count_kampung_sg_kayu_ara = 0
        count_kampung_tunku = 0
        count_kelab_golf_negara_subang = 0
        count_kelana_jaya = 0
        count_kota_damansara = 0
        count_kwasa_damansara = 0
        count_mutiara_damansara = 0 
        count_petaling_utama = 0
        count_pj_old_town = 0
        count_sg_way = 0
        count_taman_dato_harun = 0
        count_taman_desaria = 0
        count_taman_jaya = 0
        count_taman_mayang = 0
        count_taman_paramount = 0
        count_taman_perindustrian_jaya = 0
        count_taman_sea = 0
        count_tropicana = 0

        for application in applications:
            for house in houses:
                if application.applied_house.id == house.id:
                    if house.area == 'Aman Suria':
                        count_aman_suria += 1
                    elif house.area == 'Ara Damansara':
                        count_ara_damansara += 1
                    elif house.area == 'Asia Jaya':
                        count_asia_jaya += 1
                    elif house.area == 'Bandar Sri Damansara':
                        count_bandar_sri_damansara += 1
                    elif house.area == 'Bandar Sunway':
                        count_bandar_sunway += 1
                    elif house.area == 'Bandar Utama':
                        count_bandar_utama += 1
                    elif house.area == 'Bukit Gasing':
                        count_bukit_gasing += 1
                    elif house.area == 'Damansara Damai':
                        count_damansara_damai += 1
                    elif house.area == 'Damansara Jaya':
                        count_damansara_jaya += 1
                    elif house.area == 'Damansara Kim':
                        count_damansara_kim += 1
                    elif house.area == 'Damansara Perdana':
                        count_damansara_perdana += 1
                    elif house.area == 'Damansara Utama':
                        count_damansara_utama += 1
                    elif house.area == 'Dataran Prima':
                        count_dataran_prima += 1
                    elif house.area == 'Kampung Lindungan':
                        count_kampung_lindungan += 1
                    elif house.area == 'Kampung Medan':
                        count_kampung_medan += 1
                    elif house.area == 'Kampung Sungai Kayu Ara':
                        count_kampung_sg_kayu_ara += 1
                    elif house.area == 'Kampung Tunku':
                        count_kampung_tunku += 1
                    elif house.area == 'Kelab Golf Negara Subang':
                        count_kelab_golf_negara_subang += 1
                    elif house.area == 'Kelana Jaya':
                        count_kelana_jaya += 1
                    elif house.area == 'Kota Damansara':
                        count_kota_damansara += 1
                    elif house.area == 'Kwasa Damansara':
                        count_kwasa_damansara += 1
                    elif house.area == 'Mutiara Damansara':
                        count_mutiara_damansara += 1
                    elif house.area == 'Petaling Utama':
                        count_petaling_utama += 1
                    elif house.area == 'PJ Old Town':
                        count_pj_old_town += 1
                    elif house.area == 'Sungai Way':
                        count_sg_way += 1
                    elif house.area == 'Taman Dato\' Harun':
                        count_taman_dato_harun += 1
                    elif house.area == 'Taman Desaria':
                        count_taman_desaria += 1
                    elif house.area == 'Taman Jaya':
                        count_taman_jaya += 1
                    elif house.area == 'Taman Mayang':
                        count_taman_mayang += 1
                    elif house.area == 'Taman Paramount':
                        count_taman_paramount += 1
                    elif house.area == 'Taman Perindustrian Jaya':
                        count_taman_perindustrian_jaya += 1
                    elif house.area == 'Taman SEA':
                        count_taman_sea += 1
                    elif house.area == 'Tropicana':
                        count_tropicana += 1

        items = {
            'count_aman_suria': count_aman_suria,
            'count_ara_damansara': count_ara_damansara,
            'count_asia_jaya': count_asia_jaya,
            'count_bandar_sri_damansara': count_bandar_sri_damansara,
            'count_bandar_sunway': count_bandar_sunway,
            'count_bandar_utama': count_bandar_utama,
            'count_bukit_gasing': count_bukit_gasing,
            'count_damansara_damai': count_damansara_damai,
            'count_damansara_jaya': count_damansara_jaya,
            'count_damansara_kim': count_damansara_kim,
            'count_damansara_perdana': count_damansara_perdana,
            'count_damansara_utama': count_damansara_utama,
            'count_dataran_prima': count_dataran_prima,
            'count_kampung_lindungan': count_kampung_lindungan,
            'count_kampung_medan': count_kampung_medan,
            'count_kampung_sg_kayu_ara': count_kampung_sg_kayu_ara,
            'count_kampung_tunku': count_kampung_tunku,
            'count_kelab_golf_negara_subang': count_kelab_golf_negara_subang,
            'count_kelana_jaya': count_kelana_jaya,
            'count_kota_damansara': count_kota_damansara,
            'count_kwasa_damansara': count_kwasa_damansara,
            'count_mutiara_damansara': count_mutiara_damansara,
            'count_petaling_utama': count_petaling_utama,
            'count_pj_old_town': count_pj_old_town,
            'count_sg_way': count_sg_way,
            'count_taman_dato_harun': count_taman_dato_harun,
            'count_taman_desaria': count_taman_desaria,
            'count_taman_jaya': count_taman_jaya,
            'count_taman_mayang': count_taman_mayang,
            'count_taman_paramount': count_taman_paramount,
            'count_taman_perindustrian_jaya': count_taman_perindustrian_jaya,
            'count_taman_sea': count_taman_sea,
            'count_tropicana': count_tropicana
        }

        html_string = render_to_string('report_areas.html', {'items': items})
        html = HTML(string=html_string)
        pdf_file = html.write_pdf()
        
        file_path = "mbpj-ghg/area-report/" + datetime.datetime.utcnow().strftime("%s") + "-" + uuid.uuid4().hex + '.pdf'
        # "mbpj-ghg/application-report/" <-- naming system
        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        # print(full_url_path)

        serializer = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        return Response(serializer)

    @action(methods=['POST'], detail=False)
    def report_approved(self, request, *args, **kwargs):
        # application = self.get_object()
        # application.status = 'SM'
        # application.save()
        applications = Application.objects.all()
        now = datetime.datetime.now()
        count_jan = 0
        count_feb = 0
        count_mar = 0
        count_apr = 0
        count_may = 0
        count_jun = 0
        count_jul = 0
        count_aug = 0
        count_sep = 0
        count_oct = 0
        count_nov = 0
        count_dec = 0

        for application in applications:
            #now = datetime.datetime(datetime.date.today().year, 1, 1)
            date_now = datetime.datetime(application.created_at.year, application.created_at.month, application.created_at.day)
            if ((date_now >= datetime.datetime(datetime.date.today().year, 1, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 1, 31))):
                if application.status == 'AP':
                    count_jan += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 2, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 2, 29))):
                if application.status == 'AP':
                    count_feb += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 3, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 3, 31))):
                if application.status == 'AP':
                    count_mar += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 4, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 4, 30))):
                if application.status == 'AP':
                    count_apr += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 5, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 5, 31))):
                if application.status == 'AP':
                    count_may += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 6, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 6, 30))):
                if application.status == 'AP':
                    count_jun += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 7, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 7, 31))):
                if application.status == 'AP':
                    count_jul += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 8, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 8, 31))):
                if application.status == 'AP':
                    count_aug += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 9, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 9, 30))):
                if application.status == 'AP':
                    count_sep += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 10, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 10, 31))):
                if application.status == 'AP':
                    count_oct += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 10, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 11, 30))):
                if application.status == 'AP':
                    count_nov += 1
            elif ((date_now >= datetime.datetime(datetime.date.today().year, 12, 1)) and (date_now <= datetime.datetime(datetime.date.today().year, 12, 31))):
                if application.status == 'AP':
                    count_dec += 1

        # print(len(applications))
        items = {
            'count_jan': count_jan,
            'count_feb': count_feb,
            'count_mar': count_mar,
            'count_apr': count_apr,
            'count_may': count_may,
            'count_jun': count_jun,
            'count_jul': count_jul,
            'count_aug': count_aug,
            'count_sep': count_sep,
            'count_oct': count_oct,
            'count_nov': count_nov,
            'count_dec': count_dec
        }
        # print(items)

        html_string = render_to_string('report_approved.html', {'items': items})
        html = HTML(string=html_string)
        pdf_file = html.write_pdf()
        
        file_path = "mbpj-ghg/approved-report/" + datetime.datetime.utcnow().strftime("%s") + "-" + uuid.uuid4().hex + '.pdf'
        # "mbpj-ghg/application-report/" <-- naming system
        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        # print(full_url_path)

        serializer = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        return Response(serializer)


    @action(methods=['POST'], detail=False)
    def report_approved(self, request, *args, **kwargs):

        return print('hehe')
    
    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):
        
        queryset = Application.objects.all()
        serializer_class = ApplicationExtendedSerializer(queryset, many=True)
        
        return Response(serializer_class.data)

    @action(methods=['GET'], detail=False)
    def statistics(self, request, *args, **kwargs):
        current_year = datetime.datetime.now().year

        application_approved = Application.objects.filter(status='AP')
        application_approved_current = Application.objects.filter(approved_at__year=current_year)
        rebate_awarded = Rebate.objects.all()
        rebate_awarded_current = Rebate.objects.filter(created_at__year=current_year)
        application_received = Application.objects.filter(
            Q(status='AP') |
            Q(status='CM') |
            Q(status='EV') |
            Q(status='IP') |
            Q(status='PD') |
            Q(status='RJ') |
            Q(status='SM')
        )
        application_received_current = Application.objects.filter(
            Q(status='AP') |
            Q(status='CM') |
            Q(status='EV') |
            Q(status='IP') |
            Q(status='PD') |
            Q(status='RJ') |
            Q(status='SM') &
            Q(modified_at__year=current_year)
        )

        items = {
            'statistics': {
                'application_approved': application_approved.count(),
                'application_approved_current': application_approved_current.count(),
                'rebate_awarded': rebate_awarded.count(),
                'rebate_awarded_current': rebate_awarded_current.count(),
                'application_received': application_received.count(),
                'application_received_current': application_received_current.count(),
            }
        }

        return JsonResponse(items)

class ApplicationAssessmentViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplicationAssessment.objects.all()
    serializer_class = ApplicationAssessmentSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'application',
        'assessment_aspect'
    ]

    def get_permissions(self):
        permission_classes = [AllowAny]#[IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = ApplicationAssessment.objects.all()
        return queryset  


    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):
        
        queryset = ApplicationAssessment.objects.all()
        serializer_class = ApplicationAssessmentExtendedSerializer(queryset, many=True)
        
        return Response(serializer_class.data)


class ApplicationEvaluationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplicationEvaluation.objects.all()
    serializer_class = ApplicationEvaluationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'application_assessment'
    ]

    def get_permissions(self):
        permission_classes = [AllowAny]#[IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = ApplicationEvaluation.objects.all()
        return queryset  


    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):
        
        queryset = ApplicationEvaluation.objects.all()
        serializer_class = ApplicationEvaluationExtendedSerializer(queryset, many=True)
        
        return Response(serializer_class.data)


class ApplicationEvaluationScheduleViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplicationEvaluationSchedule.objects.all()
    serializer_class = ApplicationEvaluationScheduleSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'application',
        'date',
        'session'
    ]

    def get_permissions(self):
        permission_classes = [AllowAny]#[IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = ApplicationEvaluationSchedule.objects.all()
        return queryset


    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):
        
        queryset = ApplicationEvaluation.objects.all()
        serializer_class = ApplicationEvaluationExtendedSerializer(queryset, many=True)
        
        return Response(serializer_class.data)

