from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from ghg.helpers import PathAndRename

from users.models import (
    CustomUser
)

class Notification(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=100, null=True)
    message = models.TextField(max_length=255, null=True)
    read = models.BooleanField(default=False)

    triggered_by = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        related_name='notification_triggered_by'
    )
    triggered_for = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        related_name='notification_triggered_for'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    
    def __str__(self):
        return str(self.id)


