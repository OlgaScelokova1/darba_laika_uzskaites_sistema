from django.contrib import admin

# Register your models here.

from darba_laiks.models import Darba_laiks
from darba_laiks.models import Iemesls
from darba_laiks.models import Atstrada
from darba_laiks.models import UserProfile


admin.site.register(Darba_laiks)
admin.site.register(Iemesls)
admin.site.register(Atstrada)
admin.site.register(UserProfile)