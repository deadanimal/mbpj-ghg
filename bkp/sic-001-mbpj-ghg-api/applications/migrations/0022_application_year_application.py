# Generated by Django 2.2.6 on 2021-07-22 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0021_auto_20210617_0353'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='year_application',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
    ]
