from datetime import datetime
from calendar import timegm
import json

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers

from django.utils.timezone import now

from .models import (
    Rebate
)

from applications.serializers import (
    ApplicationExtendedSerializer
)

class RebateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rebate
        fields = '__all__'
        read_only_fields = ['id']

class RebateExtendedSerializer(serializers.ModelSerializer):
    application_id = ApplicationExtendedSerializer(read_only=True)

    class Meta:
        model = Rebate
        fields = '__all__'
        read_only_fields = ['id']