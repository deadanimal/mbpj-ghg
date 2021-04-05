import datetime
import json
import pytz
import time

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

from drf_yasg.utils import swagger_auto_schema
from django.utils.decorators import method_decorator

from .models import (
    Rebate
)

from .serializers import (
    RebateSerializer,
    RebateExtendedSerializer
)

from users.models import (
    CustomUser
)

@method_decorator(
    name='list', 
    decorator=swagger_auto_schema(
        operation_id='Get all rebates',
        operation_description='Get all rebates'
    )
)
@method_decorator(
    name='create', 
    decorator=swagger_auto_schema(
        operation_id='Create an rebate',
        operation_description='Create an rebate'
    )
)
@method_decorator(
    name='update', 
    decorator=swagger_auto_schema(
        operation_id='Update an rebate',
        operation_description='Update an rebate'
    )
)
@method_decorator(
    name='partial_update', 
    decorator=swagger_auto_schema(
        operation_id='Patch an rebate',
        operation_description='Patch an rebate'
    )
)
class RebateViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Rebate.objects.all()
    serializer_class = RebateSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        # permission_classes = [AllowAny] # IsAuthenticated AllowAny
        
        if self.action == 'get_statistic':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Rebate.objects.all()
        
        if user.is_anonymous:
            queryset = queryset
        else:
            if user.user_type == 'AP':
                queryset = queryset.filter(
                    id=user.id
                )
            elif user.user_type == 'EV':
                queryset = queryset.filter(
                    id=user.id
                )
            elif user.user_type == 'AD':
                queryset = queryset
            elif user.user_type == 'SA':
                queryset = queryset
            else:
                queryset = queryset

        return queryset

    @swagger_auto_schema(operation_description='Get extended rebate', operation_id='Get extended rebate')
    @action(methods=['GET'], detail=True)
    def extended(self, request, *args, **kwargs):
        
        rebate = self.get_object()
        serializer_class = RebateExtendedSerializer(rebate, many=False)
        
        return Response(serializer_class.data)

    @swagger_auto_schema(operation_description='Get extended rebates', operation_id='Get extended rebates')
    @action(methods=['GET'], detail=False)
    def extended_all(self, request, *args, **kwargs):
        
        rebates = Rebate.objects.all().order_by('-created_at')
        serializer_class = RebateExtendedSerializer(rebates, many=True)
        
        return Response(serializer_class.data)
    
    @swagger_auto_schema(operation_description='Get rebates monthly statistic', operation_id='Get rebates monthly statistic')
    @action(methods=['GET'], detail=False)
    def get_monthly_statistic(self, request, *args, **kwargs):

        timezone_ = pytz.timezone('Asia/Kuala_Lumpur')
        current_year = datetime.datetime.now(timezone_).year

        rebates = Rebate.objects.all()

        months = {
            'january': rebates.filter(
                created_at__year=current_year,
                created_at__month=1,
            ).count(),
            'february': rebates.filter(
                created_at__year=current_year,
                created_at__month=2,
            ).count(),
            'march': rebates.filter(
                created_at__year=current_year,
                created_at__month=3,
            ).count(),
            'april': rebates.filter(
                created_at__year=current_year,
                created_at__month=4,
            ).count(),
            'may': rebates.filter(
                created_at__year=current_year,
                created_at__month=5,
            ).count(),
            'june': rebates.filter(
                created_at__year=current_year,
                created_at__month=6,
            ).count(),
            'july': rebates.filter(
                created_at__year=current_year,
                created_at__month=7,
            ).count(),
            'august': rebates.filter(
                created_at__year=current_year,
                created_at__month=8,
            ).count(),
            'september': rebates.filter(
                created_at__year=current_year,
                created_at__month=9,
            ).count(),
            'october': rebates.filter(
                created_at__year=current_year,
                created_at__month=10,
            ).count(),
            'november': rebates.filter(
                created_at__year=current_year,
                created_at__month=11,
            ).count(),
            'december': rebates.filter(
                created_at__year=current_year,
                created_at__month=12,
            ).count()
        }

        statistic_data = months

        return JsonResponse(statistic_data)
    
    @swagger_auto_schema(operation_description='Get rebates statistic', operation_id='Get rebates statistic')
    @action(methods=['GET'], detail=False)
    def get_statistic(self, request, *args, **kwargs):

        timezone_ = pytz.timezone('Asia/Kuala_Lumpur')
        current_year = datetime.datetime.now(timezone_).year

        rebates = Rebate.objects.all()

        total_amount = 0

        for rebate in rebates:
            total_amount += (rebate.amount_approved)

        stats = {
            'count': rebates.filter(
                created_at__year=current_year
            ).count(),
            'amount': total_amount
        }

        statistic_data = stats

        return JsonResponse(statistic_data)

    @swagger_auto_schema(operation_description='Get rebates yearly statistic', operation_id='Get rebates yearly statistic')
    @action(methods=['GET'], detail=False)
    def get_yearly_statistic(self, request, *args, **kwargs):

        timezone_ = pytz.timezone('Asia/Kuala_Lumpur')
        current_year = datetime.datetime.now(timezone_).year

        rebates = Rebate.objects.all()

        total_amount = 0

        for rebate in rebates:
            total_amount += (rebate.amount_approved)

        stats = {
            'count': 0
        }

        statistic_data = stats

        return JsonResponse(statistic_data)