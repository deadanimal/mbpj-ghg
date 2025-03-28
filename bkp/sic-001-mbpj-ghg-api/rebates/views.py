from django.shortcuts import render
from django.db.models import Q, Sum

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from datetime import datetime

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
    filterset_fields = ['application_id']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]

    def get_queryset(self):
        queryset = Rebate.objects.all()
        return queryset

    @action(methods=['GET'], detail=False)
    def extended(self, request, *args, **kwargs):

        queryset = Rebate.objects.all()

        serializer_class = RebateExtendedSerializer(
            queryset, many=True)

        return Response(serializer_class.data)

    @action(methods=['GET'], detail=False)
    def get_total_rebate_awarded_since_2011(self, request):

        queryset = Rebate.objects.all().aggregate(Sum('amount_approved'))

        return Response(queryset)
    
    @action(methods=['GET'], detail=False)
    def get_total_rebate_awarded_current_year(self, request):

        now = datetime.now()
        queryset = Rebate.objects.filter(payment_date__year=now.strftime("%Y")).aggregate(Sum('amount_approved'))

        return Response(queryset)