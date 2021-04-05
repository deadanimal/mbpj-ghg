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
    Aspect
)

from .serializers import (
    AspectSerializer
)


class AspectViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Aspect.objects.all()
    serializer_class = AspectSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'aspect_type'
    ]

    def get_permissions(self):
        permission_classes = [AllowAny] #[IsAuthenticated]

        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Aspect.objects.all()
        return queryset  


    @action(methods=['GET'], detail=True)
    def activate(self, request, *args, **kwargs):
        user = request.user
        aspect = self.get_object()
        
        if user.user_type == 'AD' or user.user_type == 'SA':
            aspect.active = True
            aspect.save()
        else:
            pass

        serializer = AspectExtendedSerializer(aspect)
        return Response(serializer.data)


    @action(methods=['GET'], detail=True)
    def deactivate(self, request, *args, **kwargs):
        user = request.user
        aspect = self.get_object()
        
        if user.user_type == 'AD' or user.user_type == 'SA':
            aspect.active = False
            aspect.save()
        else:
            pass

        serializer = AspectExtendedSerializer(aspect)
        return Response(serializer.data)