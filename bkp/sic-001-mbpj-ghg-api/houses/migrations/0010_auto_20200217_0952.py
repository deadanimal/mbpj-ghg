# Generated by Django 2.2.6 on 2020-02-17 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0009_auto_20200212_0658'),
    ]

    operations = [
        migrations.AddField(
            model_name='house',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='house',
            name='postcode',
            field=models.CharField(blank=True, max_length=5),
        ),
    ]
