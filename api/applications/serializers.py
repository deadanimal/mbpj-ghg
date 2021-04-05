from datetime import datetime
from calendar import timegm
import json

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers

from drf_extra_fields.fields import Base64ImageField
from django.utils.timezone import now

from .models import (
    Application,
    ApplicationAssessment,
    ApplicationEvaluation,
    ApplicationEvaluationSchedule
)

from users.serializers import (
    CustomUserSerializer
)

from aspects.serializers import (
    AspectSerializer
)

from houses.serializers import (
    HouseSerializer
)

from medias.serializers import (
    MediaSerializer
)

class ApplicationSerializer(serializers.ModelSerializer):
    # electricity_bill_1_doc = Base64ImageField()
    # electricity_bill_2_doc = Base64ImageField()
    # electricity_bill_3_doc = Base64ImageField()
    # water_bill_1_doc = Base64ImageField()
    # water_bill_2_doc = Base64ImageField()
    # water_bill_3_doc = Base64ImageField()

    class Meta:
        model = Application
        fields = '__all__'


class ApplicationAssessmentSerializer(serializers.ModelSerializer):
    # supporting_doc = Base64ImageField()
    
    class Meta:
        model = ApplicationAssessment
        fields = '__all__'


class ApplicationEvaluationSerializer(serializers.ModelSerializer):

    class Meta:
        model = ApplicationEvaluation
        fields = '__all__'


class ApplicationAssessmentExtendedSerializer(serializers.ModelSerializer):
    application = ApplicationSerializer(read_only=True)
    assessment_aspect = AspectSerializer(read_only=True)
    application_application_assessment = ApplicationEvaluationSerializer(read_only=True)
    supporting_doc = MediaSerializer(read_only=True)
    
    class Meta:
        model = ApplicationAssessment
        fields = '__all__'


class ApplicationEvaluationExtendedSerializer(serializers.ModelSerializer):
    application_assessment = ApplicationAssessmentExtendedSerializer(read_only=True)

    class Meta:
        model = ApplicationEvaluation
        fields = '__all__'


class ApplicationEvaluationScheduleSerializer(serializers.ModelSerializer):

    class Meta:
        model = ApplicationEvaluationSchedule
        fields = '__all__'


class ApplicationEvaluationScheduleExtendedSerializer(serializers.ModelSerializer):
    application = ApplicationSerializer(read_only=True)

    class Meta:
        model = ApplicationEvaluationSchedule
        fields = '__all__'


class ApplicationExtendedSerializer(serializers.ModelSerializer):
    applicant = CustomUserSerializer(read_only=True)
    evaluator_nominated = CustomUserSerializer(read_only=True)
    applied_house = HouseSerializer(read_only=True)
    electricity_bill_1_doc = MediaSerializer(read_only=True)
    electricity_bill_2_doc = MediaSerializer(read_only=True)
    electricity_bill_3_doc = MediaSerializer(read_only=True)
    water_bill_1_doc = MediaSerializer(read_only=True)
    water_bill_2_doc = MediaSerializer(read_only=True)
    water_bill_3_doc = MediaSerializer(read_only=True)
    application_assessment_application = ApplicationAssessmentExtendedSerializer(many=True, read_only=True)
    evaluation_schedule_application = ApplicationEvaluationScheduleSerializer(read_only=True)

    class Meta:
        model = Application
        fields = '__all__'