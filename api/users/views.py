from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email
        token['user_type'] = user.user_type

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

import datetime

from django.shortcuts import render
from django.db.models import Q
from django.http import JsonResponse

from drf_yasg.utils import swagger_auto_schema
from django.utils.decorators import method_decorator

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

from .models import (
    CustomUser, 
)

from .serializers import (
    CustomUserSerializer, 
    CustomUserExtendedSerializer
)

@method_decorator(
    name='list', 
    decorator=swagger_auto_schema(
        operation_id='Get all users',
        operation_description='Get all users'
    )
)
@method_decorator(
    name='create', 
    decorator=swagger_auto_schema(
        operation_id='Create an user',
        operation_description='Create an user'
    )
)
@method_decorator(
    name='update', 
    decorator=swagger_auto_schema(
        operation_id='Update an user',
        operation_description='Update an user'
    )
)
@method_decorator(
    name='partial_update', 
    decorator=swagger_auto_schema(
        operation_id='Patch an user',
        operation_description='Patch an user'
    )
)
class CustomUserViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'occupation',
        'user_type',
        'gender',
        'is_active'
    ]

    def get_permissions(self):
        # permission_classes = [IsAuthenticated] # AllowAny IsAuthenticated
        
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]
        

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = CustomUser.objects.all()
        
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
    
    @swagger_auto_schema(operation_description='Get extended user', operation_id='Get extended user')
    @action(methods=['GET'], detail=False)
    def get_self(self, request, *args, **kwargs):
        user = self.request.user

        serializer = CustomUserExtendedSerializer(user)
        return Response(serializer.data)
    
    @swagger_auto_schema(operation_description='Get extended users', operation_id='Get extended users')
    @action(methods=['GET'], detail=True)
    def extended(self, request, *args, **kwargs):
        requestor = self.request.user
        user = self.get_object()

        serializer = CustomUserExtendedSerializer(user)
        return Response(serializer.data)

    @swagger_auto_schema(operation_description='Get total users', operation_id='Get total users')
    @action(methods=['GET'], detail=False)
    def get_total_user(self, request, *args, **kwargs):
        current_year = datetime.date.today().year
        # print(self.request.user)
        users = CustomUser.objects.all()
        total_all = users.count()
        total_current_year = users.filter(date_joined__year=current_year).count()
        total_current_jan = users.filter(date_joined__year=current_year, date_joined__month=1).count()
        total_current_feb = users.filter(date_joined__year=current_year, date_joined__month=2).count()
        total_current_mar = users.filter(date_joined__year=current_year, date_joined__month=3).count()
        total_current_apr = users.filter(date_joined__year=current_year, date_joined__month=4).count()
        total_current_may = users.filter(date_joined__year=current_year, date_joined__month=5).count()
        total_current_jun = users.filter(date_joined__year=current_year, date_joined__month=6).count()
        total_current_jul = users.filter(date_joined__year=current_year, date_joined__month=7).count()
        total_current_aug = users.filter(date_joined__year=current_year, date_joined__month=8).count()
        total_current_sep = users.filter(date_joined__year=current_year, date_joined__month=9).count()
        total_current_oct = users.filter(date_joined__year=current_year, date_joined__month=10).count()
        total_current_nov = users.filter(date_joined__year=current_year, date_joined__month=11).count()
        total_current_dec = users.filter(date_joined__year=current_year, date_joined__month=12).count()

        json_ = {
            'total_all': total_all,
            'total_current_year': total_current_year,
            'total_current_jan': total_current_jan,
            'total_current_feb': total_current_feb,
            'total_current_mar': total_current_mar,
            'total_current_apr': total_current_apr,
            'total_current_may': total_current_may,
            'total_current_jun': total_current_jun,
            'total_current_jul': total_current_jul,
            'total_current_aug': total_current_aug,
            'total_current_sep': total_current_sep,
            'total_current_oct': total_current_oct,
            'total_current_nov': total_current_nov,
            'total_current_dec': total_current_dec,
        }

        return JsonResponse(json_) 

    @swagger_auto_schema(operation_description='Activate user', operation_id='Activate user')
    @action(methods=['GET'], detail=True)
    def activate(self, request, *args, **kwargs):
        user = self.get_object()
        admin = request.user

        if admin.user_type == 'AD' or admin.user_type == 'SA':
            user.is_active = True
            user.save()
        else:
            pass

        serializer = CustomUserExtendedSerializer(user)
        return Response(serializer.data)
    
    @swagger_auto_schema(operation_description='Deactivate user', operation_id='Deactivate user')
    @action(methods=['GET'], detail=True)
    def deactivate(self, request, *args, **kwargs):
        user = self.get_object()
        admin = request.user

        if admin.user_type == 'AD' or admin.user_type == 'SA':
            user.is_active = False
            user.save()
        else:
            pass

        serializer = CustomUserExtendedSerializer(user)
        return Response(serializer.data)

    @swagger_auto_schema(operation_description='Get evaluators', operation_id='Get evaluators')
    @action(methods=['GET'], detail=False)
    def get_evaluators(self, request, *args, **kwargs):
        requestor = self.request.user
        evaluators = CustomUser.objects.filter(user_type='EV')

        serializer = CustomUserExtendedSerializer(evaluators, many=True)
        return Response(serializer.data)