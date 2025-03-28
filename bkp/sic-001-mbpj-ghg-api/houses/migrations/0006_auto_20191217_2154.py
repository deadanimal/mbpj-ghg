# Generated by Django 2.2.6 on 2019-12-17 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0005_auto_20191216_1358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='house',
            name='building_type',
            field=models.CharField(choices=[('CD', 'Condominium'), ('FL', 'Flat'), ('TO', 'Townhouse'), ('TE', 'Terrace House'), ('BS', 'Bungalow / Semidetached'), ('AS', 'Apartment / Service Apartment'), ('OT', 'Other')], default='BG', max_length=2),
        ),
    ]
