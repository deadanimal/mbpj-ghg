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
    CustomUser, 
)

from .serializers import (
    CustomUserSerializer, 
)


class CustomUserViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filterset_fields = [
        'occupation',
        'user_type',
        'gender'
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
        queryset = CustomUser.objects.all()

        # if user.user_type == 'AP':
        #     queryset = CustomUser.objects.filter(
        #         id = user.id
        #     )
        # elif user.user_type == 'EV':
        #     queryset = CustomUser.objects.filter(
        #         id = user.id
        #     )
        # elif user.user_type == 'AD':
        #     queryset = CustomUser.objects.all()              
        # else:
        #     queryset = CustomUser.objects.none()

        return queryset    
