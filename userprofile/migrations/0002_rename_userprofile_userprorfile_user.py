# Generated by Django 5.0.6 on 2024-05-29 06:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprorfile',
            old_name='userprofile',
            new_name='user',
        ),
    ]