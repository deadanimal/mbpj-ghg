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
    Notification
)

from .serializers import (
    NotificationSerializer,
    NotificationExtendedSerializer
)

from users.models import (
    CustomUser
)

@method_decorator(
    name='list', 
    decorator=swagger_auto_schema(
        operation_id='Get all notifications',
        operation_description='Get all notifications'
    )
)
@method_decorator(
    name='create', 
    decorator=swagger_auto_schema(
        operation_id='Create an notification',
        operation_description='Create an notification'
    )
)
@method_decorator(
    name='update', 
    decorator=swagger_auto_schema(
        operation_id='Update an notification',
        operation_description='Update an notification'
    )
)
@method_decorator(
    name='partial_update', 
    decorator=swagger_auto_schema(
        operation_id='Patch an notification',
        operation_description='Patch an notification'
    )
)
class NotificationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [IsAuthenticated] # IsAuthenticated AllowAny
        
        # if self.action == 'get_statistic':
        #     permission_classes = [AllowAny]
        # else:
        #     permission_classes = [IsAuthenticated]
        
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Notification.objects.all()
        
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

    @swagger_auto_schema(operation_description='Get extended notification', operation_id='Get extended notification')
    @action(methods=['GET'], detail=True)
    def extended(self, request, *args, **kwargs):
        
        notification = self.get_object()
        serializer_class = NotificationExtendedSerializer(notification, many=False)
        
        return Response(serializer_class.data)

    @swagger_auto_schema(operation_description='Get extended notifications', operation_id='Get extended notifications')
    @action(methods=['GET'], detail=False)
    def extended_all(self, request, *args, **kwargs):
        
        Notifications = Notification.objects.all().order_by('-created_at')
        serializer_class = NotificationExtendedSerializer(Notifications, many=True)
        
        return Response(serializer_class.data)
    
    @swagger_auto_schema(operation_description='Mark notification as read', operation_id='Mark notification as read')
    @action(methods=['GET'], detail=True)
    def read(self, request, *args, **kwargs):

        notification = self.objects()
        notification.read = True
        notification.save()
        serializer_class = NotificationExtendedSerializer(notification, many=False)
        
        return Response(serializer_class.data)