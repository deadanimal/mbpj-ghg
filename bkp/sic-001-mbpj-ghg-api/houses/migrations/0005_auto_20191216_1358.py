# Generated by Django 2.2.6 on 2019-12-16 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0004_auto_20191211_1542'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='house',
            name='stay_begin',
        ),
        migrations.AddField(
            model_name='house',
            name='staying_duration_months',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='house',
            name='staying_duration_years',
            field=models.IntegerField(default=0),
        ),
    ]
