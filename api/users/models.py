from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from ghg.helpers import PathAndRename

class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    full_name = models.CharField(blank=True, max_length=255)

    nric_old = models.CharField(blank=True, max_length=12)
    nric_new = models.CharField(blank=True, max_length=12)
    nric_doc = models.ImageField(null=True, upload_to=PathAndRename('images'))

    mobile = models.CharField(blank=True, max_length=12)
    phone = models.CharField(blank=True, max_length=12)
    email = models.CharField(blank=True, max_length=50)
    occupation = models.CharField(blank=True, max_length=50)

    USER_TYPE = [
        ('AD', 'Admin'),
        ('AP', 'Applicant'),
        ('EV', 'Evaluator'),
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
   
    def __str__(self):
        return self.full_name

