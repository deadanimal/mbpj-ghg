from datetime import datetime
from calendar import timegm
import json

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers

from django.utils.timezone import now

from .models import (
    House
)

from users.serializers import (
    CustomUserSerializer
)

class HouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = House
        fields = '__all__'


class HouseExtendedSerializer(serializers.ModelSerializer):
    owner = CustomUserSerializer(read_only=True)

    class Meta:
        model = House
        fields = '__all__'

