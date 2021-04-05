from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from ghg.helpers import PathAndRename

from applications.models import (
    Application
)

from users.models import (
    CustomUser
)

class Rebate(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    application = models.ForeignKey(
        Application,
        on_delete=models.SET_NULL,
        null=True
    ) 
    approved_by = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        limit_choices_to={
            'user_type': 'AD'
        }
    )
    
    amount_approved = models.IntegerField(default=0)
    remarks = models.TextField(null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    
    def __str__(self):
        return str(self.id)


