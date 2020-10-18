from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from ghg.helpers import PathAndRename

from users.models import (
    CustomUser
)

class House(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(
        CustomUser, 
        on_delete=models.CASCADE,
        null=True,
        limit_choices_to={
            'user_type': 'AP'
        }
    )
    location = models.CharField(blank=True, max_length=255)
    address = models.CharField(blank=True, max_length=255)
    postcode = models.CharField(blank=True, max_length=5)
    area = models.CharField(blank=True, max_length=100)

    BUILDING_TYPE = [
        ('CD', 'Condominium'),
        ('FL', 'Flat'),
        ('TO', 'Townhouse'),
        ('TE', 'Terrace House'),
        ('BS', 'Bungalow / Semidetached'),
        ('AS', 'Apartment / Service Apartment'),
        ('OT', 'Other')
    ]
    building_type = models.CharField(max_length=2, choices=BUILDING_TYPE, default='BG')

    assessment_tax_account = models.CharField(blank=True, max_length=100)
    assessment_tax_doc = models.ImageField(null=True, upload_to=PathAndRename('assessment_tax'))

    staying_since = models.DateField(null=True)
    occupants = models.IntegerField(default=1)

    RELATIONSHIP_TYPE = [
        ('SL', 'Self'),
        ('SP', 'Spouse'),
        ('SB', 'Siblings'),
        ('PR', 'Parents'),
        ('CH', 'Children'),
        ('OT', 'Others')
    ]
    relationship_type = models.CharField(max_length=2, choices=RELATIONSHIP_TYPE, default='SL')

    active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return "{}".format(self.owner)

