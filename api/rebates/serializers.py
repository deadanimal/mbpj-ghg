import json

from datetime import datetime
from calendar import timegm

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers

from django.utils.timezone import now

from .models import (
    Rebate
)

from applications.serializers import (
    ApplicationSerializer
)

class RebateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rebate
        fields = '__all__'


class RebateExtendedSerializer(serializers.ModelSerializer):
    application = ApplicationSerializer(read_only=True)

    class Meta:
        model = Rebate
        fields = '__all__'
        # read_only_fields = ['id']

