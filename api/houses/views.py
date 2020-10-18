import json
import time

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

class HouseViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = House.objects.all()
    serializer_class = HouseSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'owner',
        'area',
        'building_type',
        'owner',
        'postcode',
        'relationship_type',
        'active'
    ]

    def get_permissions(self):
        permission_classes = [AllowAny] # AllowAny IsAuthenticated
        
        # if self.action == 'list':
        #     permission_classes = [IsAuthenticated]
        # else:
        #     permission_classes = [IsAuthenticated]
        
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = House.objects.all()

        # if user.user_type == 'AP':
        #     queryset = House.objects.filter(
        #         owner = user.id
        #     )
        #     print(queryset)
        # elif user.user_type == 'EV':
        #     queryset = House.objects.all()
        # elif user.user_type == 'AD':
        #     queryset = House.objects.all()              
        # else:
        #     queryset = House.objects.none()

        return queryset  


    @action(methods=['GET'], detail=True)
    def activate(self, request, *args, **kwargs):
        house = self.get_object()
        house.active = True
        house.save()

        serializer = HouseSerializer(house)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=True)
    def deactivate(self, request, *args, **kwargs):
        house = self.get_object()
        house.active = False
        house.save()

        serializer = HouseSerializer(house)
        return Response(serializer.data)
    
    @action(methods=['GET'], detail=False)
    def get_total_building_type(self, request, *args, **kwargs):
        total_all = House.objects.all().count()
        total_condominium = House.objects.filter(building_type='CD').count()
        total_flat = House.objects.filter(building_type='FL').count()
        total_town = House.objects.filter(building_type='TO').count()
        total_terrace = House.objects.filter(building_type='TE').count()
        total_bungalow = House.objects.filter(building_type='BS').count()
        total_apartment = House.objects.filter(building_type='AS').count()
        total_other = House.objects.filter(building_type='OT').count()

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

    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):
        
        queryset = House.objects.all()
        serializer_class = HouseExtendedSerializer(queryset, many=True)
        
        return Response(serializer_class.data)

