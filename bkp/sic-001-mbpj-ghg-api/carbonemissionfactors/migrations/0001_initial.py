# Generated by Django 2.2.6 on 2021-06-17 02:31

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CarbonEmissionFactor',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('electric_carbon_emission_factor', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('water_carbon_emission_factor', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('year', models.CharField(default='2021', max_length=4, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
