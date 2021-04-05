import json

from datetime import datetime
from calendar import timegm

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers

from django.utils.timezone import now

from .models import (
    Notification
)

from users.serializers import (
    CustomUserSerializer
)

class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = '__all__'


class NotificationExtendedSerializer(serializers.ModelSerializer):
    triggered_by = CustomUserSerializer(read_only=True)
    triggered_for = CustomUserSerializer(read_only=True)

    class Meta:
        model = Notification
        fields = '__all__'
        # read_only_fields = ['id']

