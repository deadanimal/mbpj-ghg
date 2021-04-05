from __future__ import unicode_literals
import json
import pytz
import uuid
import datetime

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

from medias.models import (
    Media
)

class Application(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    reference_no = models.CharField(max_length=20, null=True)

    applicant = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        limit_choices_to={
            'user_type': 'AP'
        }
    )
    evaluator_nominated = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
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
    applied_house = models.ForeignKey(
        House, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='application_applied_house'
    )
    total_lamp = models.IntegerField(default=0)
    total_led = models.IntegerField(default=0)

    vehicle_car = models.IntegerField(default=0)
    vehicle_motorcycle = models.IntegerField(default=0)
    vehicle_bicycle = models.IntegerField(default=0)
    vehicle_other = models.IntegerField(default=0)

    electricity_bill_1_month = models.DateField(null=True)
    electricity_bill_1_usage = models.IntegerField(default=0)
    electricity_bill_1_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='application_electricity_bill_1'
    )
    electricity_bill_2_month = models.DateField(null=True)
    electricity_bill_2_usage = models.IntegerField(default=0)
    electricity_bill_2_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='application_electricity_bill_2'
    )
    electricity_bill_3_month = models.DateField(null=True)
    electricity_bill_3_usage = models.IntegerField(default=0)
    electricity_bill_3_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='application_electricity_bill_3'
    )

    water_bill_1_month = models.DateField(null=True)
    water_bill_1_usage = models.IntegerField(default=0)
    water_bill_1_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='application_water_bill_1'
    )
    water_bill_2_month = models.DateField(null=True)
    water_bill_2_usage = models.IntegerField(default=0)
    water_bill_2_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='application_water_bill_2'
    )
    water_bill_3_month = models.DateField(null=True)
    water_bill_3_usage = models.IntegerField(default=0)
    water_bill_3_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='application_water_bill_3'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    approved_at = models.DateTimeField(null=True)

    def save(self,*args, **kwargs):
        timezone_ = pytz.timezone('Asia/Kuala_Lumpur')
        if not self.reference_no:
            prefix = 'GHG{}'.format(datetime.datetime.now(timezone_).strftime('%y%m%d'))
            prev_instances = self.__class__.objects.filter(reference_no__contains=prefix)
            if prev_instances.exists():
                last_instance_id = prev_instances.last().reference_no[-4:]
                self.reference_no = prefix+'{0:04d}'.format(int(last_instance_id)+1)
            else:
                self.reference_no = prefix+'{0:04d}'.format(1)
        super(Application, self).save(*args, **kwargs)
    
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.reference_no


class ApplicationAssessment(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    application = models.ForeignKey(
        Application, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='application_assessment_application'
    )
    assessment_aspect = models.ForeignKey(
        Aspect, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='application_assessment_assessment_aspect'
    )
    remarks = models.CharField(max_length=255, null=True)
    supporting_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='assessment_supporting_doc'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.application


class ApplicationEvaluation(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    application_assessment = models.ForeignKey(
        ApplicationAssessment, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='application_application_assessment'
    )

    equipment = models.IntegerField(default=0)
    system = models.IntegerField(default=0)
    efficiency = models.IntegerField(default=0)

    remarks = models.CharField(max_length=255, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.application_assessment


class ApplicationEvaluationSchedule(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    application = models.ForeignKey(
        Application, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='evaluation_schedule_application'
    )
    date = models.DateField(null=True)
    SESSION = [
        ('AM', 'Morning'),
        ('PM', 'Evening'),
        ('NA', 'Not Available')
    ]
    session = models.CharField(
        max_length=2, 
        choices=SESSION, 
        default='NA'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.application