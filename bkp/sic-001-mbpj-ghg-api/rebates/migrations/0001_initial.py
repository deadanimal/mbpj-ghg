# Generated by Django 2.2.6 on 2019-11-30 15:47

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RebateType',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(default='NA', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Rebate',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(default='NA', max_length=100)),
                ('application_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='rebates.RebateType')),
            ],
        ),
    ]
