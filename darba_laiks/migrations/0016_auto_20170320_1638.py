# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-20 16:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('darba_laiks', '0015_auto_20170320_1634'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='avatar',
            field=models.FileField(blank='True', null=True, upload_to=b''),
        ),
    ]
