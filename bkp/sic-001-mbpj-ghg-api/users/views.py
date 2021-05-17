from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['full_name'] = user.full_name
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

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

from .models import (
    CustomUser,
    UserOccupation,
    UserEvent
)

from .serializers import (
    CustomUserSerializer,
    UserOccupationSerializer,
    UserEventSerializer
)

class CustomUserViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['user_type', 'gender', 'occupation', 'relationship_type']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]

    def get_queryset(self):
        queryset = CustomUser.objects.all()
        return queryset
    
    def update(self, request, pk=None):
        UserEvent.objects.create(
            action = 'Update user details',
            action_by = self.request.user
        )
        return super().update(request)

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

class UserOccupationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = UserOccupation.objects.all()
    serializer_class = UserOccupationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]

    def get_queryset(self):
        queryset = UserOccupation.objects.all()
        return queryset

class UserEventViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = UserEvent.objects.all()
    serializer_class = UserEventSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = ['action_by', 'date_time']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    
    
    def get_queryset(self):
        queryset = UserEvent.objects.all()
        return queryset
        