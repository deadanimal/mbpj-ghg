# Generated by Django 2.2.6 on 2020-04-01 04:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faqs', '0002_auto_20200401_0351'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faq',
            name='answer',
            field=models.TextField(default='NA'),
        ),
        migrations.AlterField(
            model_name='faq',
            name='question',
            field=models.TextField(default='NA'),
        ),
    ]
