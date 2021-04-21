from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from ghg.helpers import PathAndRename

from medias.models import (
    Media
)

class CustomUser(AbstractUser):
    id = models.AutoField(primary_key=True, editable=False)
    full_name = models.CharField(null=True, max_length=255)

    nric_old = models.CharField(null=True, max_length=20)
    nric_new = models.CharField(null=True, max_length=20)
    nric_doc = models.ForeignKey(
        Media, 
        null=True, 
        on_delete=models.SET_NULL, 
        related_name='user_nric'
    )

    mobile = models.CharField(null=True, max_length=20)
    phone = models.CharField(null=True, max_length=20)
    email = models.CharField(null=True, max_length=50)
    occupation = models.CharField(null=True, max_length=50)

    USER_TYPE = [
        ('AD', 'Admin'),
        ('AP', 'Applicant'),
        ('EV', 'Evaluator'),
        ('SA', 'Super Admin'),
        ('NA', 'Not Available')
    ]

    user_type = models.CharField(
        max_length=2,
        choices=USER_TYPE,
        default='AP'
    )

    GENDER = [
        ('ML', 'Male'),
        ('FM', 'Female'),
        ('NA', 'Not Available')
    ]

    gender = models.CharField(
        max_length=2,
        choices=GENDER,
        default='NA'
    )

    class Meta:
        ordering = ['id']
    
    def __str__(self):
        return self.full_name