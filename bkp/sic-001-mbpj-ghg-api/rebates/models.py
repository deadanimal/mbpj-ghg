from __future__ import unicode_literals 
import uuid 
from django.db import models
from django.utils.formats import get_format
#from django import models
from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from ghg.helpers import PathAndRename

from users.models import (
    CustomUser
)
from applications.models import (
    Application
)

class Rebate(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    application_id = models.ForeignKey(Application, on_delete=models.CASCADE, null=True, related_name='application')
    payment_date = models.DateField(null=True)
    amount_approved = models.DecimalField(max_digits=10, decimal_places=2, null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-payment_date']

