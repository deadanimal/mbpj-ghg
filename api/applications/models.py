from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from ghg.helpers import PathAndRename

from users.models import (
    CustomUser
)

from houses.models import (
    House
)

from aspects.models import (
    Aspect
)

class Application(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    applicant = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        limit_choices_to={
            'user_type': 'AP'
        }
    )
    evaluator_nominated = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        null=True,
        related_name='application_evaluator_nominated',
        limit_choices_to={
            'user_type': 'EV'
        }
    )

    STATUS = [
        ('AP', 'Approved'),
        ('CM', 'Completed'),
        ('CR', 'Created'),
        ('DR', 'Draft'),
        ('EV', 'Evaluation'),
        ('IP', 'In Progress'),
        ('PD', 'Paid'),
        ('RJ', 'Rejected'),
        ('SM', 'Submitted')
    ]
    status = models.CharField(max_length=2, choices=STATUS, default='CR')
    applied_house = models.ForeignKey(House, on_delete=models.CASCADE, null=True, related_name='application_applied_house')
    total_lamp = models.IntegerField(default=0, blank=True)
    total_led = models.IntegerField(default=0, blank=True)

    vehicle_car = models.IntegerField(default=0, blank=True)
    vehicle_motorcycle = models.IntegerField(default=0, blank=True)
    vehicle_bicycle = models.IntegerField(default=0, blank=True)
    vehicle_other = models.IntegerField(default=0, blank=True)

    electricity_bill_1_month = models.DateField(null=True)
    electricity_bill_1_usage = models.FloatField(default=0)
    electricity_bill_1_doc = models.ImageField(null=True, upload_to=PathAndRename('bills'))
    electricity_bill_2_month = models.DateField(null=True)
    electricity_bill_2_usage = models.FloatField(default=0)
    electricity_bill_2_doc = models.ImageField(null=True, upload_to=PathAndRename('bills'))
    electricity_bill_3_month = models.DateField(null=True)
    electricity_bill_3_usage = models.FloatField(default=0)
    electricity_bill_3_doc = models.ImageField(null=True, upload_to=PathAndRename('bills'))

    water_bill_1_month = models.DateField(null=True)
    water_bill_1_usage = models.FloatField(default=0)
    water_bill_1_doc = models.ImageField(null=True, upload_to=PathAndRename('bills'))
    water_bill_2_month = models.DateField(null=True)
    water_bill_2_usage = models.FloatField(default=0)
    water_bill_2_doc = models.ImageField(null=True, upload_to=PathAndRename('bills'))
    water_bill_3_month = models.DateField(null=True)
    water_bill_3_usage = models.FloatField(default=0)
    water_bill_3_doc = models.ImageField(null=True, upload_to=PathAndRename('bills'))

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    approved_at = models.DateTimeField(null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.applicant


class ApplicationAssessment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application = models.ForeignKey(Application, on_delete=models.CASCADE, null=True, related_name='application_assessment_application')
    assessment_aspect = models.ForeignKey(Aspect, on_delete=models.CASCADE, null=True, related_name='application_assessment_assessment_aspect')
    remarks = models.CharField(max_length=255, default='NA', blank=True)
    supporting_doc = models.ImageField(null=True, upload_to=PathAndRename('assessment'))

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.application


class ApplicationEvaluation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application_assessment = models.ForeignKey(ApplicationAssessment, on_delete=models.CASCADE, null=True, related_name='application_application_assessment')

    equipment = models.IntegerField(default=0)
    system = models.IntegerField(default=0)
    efficiency = models.IntegerField(default=0)

    remarks = models.CharField(max_length=255, default='NA')

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.application_assessment


class ApplicationEvaluationSchedule(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application = models.ForeignKey(Application, on_delete=models.CASCADE, null=True, related_name='evaluation_schedule_application')
    date = models.DateField(null=True)
    SESSION = [
        ('AM', 'Morning'),
        ('PM', 'Evening'),
        ('NA', 'Not Available')
    ]
    session = models.CharField(max_length=2, choices=SESSION, default='NA')

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.application