# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-28 09:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('darba_laiks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='darba_laiks',
            name='lidz',
            field=models.TimeField(default=18),
        ),
        migrations.AlterField(
            model_name='darba_laiks',
            name='no',
            field=models.TimeField(default=9),
        ),
    ]