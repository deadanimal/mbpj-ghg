# Generated by Django 2.2.6 on 2020-01-08 07:26

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('question', models.CharField(default='NA', max_length=255)),
                ('answer', models.CharField(default='NA', max_length=255)),
                ('date_submitted', models.DateField(null=True)),
            ],
        ),
    ]
