# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-20 16:31
from __future__ import unicode_literals

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('darba_laiks', '0013_auto_20170320_1626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='avatar',
            field=models.FileField(default='settings.MEDIA_ROOT/avatar.jpg', storage=django.core.files.storage.FileSystemStorage(location=b'/Users/olgascelokova/Desktop/python/dl_uzskaite/media_cdn'), upload_to='media'),
        ),
    ]