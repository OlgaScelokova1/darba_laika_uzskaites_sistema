# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-28 10:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('darba_laiks', '0004_auto_20170228_1013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='darba_laiks',
            name='lidz',
            field=models.TimeField(default='18:00'),
        ),
        migrations.AlterField(
            model_name='darba_laiks',
            name='no',
            field=models.TimeField(default='9:00'),
        ),
    ]
