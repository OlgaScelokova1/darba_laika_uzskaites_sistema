# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-21 08:41
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('darba_laiks', '0025_auto_20170418_0720'),
    ]

    operations = [
        migrations.CreateModel(
            name='Virsstundas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datums', models.DateField()),
                ('no', models.TimeField()),
                ('lidz', models.TimeField()),
                ('komentars', models.TextField(max_length=500)),
                ('lietotajs', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]