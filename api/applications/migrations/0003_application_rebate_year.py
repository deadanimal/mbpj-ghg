# Generated by Django 2.2.6 on 2021-04-13 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0002_auto_20201217_1745'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='rebate_year',
            field=models.CharField(default='2021', max_length=4),
        ),
    ]
