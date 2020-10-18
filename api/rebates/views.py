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

from .models import (
    Rebate
)

from .serializers import (
    RebateSerializer,
    RebateExtendedSerializer
)


class RebateViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Rebate.objects.all()
    serializer_class = RebateSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] # IsAuthenticated AllowAny
        
        # if self.action == 'list':
        #     permission_classes = [IsAuthenticated]
        # else:
        #     permission_classes = [IsAuthenticated]
        
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Rebate.objects.all()

        # if user.user_type == 'AP':
        #     queryset = CustomUser.objects.all() 
        # elif user.user_type == 'EV':
        #     queryset = CustomUser.objects.none()
        # elif user.user_type == 'AD':
        #     queryset = CustomUser.objects.all()              
        # else:
        #     queryset = CustomUser.objects.none()

        return queryset  

    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):
        
        queryset = Rebate.objects.all()
        serializer_class = RebateExtendedSerializer(queryset, many=True)
        
        return Response(serializer_class.data)

