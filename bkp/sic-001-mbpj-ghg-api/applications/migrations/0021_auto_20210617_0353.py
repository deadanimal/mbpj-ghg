# Generated by Django 2.2.6 on 2021-06-17 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0020_auto_20210528_0646'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='past_application',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='application',
            name='past_application_number',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
    ]
