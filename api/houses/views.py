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
from django.db.models import Prefetch

from collections import Counter

from drf_yasg.utils import swagger_auto_schema
from django.utils.decorators import method_decorator

from .models import (
    House
)

from .serializers import (
    HouseSerializer,
    HouseExtendedSerializer
)

from users.models import (
    CustomUser
)

@method_decorator(
    name='list', 
    decorator=swagger_auto_schema(
        operation_id='Get all houses',
        operation_description='Get all houses'
    )
)
@method_decorator(
    name='create', 
    decorator=swagger_auto_schema(
        operation_id='Create an house',
        operation_description='Create an house'
    )
)
@method_decorator(
    name='update', 
    decorator=swagger_auto_schema(
        operation_id='Update an house',
        operation_description='Update an house'
    )
)
@method_decorator(
    name='partial_update', 
    decorator=swagger_auto_schema(
        operation_id='Patch an house',
        operation_description='Patch an house'
    )
)
class HouseViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = House.objects.all()
    serializer_class = HouseSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'owner',
        'town',
        'building_type',
        'owner',
        'postcode',
        'relationship_type',
        'active'
    ]

    def get_permissions(self):
        # permission_classes = [AllowAny] # AllowAny IsAuthenticated
        
        if self.action == 'get_monthly_statistic':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = House.objects.all()

        if user.is_anonymous:
            queryset = queryset.none()
        else:
            if user.user_type == 'AP':
                queryset = queryset.filter(
                    owner=user.id
                )
            elif user.user_type == 'EV':
                queryset = queryset.all()
            elif user.user_type == 'AD':
                queryset = queryset.all()
            elif user.user_type == 'SA':
                queryset = queryset.all()
            else:
                queryset = queryset.none()

        return queryset

    @swagger_auto_schema(operation_description='Get extended notification', operation_id='Get extended notification')
    @action(methods=['GET'], detail=True)
    def extended(self, request, *args, **kwargs):
        user = request.user
        house = self.get_object()

        if user.is_anonymous:
            house = house.none()
        else:
            if user.user_type == 'AP':
                if house.owner == user:
                    house = house
                else:
                    house = house.none()
            else:
                house = house

        serializer_class = HouseExtendedSerializer(house, many=False)
        return Response(serializer_class.data)

    @swagger_auto_schema(operation_description='Get extended notifications', operation_id='Get extended notifications')
    @action(methods=['GET'], detail=False)
    def extended_all(self, request, *args, **kwargs):
        user = request.user
        houses = House.objects.all()

        if user.is_anonymous:
            houses = houses.none()
        else:
            if user.user_type == 'AP':
                houses = houses.filter(
                    owner=user.id
                )
            elif user.user_type == 'EV':
                houses = houses.all()
            elif user.user_type == 'AD':
                houses = houses.all()
            elif user.user_type == 'SA':
                houses = houses.all()
            else:
                houses = houses.none()
        
        serializer_class = HouseExtendedSerializer(houses, many=True)
        return Response(serializer_class.data)

    @swagger_auto_schema(operation_description='Get owner houses', operation_id='Get owner houses')
    @action(methods=['POST'], detail=False)
    def get_owner_houses(self, request, *args, **kwargs):
        user = request.user

        request_ = json.loads(request.body)
        request_owner_id_ = request_['owner']

        owner = CustomUser.objects.get(id=request_owner_id_)
        houses = House.objects.filter(owner=owner)

        if user.is_anonymous:
            houses = houses.none()
        else:
            if user.user_type == 'AP':
                houses = houses.none()
            elif user.user_type == 'EV':
                houses = houses
            elif user.user_type == 'AD':
                houses = houses
            elif user.user_type == 'SA':
                houses = houses
            else:
                houses = houses.none()
        
        serializer_class = HouseExtendedSerializer(houses, many=True)
        return Response(serializer_class.data)
    
    @swagger_auto_schema(operation_description='Activate house', operation_id='Activate house')
    @action(methods=['GET'], detail=True)
    def activate(self, request, *args, **kwargs):
        house = self.get_object()
        house.active = True
        house.save()

        serializer = HouseExtendedSerializer(house)
        return Response(serializer.data)
    
    @swagger_auto_schema(operation_description='Deactivate house', operation_id='Deactivate house')
    @action(methods=['GET'], detail=True)
    def deactivate(self, request, *args, **kwargs):
        house = self.get_object()
        house.active = False
        house.save()

        serializer = HouseExtendedSerializer(house)
        return Response(serializer.data)
    
    @swagger_auto_schema(operation_description='Get house total buiding type', operation_id='Get house total buiding type')
    @action(methods=['GET'], detail=False)
    def get_total_building_type(self, request, *args, **kwargs):
        houses = House.objects.all()
        total_all = houses.count()
        total_condominium = houses.filter(building_type='CD').count()
        total_flat = houses.filter(building_type='FL').count()
        total_town = houses.filter(building_type='TO').count()
        total_terrace = houses.filter(building_type='TE').count()
        total_bungalow = houses.filter(building_type='BS').count()
        total_apartment = houses.filter(building_type='AS').count()
        total_other = houses.filter(building_type='OT').count()

        json_ = {
            'total_all': total_all,
            'total_condominium': total_condominium,
            'total_flat': total_flat,
            'total_town': total_town,
            'total_terrace': total_terrace,
            'total_bungalow': total_bungalow,
            'total_apartment': total_apartment,
            'total_other': total_other
        }
        return JsonResponse(json_) 

    @swagger_auto_schema(operation_description='Get house monthly statistic', operation_id='Get house monthly statistic')
    @action(methods=['GET'], detail=False)
    def get_monthly_statistic(self, request, *args, **kwargs):
        timezone_ = pytz.timezone('Asia/Kuala_Lumpur')
        current_year = datetime.datetime.now(timezone_).year

        houses = House.objects.all()

        months = {
            'january': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=1, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=1, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=1, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=1, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=1, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=1, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=1, building_type='OT').count(),
            },
            'february': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=2, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=2, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=2, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=2, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=2, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=2, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=2, building_type='OT').count(),
            },
            'march': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=3, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=3, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=3, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=3, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=3, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=3, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=3, building_type='OT').count(),
            },
            'april': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=4, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=4, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=4, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=4, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=4, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=4, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=4, building_type='OT').count(),
            },
            'may': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=5, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=5, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=5, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=5, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=5, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=5, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=5, building_type='OT').count(),
            },
            'june': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=6, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=6, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=6, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=6, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=6, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=6, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=6, building_type='OT').count(),
            },
            'july': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=7, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=7, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=7, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=7, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=7, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=7, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=7, building_type='OT').count(),
            },
            'august': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=8, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=8, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=8, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=8, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=8, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=8, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=8, building_type='OT').count(),
            },
            'september': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=9, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=9, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=9, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=9, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=9, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=9, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=9, building_type='OT').count(),
            },
            'october': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=10, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=10, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=10, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=10, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=10, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=10, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=10, building_type='OT').count(),
            },
            'november': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=11, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=11, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=11, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=11, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=11, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=11, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=11, building_type='OT').count(),
            },
            'december': {
                'condominium': houses.filter(created_at__year=current_year, created_at__month=12, building_type='CD').count(),
                'flat': houses.filter(created_at__year=current_year, created_at__month=12, building_type='FL').count(),
                'townhouse': houses.filter(created_at__year=current_year, created_at__month=12, building_type='TO').count(),
                'terrace': houses.filter(created_at__year=current_year, created_at__month=12, building_type='TE').count(),
                'bungalow': houses.filter(created_at__year=current_year, created_at__month=12, building_type='BS').count(),
                'apartment': houses.filter(created_at__year=current_year, created_at__month=12, building_type='AS').count(),
                'other': houses.filter(created_at__year=current_year, created_at__month=12, building_type='OT').count(),
            }
        }

        statistic_data = months

        return JsonResponse(statistic_data)
