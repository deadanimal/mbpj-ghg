from datetime import datetime
from calendar import timegm
import json

from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.password_validation import validate_password
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from django.utils.timezone import now

from .models import (
    CustomUser,
    UserOccupation,
    UserEvent
)

class CustomUserSerializer(serializers.ModelSerializer):
    nric_picture = Base64ImageField(required=False)
    profile_picture = Base64ImageField(required=False)
    class Meta:
        model = CustomUser
        fields = 'id','full_name', 'new_nric', 'old_nric', 'phone', 'tel', 'email', 'gender', 'occupation', 'nric_picture', 'profile_picture', 'relationship_type', 'user_type', 'username', 'is_active', 'date_joined'
        read_only_fields = ['id']

class UserOccupationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserOccupation
        fields = '__all__'
        read_only_fields = ['id']

class UserEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEvent
        fields = '__all__'
        read_only_fields = ['id']
        
class ChangePasswordSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    # old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('password1', 'password2') # 'old_password'

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    # def validate_old_password(self, value):
    #     user = self.context['request'].user
    #     if not user.check_password(value):
    #         raise serializers.ValidationError({"old_password": "Old password is not correct"})
    #     return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password1'])
        instance.save()

        return instance