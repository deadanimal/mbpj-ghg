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

from drf_yasg.utils import swagger_auto_schema
from django.utils.decorators import method_decorator

from .models import (
    Media
)

from .serializers import (
    MediaSerializer
)

@method_decorator(
    name='list', 
    decorator=swagger_auto_schema(
        operation_id='Get all medias',
        operation_description='Get all medias'
    )
)
@method_decorator(
    name='create', 
    decorator=swagger_auto_schema(
        operation_id='Create an media',
        operation_description='Create an media'
    )
)
@method_decorator(
    name='update', 
    decorator=swagger_auto_schema(
        operation_id='Update an media',
        operation_description='Update an media'
    )
)
@method_decorator(
    name='partial_update', 
    decorator=swagger_auto_schema(
        operation_id='Patch an media',
        operation_description='Patch an media'
    )
)
class MediaViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        # permission_classes = [AllowAny] # IsAuthenticated AllowAny
        
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Media.objects.all()

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
                queryset = queryset.none()

        return queryset