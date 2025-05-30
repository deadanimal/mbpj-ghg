# Generated by Django 2.2.6 on 2019-11-30 15:59

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20191130_1557'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserOccupation',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='customuser',
            name='occupation',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.UserOccupation'),
        ),
    ]
