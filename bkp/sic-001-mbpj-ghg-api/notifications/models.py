from __future__ import unicode_literals 
import datetime, uuid, pytz 
from django.db import models
from django.utils.formats import get_format
#from django import models
from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from ghg.helpers import PathAndRename

from users.models import (
    CustomUser
)


class Notification(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    title = models.CharField(max_length=255, blank=True)
    message = models.TextField(blank=True)
    to_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, related_name='notification_to_user')
    date_sent = models.DateField(null=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date_sent']
