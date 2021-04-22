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
    document = Base64ImageField()

    class Meta:
        model = Media
        fields = '__all__'

    def create(self, validated_data):
        document = validated_data.pop('document')

        return Media.objects.create(document=document)
