# users/models.py
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

from api.helpers import PathAndRename


class UserOccupation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    name = models.CharField(blank=True, max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    full_name = models.CharField(blank=True, max_length=255)

    new_nric = models.CharField(blank=True, max_length=100)
    old_nric = models.CharField(blank=True, max_length=100)

    phone = models.CharField(blank=True, max_length=100)
    tel = models.CharField(blank=True, max_length=100)
    email = models.CharField(blank=True, max_length=100)

    GENDER_TYPE = [
        ('ML', 'Male'),
        ('FM', 'Female'),
        ('NA', 'Not Available')
    ]

    gender = models.CharField(max_length=2, choices=GENDER_TYPE, default='NA')
    occupation = models.CharField(blank=True, null=True, max_length=100)

    USER_TYPE = [
        ('AP', 'Applicant'),
        ('EV', 'Evaluator'),
        ('AD', 'Administrator'),
        ('NA', 'Not Available'),
    ]

    user_type = models.CharField(max_length=2, choices=USER_TYPE, default='AP')
    nric_picture = models.ImageField(null=True, upload_to=PathAndRename('nric'))
    
    RELATIONSHIP_TYPE = [
        ('SL', 'Self'),
        ('SP', 'Spouse'),
        ('SB', 'Siblings'),
        ('PR', 'Parents'),
        ('CH', 'Children'),
        ('OT', 'Others')
    ]
    relationship_type = models.CharField(max_length=2, choices=RELATIONSHIP_TYPE, default='SL')
    profile_picture = models.ImageField(null=True, upload_to=PathAndRename('images'))

    class Meta:
        ordering = ['-date_joined']

    def __str__(self):
        return self.full_name


class UserEvent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    action = models.CharField(max_length=100, default='NA')
    action_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, related_name='user_event_by')
    date_time = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        ordering = ['-date_time']
