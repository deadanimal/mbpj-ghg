import json

from datetime import datetime
from calendar import timegm

from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers

from drf_extra_fields.fields import Base64ImageField
from django.utils.timezone import now

from .models import (
    Media
)

class MediaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Media
        fields = '__all__'
