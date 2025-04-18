# Generated by Django 2.2.6 on 2021-07-22 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0011_auto_20200218_0135'),
    ]

    operations = [
        migrations.AddField(
            model_name='house',
            name='electricity_total_usage',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='house',
            name='water_total_usage',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
    ]
