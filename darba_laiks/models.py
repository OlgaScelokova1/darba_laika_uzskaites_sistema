from __future__ import unicode_literals
from django.conf import settings
from django.db import models
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from django.core.files.storage import FileSystemStorage
from django.db.models.signals import post_save


# Create your models here.
class Darba_laiks(models.Model):
    lietotajs=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    datums = models.DateField()
    no = models.TimeField(default='9:00')
    lidz=models.TimeField(default='18:00')
    ir_mainits = models.BooleanField(default=False)

    def __str__(self):
        return str(self.datums)+'  '+ str(self.no)+' - '+ str(self.lidz)

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
        if (self.slimiba):
            return 'Slimiba ' + str(self.darba_laiks)
        elif (self.atvalinajums):
            return 'Atvalinajums ' + str(self.darba_laiks)
        elif (self.lekcijas):
            return 'Lekcijas ' + str(self.darba_laiks)
        elif (self.darbs_no_majam):
            return 'Darbs no majam ' + str(self.darba_laiks)
        elif (self.mazaka_slodze):
            return 'Mazaka slodze ' + str(self.darba_laiks)
        else:
            return 'Cits ' + str(self.darba_laiks)

class Atstrada(models.Model):
    lietotajs = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    darba_laiks= models.ForeignKey(Darba_laiks)
    iemesls= models.ForeignKey(Iemesls)
    no = models.TimeField(null=True, blank=True)
    lidz = models.TimeField(null=True, blank=True)
    datums = models.DateField(null=True, blank=True)

    def __str__(self):
        return str(self.datums)+'  '+ str(self.no)+' - '+ str(self.lidz)


class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='userprofile')
    avatar = models.FileField(default='/avatar.jpg')

    def __str__(self):
        return str(self.user.username)

    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            UserProfile.objects.create(user=instance)

    post_save.connect(create_user_profile, sender=User)

class Saglabatie(models.Model):
    lietotajs_kurs_pievienoja=models.ForeignKey(settings.AUTH_USER_MODEL, related_name='lietotajs_kurs_pievienoja')
    lietotajs_kuru_pievienoja=models.ForeignKey(settings.AUTH_USER_MODEL, related_name='lietotajs_kuru_pievienoja')

    def __str__(self):
        return str(self.lietotajs_kurs_pievienoja)+'  '+ str(self.lietotajs_kuru_pievienoja)

class Virsstundas(models.Model):
    lietotajs = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    datums = models.DateField()
    no = models.TimeField()
    lidz = models.TimeField()
    komentars= models.TextField(max_length=500)

    def __str__(self):
        return str(self.datums)+'  '+ str(self.no)+' - '+ str(self.lidz)+' - '+ str(self.komentars)


