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

class Aspect(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=100, default='NA')
    active = models.BooleanField(default=True)
    
    ASPECT_TYPE = [
        ('EN', 'Energy'),
        ('WA', 'Water'),
        ('TR', 'Transportation'),
        ('BI', 'Biodiversity'),
        ('WE', 'Waste'),
        ('NA', 'Not Available')
    ]
    aspect_type = models.CharField(max_length=2, choices=ASPECT_TYPE, default='NA')
    description_en = models.CharField(max_length=100, null=True)
    description_ms = models.CharField(max_length=100, null=True)
    incentive = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

