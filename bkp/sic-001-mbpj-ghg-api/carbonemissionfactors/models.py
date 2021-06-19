from __future__ import unicode_literals 
import uuid 
from django.db import models
from django.utils.formats import get_format
#from django import models
from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from ghg.helpers import PathAndRename

class CarbonEmissionFactor(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True)
    electric_carbon_emission_factor = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    water_carbon_emission_factor = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    year = models.CharField(max_length=4, default='2021', unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.year + '(Electric: ' + str(self.electric_carbon_emission_factor) + ', Water: ' + str(self.water_carbon_emission_factor) + ')'