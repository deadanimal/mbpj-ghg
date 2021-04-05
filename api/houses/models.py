from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from ghg.helpers import PathAndRename

from users.models import (
    CustomUser
)

from medias.models import (
    Media
)

class House(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    owner = models.ForeignKey(
        CustomUser, 
        on_delete=models.CASCADE,
        null=True,
        limit_choices_to={
            'user_type': 'AP'
        }
    )
    location = models.CharField(null=True, max_length=255)
    address_1 = models.CharField(null=True, max_length=100)
    address_2 = models.CharField(null=True, max_length=100)
    address_3 = models.CharField(null=True, max_length=100)
    postcode = models.CharField(null=True, max_length=5)
    town = models.CharField(null=True, max_length=100)
    state = models.CharField(default='SELANGOR', max_length=100)

    BUILDING_TYPE = [
        ('CD', 'Condominium'),
        ('FL', 'Flat'),
        ('TO', 'Townhouse'),
        ('TE', 'Terrace House'),
        ('BS', 'Bungalow / Semidetached'),
        ('AS', 'Apartment / Service Apartment'),
        ('OT', 'Other')
    ]
    building_type = models.CharField(
        max_length=2, 
        choices=BUILDING_TYPE, 
        default='BG'
    )

    assessment_tax_account = models.CharField(null=True, max_length=100)
    assessment_tax_doc = models.ForeignKey(
        Media, 
        on_delete=models.SET_NULL, 
        null=True,
        related_name='house_assessment_tax_doc'
    )

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
    relationship_type = models.CharField(
        max_length=2, 
        choices=RELATIONSHIP_TYPE, 
        default='SL'
    )

    active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return "{}".format(self.owner)

