from __future__ import unicode_literals
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login
from django.views.generic import View
from django.utils.http import is_safe_url
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import REDIRECT_FIELD_NAME, login as auth_login, logout as auth_logout
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters
from django.views.generic import FormView, RedirectView
import datetime
from django.contrib.auth.models import User
from .forms import UserForm
from django.db.models import Q
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from .models import Darba_laiks, Iemesls, Atstrada
from django import forms
from django.utils.translation import ugettext, ugettext_lazy as _
from .models import UserProfile, Iemesls, Atstrada, Saglabatie, Virsstundas
import datetime
from datetime import timedelta
from django_user_agents.utils import get_user_agent
from django.contrib.auth import authenticate




# Create your views here.

def device_info(request):

    # Let's assume that the visitor uses an iPhone...
    is_mobile=request.user_agent.is_mobile # returns True
    is_tablet=request.user_agent.is_tablet # returns False
    is_touch_capable=request.user_agent.is_touch_capable # returns True
    is_pc=request.user_agent.is_pc # returns False
    is_bot=request.user_agent.is_bot # returns False

    # Accessing user agent's browser attributes
    browser=request.user_agent.browser  # returns Browser(family=u'Mobile Safari', version=(5, 1), version_string='5.1')
    browser_family=request.user_agent.browser.family  # returns 'Mobile Safari'
    browser_version=request.user_agent.browser.version  # returns (5, 1)
    browser_version_string=request.user_agent.browser.version_string   # returns '5.1'

    # Operating System properties
    user_agent_os=request.user_agent.os  # returns OperatingSystem(family=u'iOS', version=(5, 1), version_string='5.1')
    user_agent_os_family=request.user_agent.os.family  # returns 'iOS'
    user_agent_os_version=request.user_agent.os.version  # returns (5, 1)
    user_agent_os_version_string=request.user_agent.os.version_string  # returns '5.1'

    # Device properties
    user_agent_device=request.user_agent.device  # returns Device(family='iPhone')
    user_agent_device_family=request.user_agent.device.family  # returns 'iPhone'

    context= {'is_mobile': is_mobile,
              'is_tablet': is_tablet,
              'is_touch_capable': is_touch_capable,
              'is_pc': is_pc,
              'is_bot': is_bot,
              'browser': browser,
              'browser_family': browser_family,
              'browser_version': browser_version,
              'browser_version_string': browser_version_string,
              'user_agent_os': user_agent_os,
              'user_agent_os_family': user_agent_os_family,
              'user_agent_os_version': user_agent_os_version,
              'user_agent_os_version_string':  user_agent_os_version_string,
              'user_agent_device': user_agent_device,
              'user_agent_device_family': user_agent_device_family,

              }

    return render(request, "device_info.html", context)


def darba_laiks(request):
    user_agent = get_user_agent(request)
    if user_agent.is_pc:

        if request.method == 'GET':

            lietotajs=request.user
            nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
            iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
            atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
            date = datetime.date.today()
            monday = date - datetime.timedelta(date.weekday())
            sunday = monday + datetime.timedelta(6)
            tuesday = monday + datetime.timedelta(1)
            wednesday = monday + datetime.timedelta(2)
            thursday = monday + datetime.timedelta(3)
            friday = monday + datetime.timedelta(4)
            saturday = monday + datetime.timedelta(5)
            week = datetime.date.today().strftime("%V")
            '24'



            context = {'nebus': nebus,
                   'iemesls': iemesls,
                   'atstrada': atstrada,
                   'monday': monday,
                   'tuesday': tuesday,
                   'wednesday': wednesday,
                   'thursday': thursday,
                   'friday': friday,
                   'saturday': saturday,
                   'sunday': sunday,
                   'week': week,
                   }
            return render(request, "index.html", context)



        if request.method =='POST':
            monday = request.POST.get("monday")
            monday2 = request.POST.get("mondayDown")
            datums_dzesanai=request.POST.get("datums-dzesanai")
            monday3 = request.POST.get("monday2")



            if monday:
                lietotajs = request.user
                nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
                atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                monday=monday
                tuesday = request.POST.get("tuesday")
                wednesday= request.POST.get("wednesday")
                thursday = request.POST.get("thursday")
                friday = request.POST.get("friday")
                saturday = request.POST.get("saturday")
                sunday = request.POST.get("sunday")


                context = {'nebus': nebus,
                           'iemesls': iemesls,
                           'atstrada': atstrada,
                           'monday': monday,
                           'tuesday': tuesday,
                           'wednesday': wednesday,
                           'thursday': thursday,
                           'friday': friday,
                           'saturday': saturday,
                           'sunday': sunday,
                           }

                return render(request, "index.html", context)

            if monday2:
                lietotajs = request.user
                nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
                atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                monday=monday2
                tuesday = request.POST.get("tuesday")
                wednesday= request.POST.get("wednesday")
                thursday = request.POST.get("thursday")
                friday = request.POST.get("friday")
                saturday = request.POST.get("saturday")
                sunday = request.POST.get("sunday")


                context = {'nebus': nebus,
                           'iemesls': iemesls,
                           'atstrada': atstrada,
                           'monday': monday,
                           'tuesday': tuesday,
                           'wednesday': wednesday,
                           'thursday': thursday,
                           'friday': friday,
                           'saturday': saturday,
                           'sunday': sunday,
                           }
                return render(request, "index.html", context)


            if datums_dzesanai:
                lietotajs = request.user
                nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
                atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                no_dzesanai=request.POST.get("no-dzesanai")
                i=Darba_laiks.objects.filter(lietotajs=lietotajs, datums=datums_dzesanai, no=no_dzesanai)
                i.delete()

                monday = request.POST.get("monday3")
                tuesday = request.POST.get("tuesday3")
                wednesday = request.POST.get("wednesday3")
                thursday = request.POST.get("thursday3")
                friday = request.POST.get("friday3")
                saturday = request.POST.get("saturday3")
                sunday = request.POST.get("sunday3")

                context = {'nebus': nebus,
                           'iemesls': iemesls,
                           'atstrada': atstrada,
                           'monday': monday,
                           'tuesday': tuesday,
                           'wednesday': wednesday,
                           'thursday': thursday,
                           'friday': friday,
                           'saturday': saturday,
                           'sunday': sunday,
                           }
                return render(request, "index.html", context)

            if monday3:
                lietotajs = request.user
                nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                iemesls= Iemesls.objects.filter(lietotajs=lietotajs)
                atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                monday = request.POST.get("monday2")
                tuesday = request.POST.get("tuesday2")
                wednesday = request.POST.get("wednesday2")
                thursday = request.POST.get("thursday2")
                friday = request.POST.get("friday2")
                saturday = request.POST.get("saturday2")
                sunday = request.POST.get("sunday2")
                lidz = request.POST.get("timeWillEnd")

                iemesls1 = request.POST.get("reason")
                a=Darba_laiks.objects.create(
                    lietotajs = request.user,
                    no=request.POST.get("timeFrom", ""),
                    datums=request.POST.get("dateWhenIs", ""),
                    lidz=request.POST.get("timeTill",""),
                    ir_mainits='True'
                )

                darba_laiks_id=a.id


                if iemesls1=='Slimiba':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         slimiba='True',
                     )
                elif iemesls1=='Atvalinajums':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         atvalinajums='True',
                     )

                elif iemesls1=='Lekcijas':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         lekcijas='True',
                     )

                elif iemesls1=='Darbs no majam':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         darbs_no_majam='True',
                     )
                elif iemesls1=='Mazaka slodze':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         mazaka_slodze='True',
                     )
                elif iemesls1=='Cits':
                    b=Iemesls.objects.create(
                        lietotajs=request.user,
                        darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                        cits='True',
                    )
                iemesls_id = b.id
                if lidz:
                    Atstrada.objects.create(
                        lietotajs=request.user,
                        darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                        iemesls=Iemesls.objects.get(id=iemesls_id),
                        no=request.POST.get("timeWillStart", ""),
                        datums=request.POST.get("dateWhenWill", ""),
                        lidz=request.POST.get("timeWillEnd", ""),
                    )

                context = {'nebus': nebus,
                           'iemesls': iemesls,
                           'atstrada': atstrada,
                           'monday': monday,
                           'tuesday': tuesday,
                           'wednesday': wednesday,
                           'thursday': thursday,
                           'friday': friday,
                           'saturday': saturday,
                           'sunday': sunday,
                           }
                return render(request, "index.html", context)
    else:
        if request.method == 'GET':

            datums=datetime.date.today()
            lietotajs = request.user
            nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
            iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
            atstrada = Atstrada.objects.filter(lietotajs=lietotajs)


            context = {'nebus': nebus,
                       'iemesls': iemesls,
                       'atstrada': atstrada,
                       'lietotajs': lietotajs,
                       'datums': datums,
                       }

            if request.user.is_authenticated():
                return render(request, "index_mobile.html", context)
            else:
                return HttpResponseRedirect('/darba_laiks/login/')

        if request.method =='POST':
            date = request.POST.get("date")
            lidz = request.POST.get("timeWillEnd")

            datums_dzesanai=request.POST.get("datums-dzesanai")

            lietotajs=request.user
            nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
            iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
            atstrada = Atstrada.objects.filter(lietotajs=lietotajs)



            if date:
                datums=date


                context = {'nebus': nebus,
                           'iemesls': iemesls,
                           'atstrada': atstrada,
                           'datums': datums,
                           }

            elif datums_dzesanai:
                no_dzesanai=request.POST.get("no-dzesanai")
                i=Darba_laiks.objects.filter(lietotajs=lietotajs, datums=datums_dzesanai, no=no_dzesanai)
                i.delete()

                nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
                atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                datums = datetime.date.today()

                context = {'nebus': nebus,
                           'iemesls': iemesls,
                           'atstrada': atstrada,
                           'datums': datums,
                           }

            else:

                iemesls = request.POST.get("reason")
                a=Darba_laiks.objects.create(
                    lietotajs = request.user,
                    no=request.POST.get("timeFrom", ""),
                    datums=request.POST.get("dateWhenIs", ""),
                    lidz=request.POST.get("timeTill",""),
                    ir_mainits='True'
                )

                darba_laiks_id=a.id


                if iemesls=='Slimiba':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         slimiba='True',
                     )
                elif iemesls=='Atvalinajums':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         atvalinajums='True',
                     )

                elif iemesls=='Lekcijas':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         lekcijas='True',
                     )

                elif iemesls=='Darbs no majam':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         darbs_no_majam='True',
                     )
                elif iemesls=='Mazaka slodze':
                     b=Iemesls.objects.create(
                         lietotajs=request.user,
                         darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                         mazaka_slodze='True',
                     )
                else:
                    b=Iemesls.objects.create(
                        lietotajs=request.user,
                        darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                        cits='True',
                    )
                iemesls_id = b.id

                if lidz:
                    Atstrada.objects.create(
                        lietotajs=request.user,
                        darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                        iemesls=Iemesls.objects.get(id=iemesls_id),
                        no=request.POST.get("timeWillStart", ""),
                        datums=request.POST.get("dateWhenWill", ""),
                        lidz=request.POST.get("timeWillEnd", ""),
                    )

                context = {
                           }
            if request.user.is_authenticated():
                return render(request, "index_mobile.html", context)
            else:
                return HttpResponseRedirect('/darba_laiks/login/')





class LogoutView(RedirectView):
    """
    Provides users the ability to logout
    """
    url = '/darba_laiks/login/'

    def get(self, request, *args, **kwargs):
        auth_logout(request)
        return super(LogoutView, self).get(request, *args, **kwargs)

def LoginView(request):
    if request.method == "GET":
        return render(request, "login_form.html")

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        lietotajs=User.objects.filter(username=username)

        if not lietotajs:
            x="lietotajvarda kluda!"
            context={
                'x': x,
            }
            return render(request, "login_form.html", context)
        else:

            user = authenticate(username=username, password=password)

            if user is not None:
                login(request, user)
                # return index(request)
                return HttpResponseRedirect('/darba_laiks/')

            else:
                y="parbaudiet ievaditos datus!"
                context={
                    'y': y,
                }
                return render(request, "login_form.html", context)




def darbinieki(request):
    user_agent = get_user_agent(request)
    if user_agent.is_pc:
        x=request.user_agent.browser.family
        if request.method == 'GET':
            # collection_ids = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('lietotajs',flat=True).distinct()
            # izmainitie = [
            #     Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
            #     ]
            visi=User.objects.all()
            datums = datetime.date.today()


            darba_laika_id = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('id',flat=True).distinct()


            collection_ids = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]


            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

            atstrada= Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja = request.user
            lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)




            context = {'visi': visi,
                       'izmainitie': izmainitie,
                       'iemesli': iemesli,
                       'atstrada': atstrada,
                       'lietotaja_saglabatie': lietotaja_saglabatie,
                       'datums': datums,
                       'x': x,
                    }
            return render(request, 'visi.html', context)

        if request.method == 'POST':
            datums = request.POST.get("date")

            visi=User.objects.all()

            darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id',flat=True).distinct()

            collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]


            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

            atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja = request.user
            lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)


            saglabata_id=request.POST.get("id")

            if saglabata_id:
                datums=datetime.date.today()
                darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id', flat=True).distinct()

                collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs', flat=True).distinct()
                izmainitie = [
                    Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]

                iemesli = [
                    Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

                atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)


                lietotajs_kuru_pievienoja = User.objects.get(id=saglabata_id)
                i = Saglabatie.objects.filter(lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja)

                if not i:

                    Saglabatie.objects.create(
                        lietotajs_kurs_pievienoja=request.user,
                        lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja
                    )
                else:
                    dzest=i
                    dzest.delete()

                context = {'visi': visi,
                           'izmainitie': izmainitie,
                           'iemesli': iemesli,
                           'atstrada': atstrada,
                           'lietotaja_saglabatie': lietotaja_saglabatie,
                           'saglabata_id': saglabata_id,
                           'datums': datums,
                           }

            date = request.POST.get("date")

            if date:
                print "xx"
                datums=date

                context = {'visi': visi,
                           'izmainitie': izmainitie,
                           'iemesli': iemesli,
                           'atstrada': atstrada,
                           'lietotaja_saglabatie': lietotaja_saglabatie,
                           'saglabata_id': saglabata_id,
                           'datums': datums,
                           }

            return render(request, 'visi.html', context)
    else:
        if request.method == 'GET':
            # collection_ids = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('lietotajs',flat=True).distinct()
            # izmainitie = [
            #     Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
            #     ]
            visi=User.objects.all()
            datums = datetime.date.today()


            darba_laika_id = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('id',flat=True).distinct()


            collection_ids = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]


            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

            atstrada= Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja = request.user
            lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)




            context = {'visi': visi,
                       'izmainitie': izmainitie,
                       'iemesli': iemesli,
                       'atstrada': atstrada,
                       'lietotaja_saglabatie': lietotaja_saglabatie,
                       'datums': datums,
                    }
            return render(request, 'visi_mobile.html', context)

        if request.method == 'POST':
            datums = request.POST.get("date")

            visi=User.objects.all()

            darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id',flat=True).distinct()

            collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]


            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

            atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja = request.user
            lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)


            saglabata_id=request.POST.get("id")

            if saglabata_id:
                datums=datetime.date.today()
                darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id', flat=True).distinct()

                collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs', flat=True).distinct()
                izmainitie = [
                    Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]

                iemesli = [
                    Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

                atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)


                lietotajs_kuru_pievienoja = User.objects.get(id=saglabata_id)
                i = Saglabatie.objects.filter(lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja)

                if not i:

                    Saglabatie.objects.create(
                        lietotajs_kurs_pievienoja=request.user,
                        lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja
                    )
                else:
                    dzest=i
                    dzest.delete()



            query=request.POST.get("q")
            if query:
                datums = request.POST.get("datums-meklesanai")
                visi = User.objects.all()

                darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id', flat=True).distinct()

                collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs', flat=True).distinct()
                izmainitie = [
                    Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]

                iemesli = [
                    Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

                atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

                datums = request.POST.get("datums-meklesanai")
                visi=visi.filter(
                        Q(username__icontains=query) |
                        Q(first_name__icontains=query) |
                        Q(last_name__icontains=query)
                    )

            context = {'visi': visi,
                       'izmainitie': izmainitie,
                       'iemesli': iemesli,
                       'atstrada': atstrada,
                       'lietotaja_saglabatie': lietotaja_saglabatie,
                       'saglabata_id': saglabata_id,
                       'datums': datums,
                       }
            date = request.POST.get("date")

            if date:

                datums=date
                context = {'visi': visi,
                           'izmainitie': izmainitie,
                           'iemesli': iemesli,
                           'atstrada': atstrada,
                           'lietotaja_saglabatie': lietotaja_saglabatie,
                           'saglabata_id': saglabata_id,
                           'datums': datums,
                           }

            return render(request, 'visi_mobile.html', context)


def visi(request):
    if request.method == 'GET':
        visi = User.objects.all()




        context = {'visi': visi,
                   }
        return render(request, 'lietotaji.html', context)

    if request.method == 'POST':
        visi = User.objects.all()
        username = request.POST.get("username")
        first_name = request.POST.get("first-name")
        last_name = request.POST.get("last-name")
        password = request.POST.get("password")
        password_again = request.POST.get("password-again")
        user_id_update = request.POST.get("user-id-update")
        user_id_update_photo = request.POST.get("user-id-update-photo")
        user_id_delete = request.POST.get("user-id-delete")


        atrastie = User.objects.filter(username=username)

        if username:

            if atrastie:
                error = "Username already exists"
                context = {'error': error,
                           'visi': visi,
                           }

            else:
                User.objects.create(
                    username=username,
                    first_name=first_name,
                    last_name=last_name,
                    password=password,
                )

                context={
                    'atrastie_lietotaji': atrastie,
                    'visi': visi,
                }

            return render(request, 'lietotaji.html', context)

        if user_id_update:
            lietotajs = User.objects.get(id=user_id_update)
            username_update=request.POST.get("username-update", "")
            first_name_update = request.POST.get("first-name-update", "")
            last_name_update = request.POST.get("last-name-update", "")
            lietotajs.username = username_update
            lietotajs.first_name = first_name_update
            lietotajs.last_name = last_name_update
            lietotajs.save()

            visi = User.objects.all()

            context = {'visi': visi,
                       }

            return render(request, 'lietotaji.html', context)

        if user_id_update_photo:
            image = request.FILES["image"]
            lietotajs = User.objects.get(id=user_id_update_photo)
            lietotajs_userprofile= UserProfile.objects.get(user=lietotajs)
            lietotajs_userprofile.avatar=image
            lietotajs_userprofile.save()

            visi = User.objects.all()

            context = {'visi': visi,
                       }

            return render(request, 'lietotaji.html', context)

        if user_id_delete:
            lietotajs = User.objects.get(id=user_id_delete)
            lietotajs.delete()

            visi = User.objects.all()

            context = {'visi': visi,
                       }

            return render(request, 'lietotaji.html', context)



def darbinieka_darba_laiks(request, pk):

    if request.method == 'GET':
        lietotajs=User.objects.get(pk=pk)
        nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
        iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
        atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
        date = datetime.date.today()
        monday = date - datetime.timedelta(date.weekday())
        sunday = monday + datetime.timedelta(6)
        tuesday = monday + datetime.timedelta(1)
        wednesday = monday + datetime.timedelta(2)
        thursday = monday + datetime.timedelta(3)
        friday = monday + datetime.timedelta(4)
        saturday = monday + datetime.timedelta(5)
        week = datetime.date.today().strftime("%V")
        '24'



        context = {'nebus': nebus,
                   'iemesls': iemesls,
                   'atstrada': atstrada,
                   'monday': monday,
                   'tuesday': tuesday,
                   'wednesday': wednesday,
                   'thursday': thursday,
                   'friday': friday,
                   'saturday': saturday,
                   'sunday': sunday,
                   'week': week,
                   'lietotajs': lietotajs,
                   }


        return render(request, "darbinieka-darba-laiks.html", context)

    if request.method =='POST':
        monday = request.POST.get("monday")
        monday2 = request.POST.get("mondayDown")

        lietotajs=User.objects.get(pk=pk)
        nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
        iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
        atstrada = Atstrada.objects.filter(lietotajs=lietotajs)

        if monday:
            monday=monday
            tuesday = request.POST.get("tuesday")
            wednesday= request.POST.get("wednesday")
            thursday = request.POST.get("thursday")
            friday = request.POST.get("friday")
            saturday = request.POST.get("saturday")
            sunday = request.POST.get("sunday")

            context = {'nebus': nebus,
                       'iemesls': iemesls,
                       'atstrada': atstrada,
                       'monday': monday,
                       'tuesday': tuesday,
                       'wednesday': wednesday,
                       'thursday': thursday,
                       'friday': friday,
                       'saturday': saturday,
                       'sunday': sunday,
                       'lietotajs': lietotajs,
                       }
        elif monday2:
            monday=monday2
            tuesday = request.POST.get("tuesday")
            wednesday= request.POST.get("wednesday")
            thursday = request.POST.get("thursday")
            friday = request.POST.get("friday")
            saturday = request.POST.get("saturday")
            sunday = request.POST.get("sunday")


            context = {'nebus': nebus,
                       'iemesls': iemesls,
                       'atstrada': atstrada,
                       'monday': monday,
                       'tuesday': tuesday,
                       'wednesday': wednesday,
                       'thursday': thursday,
                       'friday': friday,
                       'saturday': saturday,
                       'sunday': sunday,
                       }

        return render(request, "darbinieka-darba-laiks.html", context)

def saglabatie(request):
    user_agent = get_user_agent(request)
    if user_agent.is_pc:
        x=request.user_agent.browser.family
        if request.method == 'GET':
            datums = datetime.date.today()
            darba_laika_id = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('id',flat=True).distinct()


            collection_ids = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]


            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

            atstrada= Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja=request.user
            lietotaja_saglabatie=Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)


            context= {'lietotaja_saglabatie': lietotaja_saglabatie,
                      'datums': datums,
                      'izmainitie': izmainitie,
                      'iemesli': iemesli,
                      'atstrada': atstrada,
                      'x': x,
                     }

            return render(request, 'saglabatie.html', context)

        if request.method == 'POST':
            saglabata_id=request.POST.get("id")
            datums = request.POST.get("date")
            lietotajs_kurs_pievienoja = request.user
            lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)

            darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id', flat=True).distinct()

            collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
            ]

            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
            ]

            atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja = request.user
            lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)




            if saglabata_id:
                lietotajs_kuru_pievienoja = User.objects.get(id=saglabata_id)
                i = Saglabatie.objects.filter(lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja)
                datums=request.POST.get("datums1")
                i.delete()



            context = {'lietotaja_saglabatie': lietotaja_saglabatie,
                       'datums': datums,
                       'izmainitie': izmainitie,
                       'iemesli': iemesli,
                       'atstrada': atstrada,
                       }


            return render(request, 'saglabatie.html', context)
    else:
        if request.method == 'GET':
            datums = datetime.date.today()
            darba_laika_id = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('id',flat=True).distinct()


            collection_ids = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                ]


            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
                ]

            atstrada= Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja=request.user
            lietotaja_saglabatie=Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)


            context= {'lietotaja_saglabatie': lietotaja_saglabatie,
                      'datums': datums,
                      'izmainitie': izmainitie,
                      'iemesli': iemesli,
                      'atstrada': atstrada,
                     }

            return render(request, 'saglabatie_mobile.html', context)

        if request.method == 'POST':
            saglabata_id=request.POST.get("id")
            datums = request.POST.get("date")

            darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id', flat=True).distinct()

            collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs',flat=True).distinct()
            izmainitie = [
                Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
            ]

            iemesli = [
                Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id
            ]

            atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id)

            lietotajs_kurs_pievienoja = request.user
            lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)




            if saglabata_id:
                lietotajs_kuru_pievienoja = User.objects.get(id=saglabata_id)
                i = Saglabatie.objects.filter(lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja)
                i.delete()



            context = {'lietotaja_saglabatie': lietotaja_saglabatie,
                       'datums': datums,
                       'izmainitie': izmainitie,
                       'iemesli': iemesli,
                       'atstrada': atstrada,
                       }


            return render(request, 'saglabatie_mobile.html', context)


def virsstundas(request):

    if request.method == "GET":
        lietotajs=request.user
        atlasiti_dati=Virsstundas.objects.filter(lietotajs=lietotajs).order_by('-datums')
        context= {
            'atlasiti_dati': atlasiti_dati,
        }
        return render(request, 'virsstundas.html', context)

    if request.method == "POST":
        datums_virsstundas = request.POST.get("datums-virsstundas")
        datums_no_virsstundas_atlasit = request.POST.get("datums-no-virsstundas-atlasit")

        if datums_virsstundas:
            lietotajs = request.user
            atlasiti_dati = Virsstundas.objects.filter(lietotajs=lietotajs).order_by('-datums')
            no_virsstundas = request.POST.get("no-virsstundas")
            lidz_virsstundas = request.POST.get("lidz-virsstundas")
            komentars_virsstundas = request.POST.get("komentars-virsstundas", "")

            Virsstundas.objects.create(
                lietotajs=request.user,
                datums=datums_virsstundas,
                no=no_virsstundas,
                lidz=lidz_virsstundas,
                komentars=komentars_virsstundas,
            )

            context = {'atlasiti_dati': atlasiti_dati,
                       }
            return render(request, 'virsstundas.html', context)

        elif datums_no_virsstundas_atlasit:
            lietotajs = request.user
            datums_lidz_virsstundas_atlasit = request.POST.get("datums-lidz-virsstundas-atlasit")
            atlasiti_dati = Virsstundas.objects.filter(lietotajs=lietotajs, datums__gte=datums_no_virsstundas_atlasit,
                                                       datums__lte=datums_lidz_virsstundas_atlasit)


            context = {
                'atlasiti_dati': atlasiti_dati,
            }

            return render(request, 'virsstundas.html', context)

def virsstundas_admin(request):

    if request.method == "GET":
        atlasiti_dati = Virsstundas.objects.all().order_by('-datums')
        context = {
                'atlasiti_dati': atlasiti_dati,
            }
        return render(request, 'virsstundas_admin.html', context)

    if request.method == "POST":
        datums_no_virsstundas_atlasit = request.POST.get("datums-no-virsstundas-atlasit")
        atlasits_id = request.POST.get("atlasits_id")

        if datums_no_virsstundas_atlasit:
            datums_lidz_virsstundas_atlasit = request.POST.get("datums-lidz-virsstundas-atlasit")
            atlasiti_dati = Virsstundas.objects.filter(datums__gte=datums_no_virsstundas_atlasit,
                                                           datums__lte=datums_lidz_virsstundas_atlasit)

            context = {
                    'atlasiti_dati': atlasiti_dati,
                }
            return render(request, 'virsstundas_admin.html', context)

        if atlasits_id:
            ieraksts= Virsstundas.objects.get(id=atlasits_id)
            statuss=request.POST.get("reason")
            ieraksts.statuss=statuss
            ieraksts.save()

            atlasiti_dati = Virsstundas.objects.all().order_by('-datums')
            context = {
                    'atlasiti_dati': atlasiti_dati,
                }
            return render(request, 'virsstundas_admin.html', context)

def lietotaja_profils(request):
    if request.method == "GET":
        lietotajs=request.user
        userprofile=UserProfile.objects.get(user=lietotajs)

        context= {
            'userprofile': userprofile,
            'lietotajs': lietotajs,
        }

        return render(request, 'lietotaja_profils.html', context)

    if request.method == "POST":
        user_id_update_photo = request.POST.get("user-id-update-photo")
        user_id_update = request.POST.get("user-id-update")
        user_id_update_password = request.POST.get("user-id-update-password")


        if user_id_update_photo:
            image = request.FILES["image"]
            lietotajs_userprofile= UserProfile.objects.get(id=user_id_update_photo)
            lietotajs_userprofile.avatar=image
            lietotajs_userprofile.save()

            lietotajs = request.user
            userprofile = UserProfile.objects.get(user=lietotajs)

            context = {
                'userprofile': userprofile,
                'lietotajs': lietotajs,
            }
            return render(request, 'lietotaja_profils.html', context)

        if user_id_update:
            lietotajs = User.objects.get(id=user_id_update)
            first_name_update = request.POST.get("first-name-update", "")
            last_name_update = request.POST.get("last-name-update", "")
            lietotajs.first_name = first_name_update
            lietotajs.last_name = last_name_update
            lietotajs.save()

            lietotajs = request.user
            userprofile = UserProfile.objects.get(user=lietotajs)

            context = {
                'userprofile': userprofile,
                'lietotajs': lietotajs,
            }
            return render(request, 'lietotaja_profils.html', context)

        if user_id_update_password:
            lietotajs = request.user
            password = request.POST.get("password-update")
            lietotajs.set_password(password)
            lietotajs.save()

            userprofile = UserProfile.objects.get(user=lietotajs)

            context = {
                'userprofile': userprofile,
                'lietotajs': lietotajs,
            }
            return render(request, 'lietotaja_profils.html', context)


# def pievienot_favoritiem(request, pk):
#     lietotajs_kuru_pievienoja = User.objects.get(pk=pk)
#     lietotajs_kurs_pievienoja=request.user
#
#     Saglabatie.objects.create(
#         lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja,
#         lietotajs_kurs_pievienoja= lietotajs_kurs_pievienoja,
#
#
#     )
#
#     lietotajs_kurs_pievienoja = request.user
#     lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)
#
#     context = {'lietotaja_saglabatie': lietotaja_saglabatie,
#
#                }
#
#     return render(request, 'saglabatie.html', context)

# class Dzest_favoritu(DeleteView):
#     template_name = 'izdzest.html'
#     model=Saglabatie
#     success_url=reverse_lazy('darba_laiks:saglabatie')



