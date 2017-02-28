from __future__ import unicode_literals
from django.conf import settings
from django.db import models
from django.core.urlresolvers import reverse

# Create your models here.
class Darba_laiks(models.Model):
    lietotajs=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    datums = models.DateField()
    no = models.FloatField(default=9.00)
    lidz=models.FloatField(default=18.00)
    ir_mainits = models.BooleanField(default=False)

    def __str__(self):
        return str(self.datums)+'  '+ str(self.no)+'  '+ str(self.lidz)

class Iemesls(models.Model):
    lietotajs = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    darba_laiks= models.ForeignKey(Darba_laiks)
    slimiba=models.BooleanField(default=False)
    atvalinajums = models.BooleanField(default=False)
    lekcijas = models.BooleanField(default=False)
    darbs_no_majam= models.BooleanField(default=False)
    mazaka_slodze= models.BooleanField(default=False)
    cits= models.BooleanField(default=False)

    def __str__(self):
        return str(self.darba_laiks)

class Atstrada(models.Model):
    lietotajs = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    darba_laiks= models.ForeignKey(Darba_laiks)
    iemesls= models.ForeignKey(Iemesls)
    no = models.FloatField()
    lidz = models.FloatField()
    datums = models.DateField()

    def __str__(self):
        return str(self.darba_laiks)