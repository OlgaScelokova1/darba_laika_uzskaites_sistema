from __future__ import unicode_literals
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login
from django.contrib.auth import REDIRECT_FIELD_NAME, login as auth_login, logout as auth_logout
from django.views.generic import FormView, RedirectView
import datetime
from django.contrib.auth.models import User
from .forms import UserForm
from django.db.models import Q
from .models import Darba_laiks
from django.utils.translation import ugettext, ugettext_lazy as _
from .models import UserProfile, Iemesls, Atstrada, Saglabatie, Virsstundas
import datetime
from datetime import timedelta
from django_user_agents.utils import get_user_agent
from django.contrib.auth import authenticate
from django.contrib.auth import update_session_auth_hash




def device_info(request): #funkcija tika izmantota testesanai, lai parbauditu, no kuras ierices ir iegajis lietotajs


    is_mobile=request.user_agent.is_mobile
    is_tablet=request.user_agent.is_tablet
    is_touch_capable=request.user_agent.is_touch_capable
    is_pc=request.user_agent.is_pc
    is_bot=request.user_agent.is_bot


    browser=request.user_agent.browser
    browser_family=request.user_agent.browser.family
    browser_version=request.user_agent.browser.version
    browser_version_string=request.user_agent.browser.version_string


    user_agent_os=request.user_agent.os
    user_agent_os_family=request.user_agent.os.family
    user_agent_os_version=request.user_agent.os.version
    user_agent_os_version_string=request.user_agent.os.version_string

    # Device properties
    user_agent_device=request.user_agent.device
    user_agent_device_family=request.user_agent.device.family

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


def darba_laiks(request): #personiga darba laika skata funkcija
    if request.user.is_authenticated(): #validacija, vai lietotajs ir pierakstijies sistema
        user_agent = get_user_agent(request)
        if user_agent.is_pc: #nepieciesams uzzinat, vai lietotajs ir iegajis no datora

            if request.method == 'GET': #nostrada, ja netiek izmantotas formas

                lietotajs=request.user
                nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
                iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
                atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                date = datetime.date.today() #nedelu datumi, kuri tiek atteloti skata
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



            if request.method =='POST': #ja tiek izmantotas formas
                lietotajs = request.user
                monday = request.POST.get("monday")
                monday2 = request.POST.get("mondayDown")
                datums_dzesanai=request.POST.get("datums-dzesanai")
                monday3 = request.POST.get("monday2")
                lidz_atstradasana = request.POST.get("timeWillEnd")

                if monday: #ja lietotajs uzspiez uz nedelas mainu, forma augsejai pogai
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

                if monday2:  #ja lietotajs uzspiez uz nedelas mainu, forma apaksejai pogai
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


                if datums_dzesanai: #ja lietotajs grib nodzest kadu no darba laika ierakstiem
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

                if monday3: #formas apstrade, kur lietotajs maina savu darba laiku
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
                    iemesls1 = request.POST.get("reason")

                    a=Darba_laiks.objects.create( #tiek izveidots ieraksts Darba_laiks tabula
                        lietotajs = request.user,
                        no=request.POST.get("timeFrom", ""),
                        datums=request.POST.get("dateWhenIs", ""),
                        lidz=request.POST.get("timeTill",""),
                        ir_mainits='True'
                    )

                    darba_laiks_id=a.id


                    if iemesls1 == 'Slimiba': #atkariba no izveleta iemesla tiek izveidots ieraksts Iemesls tabula
                         b=Iemesls.objects.create(
                             lietotajs=request.user,
                             darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                             slimiba='True',
                         )
                    elif iemesls1 == 'Atvalinajums':
                         b=Iemesls.objects.create(
                             lietotajs=request.user,
                             darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                             atvalinajums='True',
                         )

                    elif iemesls1 == 'Lekcijas':
                         b=Iemesls.objects.create(
                             lietotajs=request.user,
                             darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                             lekcijas='True',
                         )

                    elif iemesls1 == 'Darbs no majam':
                         b=Iemesls.objects.create(
                             lietotajs=request.user,
                             darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                             darbs_no_majam='True',
                         )
                    elif iemesls1 == 'Mazaka slodze':
                         b=Iemesls.objects.create(
                             lietotajs=request.user,
                             darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                             mazaka_slodze='True',
                         )
                    elif iemesls1 == 'Cits':
                        b=Iemesls.objects.create(
                            lietotajs=request.user,
                            darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
                            cits='True',
                        )
                    iemesls_id = b.id

                    if lidz_atstradasana: #ja lietotajs ir ievadijis atstradasanas laiku, tad tiek izveidots ieraksts attiecigaja datu baze

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

        else: #ja lietotajs ir ienacis no mobilas ierices
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
                date2 = request.POST.get("date2")

                lietotajs=request.user
                nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
                iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
                atstrada = Atstrada.objects.filter(lietotajs=lietotajs)


                if date: #tiek izmantots, ja lietotajs grib izmainit nedelu
                    datums=date
                    lietotajs = request.user
                    nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                    iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
                    atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                    context = {'nebus': nebus,
                               'iemesls': iemesls,
                               'atstrada': atstrada,
                               'datums': datums,
                               }
                    return render(request, "index_mobile.html", context)

                elif datums_dzesanai: #ja tiek izmantota forma darba laika ieraksta dzesanai
                    no_dzesanai=request.POST.get("no-dzesanai")
                    i=Darba_laiks.objects.filter(lietotajs=lietotajs, datums=datums_dzesanai, no=no_dzesanai)
                    i.delete()

                    nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                    iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
                    atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
                    datums = request.POST.get("date3")

                    context = {'nebus': nebus,
                               'iemesls': iemesls,
                               'atstrada': atstrada,
                               'datums': datums,
                               }
                    return render(request, "index_mobile.html", context)

                elif date2:#ja lietotajs grib izveidot jaunu ierakstu darba laika
                    nebus = Darba_laiks.objects.filter(lietotajs=lietotajs)
                    iemesls = Iemesls.objects.filter(lietotajs=lietotajs)
                    atstrada = Atstrada.objects.filter(lietotajs=lietotajs)

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

                    datums=date2
                    context = {'nebus': nebus,
                               'iemesls': iemesls,
                               'atstrada': atstrada,
                               'datums': datums,
                               }

                    return render(request, "index_mobile.html", context)

    else:
        return HttpResponseRedirect('/darba_laiks/login/')



class LogoutView(RedirectView): #funkcija nodrosina iespeju izrakstities no sistemas

    url = '/darba_laiks/login/'

    def get(self, request, *args, **kwargs):
        auth_logout(request)
        return super(LogoutView, self).get(request, *args, **kwargs)

def LoginView(request): #funkcija nodrosina iespeju pierakstities sistemaa
    if request.method == "GET":
        return render(request, "login_form.html")

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        lietotajs=User.objects.filter(username=username) #tiek parbaudits, vai lietotajs ar ievadito lietotajvardu eksiste

        if not lietotajs:
            x="lietotajvarda kluda!"
            context={
                'x': x, #ja neeksiste, tiek izvadita kluda
            }
            return render(request, "login_form.html", context)
        else:

            user = authenticate(username=username, password=password) #tiek meginats autentificet lietotaju

            if user is not None:
                login(request, user)
                # return index(request)
                return HttpResponseRedirect('/darba_laiks/')

            else: #ja tomer ievadita parole nav pareiza, atkal tiek izvadita kluda
                y="parbaudiet ievaditos datus!"
                context={
                    'y': y,
                }
                return render(request, "login_form.html", context)



def darbinieki(request): #funkcija visu darbinieku attelosanai
    if request.user.is_authenticated():
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

                iemesli = Iemesls.objects.filter(darba_laiks__id__in=darba_laika_id)
                atstrada= Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id) #visiem lietotajam tiek atlasiti vina grafika mainas, lai vizuali tas attelotu

                lietotajs_kurs_pievienoja = request.user
                lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja) #tiek atlasiti visi saglabatie lietotaji dotajam lietotajam



                context = {'visi': visi,
                           'izmainitie': izmainitie,
                           'iemesli': iemesli,
                           'atstrada': atstrada,
                           'lietotaja_saglabatie': lietotaja_saglabatie,
                           'datums': datums,
                           'x': x,
                        }
                return render(request, 'visi.html', context)

            if request.method == 'POST': #tiek izmantots, ja lietotajs grib redzet citas dienas grafiku
                datums = request.POST.get("date") #forma saja mainigaja tiek nosutits datums, kuru vajag attelot

                visi=User.objects.all()

                darba_laika_id = Darba_laiks.objects.filter(datums=datums).values_list('id',flat=True).distinct()

                collection_ids = Darba_laiks.objects.filter(datums=datums).values_list('lietotajs',flat=True).distinct()
                izmainitie = [
                    Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                    ]


                iemesli = Iemesls.objects.filter(darba_laiks__id__in=darba_laika_id)
                atstrada = Atstrada.objects.filter(darba_laiks__id__in=darba_laika_id) #

                lietotajs_kurs_pievienoja = request.user
                lietotaja_saglabatie = Saglabatie.objects.filter(lietotajs_kurs_pievienoja=lietotajs_kurs_pievienoja)


                saglabata_id=request.POST.get("id") #ja lietotajs grib pievienot kadu lietotaju saglabata sarakstam, tad tiek nosutiti sie dati

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

                    if not i: #ja lietotajs vel nav pievienots saglabatajiem, tad tiek izveidots jauns ieraksts datu baze

                        Saglabatie.objects.create(
                            lietotajs_kurs_pievienoja=request.user,
                            lietotajs_kuru_pievienoja=lietotajs_kuru_pievienoja
                        )
                    else: #ja lietotajs ir pievienots saglabatajiem, tad tas tiek nodzests no saraksta
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

                if date: #ja lietotajs nospiez uz dienas mainu, tas tiek apstradats seit
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


        else: #tada pati funkcija, bet mobilam skatam
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


                query=request.POST.get("q") #lietotaju meklesana, kas tiek istenota caur back-end
                if query: #query ir simbolu virkne, kuru lietotajs mekle
                    datums = request.POST.get("datums-meklesanai")
                    visi = User.objects.all() #meklesana notiek starp visiem lietotajiem

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
                    visi=visi.filter( #seit notiek filtresana, kur tiek parbaudits, vai lietotajvards, vards vai uzvards sakrit ar mekleto simbolu virkni
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
    else:
        return HttpResponseRedirect('/darba_laiks/login/')


def visi(request): #administrators visu darbinieku skats
    if request.user.is_authenticated():
        if request.method == 'GET':
            visi = User.objects.all()


            context = {'visi': visi,
                       }
            return render(request, 'lietotaji.html', context)

        if request.method == 'POST': #ja skata tiek sutitas formas
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

            if username: #ja administrators grib izveidots jaunu lietotaju

                if atrastie: #parbaude, vai tads lietotajverds jau ir sistema
                    error = "Username already exists"
                    context = {'error': error,
                               'visi': visi,
                               }


                else: #ja nav, tad tiek izveidots jauns
                    x = User.objects.create()
                    x.username = username
                    x.first_name = first_name
                    x.last_name = last_name
                    x.set_password(password)
                    x.save()

                    context={
                        'atrastie_lietotaji': atrastie,
                        'visi': visi,
                    }

                return render(request, 'lietotaji.html', context)

            if user_id_update: #ja administrators grib izmeinit lietotaja datus
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

            if user_id_update_photo: #ja administrators grib mainit lietotaja profila bildi
                image = request.FILES["image"]
                lietotajs = User.objects.get(id=user_id_update_photo)
                lietotajs_userprofile= UserProfile.objects.get(user=lietotajs)
                lietotajs_userprofile.avatar=image
                lietotajs_userprofile.save()

                visi = User.objects.all()

                context = {'visi': visi,
                           }

                return render(request, 'lietotaji.html', context)

            if user_id_delete: #ja administrators grib nodzest lietotaju
                lietotajs = User.objects.get(id=user_id_delete)
                lietotajs.delete()

                visi = User.objects.all()

                context = {'visi': visi,
                           }

                return render(request, 'lietotaji.html', context)
    else:
        return HttpResponseRedirect('/darba_laiks/login/')



def darbinieka_darba_laiks(request, pk): #funkcija, kas attelo konkreta darbinieka darba nedelu, uzspiezot uz ta vardu
    if request.user.is_authenticated():
        if request.method == 'GET':
            lietotajs=User.objects.get(pk=pk)
            nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
            iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
            atstrada = Atstrada.objects.filter(lietotajs=lietotajs)
            date = datetime.date.today()
            monday = date - datetime.timedelta(date.weekday()) #tiek aprekinatas nedelas dienas
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

        if request.method =='POST': #ja lietotajs grib skatities citu nedelu lietotaja grafiku
            monday = request.POST.get("monday")
            monday2 = request.POST.get("mondayDown")

            lietotajs=User.objects.get(pk=pk)
            nebus=Darba_laiks.objects.filter(lietotajs=lietotajs)
            iemesls=Iemesls.objects.filter(lietotajs=lietotajs)
            atstrada = Atstrada.objects.filter(lietotajs=lietotajs)

            if monday: #ja tiek nospiesta augseja poga
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
            elif monday2: #ja tiek nospiesta apakseja poga
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
    else:
        return HttpResponseRedirect('/darba_laiks/login/')

def saglabatie(request): #funkcija, kas darbojas ar saglabato skatu
    if request.user.is_authenticated():
        user_agent = get_user_agent(request)
        if user_agent.is_pc: #parbaude, no kuras ierices lietotajs izmanto sistemu
            x=request.user_agent.browser.family
            if request.method == 'GET':
                datums = datetime.date.today()
                darba_laika_id = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('id',flat=True).distinct()


                collection_ids = Darba_laiks.objects.filter(datums=datetime.date.today()).values_list('lietotajs',flat=True).distinct()
                izmainitie = [
                    Darba_laiks.objects.filter(lietotajs__id=c)[0] for c in collection_ids
                    ]


                iemesli = [
                    Iemesls.objects.filter(darba_laiks__id=c)[0] for c in darba_laika_id #lai attelotu darbinieku darba laika izmainas, nepieciesams panemt datus no tabulam
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




                if saglabata_id: #ja lietotajs grib nodzest kadu no saglabato saraksta
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
        else: #ja tiek lietota cita tipa ierice, piemeram, telefons
            if request.method == 'GET': #funkcionalitate sakrit ar funkcionalitati datoram
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

    else:
        return HttpResponseRedirect('/darba_laiks/login/')


def virsstundas(request): #funkcija, kas darbojas ar virsstundu skatu
    if request.user.is_authenticated():

        if request.method == "GET":
            lietotajs=request.user
            atlasiti_dati=Virsstundas.objects.filter(lietotajs=lietotajs).order_by('-datums') #ja lietotajs atver skatu, tad vinam tiek atlasitas visas vina virsstundas
            context= {
                'atlasiti_dati': atlasiti_dati,
            }
            return render(request, 'virsstundas.html', context)

        if request.method == "POST": #ja tiek izmantotas formas dotaja skata
            datums_virsstundas = request.POST.get("datums-virsstundas")
            datums_no_virsstundas_atlasit = request.POST.get("datums-no-virsstundas-atlasit")

            if datums_virsstundas: #funkcija, kas apstrada gadijumu, kad lietotajs grib pievienot jaunas virsstundas
                lietotajs = request.user
                atlasiti_dati = Virsstundas.objects.filter(lietotajs=lietotajs).order_by('-datums')
                no_virsstundas = request.POST.get("no-virsstundas")
                lidz_virsstundas = request.POST.get("lidz-virsstundas")
                komentars_virsstundas = request.POST.get("komentars-virsstundas", "")

                parbaude1 = Atstrada.objects.filter(lietotajs=lietotajs, datums=datums_virsstundas,
                                                    no__gte=no_virsstundas, lidz__lte=lidz_virsstundas)
                parbaude2 = Atstrada.objects.filter(lietotajs=lietotajs, datums=datums_virsstundas,
                                                    no__gte=no_virsstundas, lidz__gte=lidz_virsstundas)
                if parbaude1 or parbaude2:
                    error= "sis laiks jau ir atzimets ka atsradasanas laiks"
                    context={
                        'error': error,
                        'atlasiti_dati': atlasiti_dati, #notiek parbaude, vai virsstundas, kuras liettoajs grib pievienot, jau nav atzimetas ka atstradasanas laiks
                    }
                    return render(request, 'virsstundas.html', context) #ja ir, tad kontesta datos tiek izvadita kluda

                else: #ja parbaude notika veiksmigi, virsstundas tiek pievienotas
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

            elif datums_no_virsstundas_atlasit: #ja lietotajs grib atlasit virsstundas
                lietotajs = request.user
                datums_lidz_virsstundas_atlasit = request.POST.get("datums-lidz-virsstundas-atlasit")
                atlasiti_dati = Virsstundas.objects.filter(lietotajs=lietotajs, datums__gte=datums_no_virsstundas_atlasit,
                                                           datums__lte=datums_lidz_virsstundas_atlasit)


                context = {
                    'atlasiti_dati': atlasiti_dati,
                }

                return render(request, 'virsstundas.html', context)
    else:
        return HttpResponseRedirect('/darba_laiks/login/')

def virsstundas_admin(request): #administratora virsstundu skats
    if request.user.is_authenticated():

        if request.method == "GET": #administrators redz visu lietotaju virsstundas
            atlasiti_dati = Virsstundas.objects.all().order_by('-datums')
            context = {
                    'atlasiti_dati': atlasiti_dati,
                }
            return render(request, 'virsstundas_admin.html', context)

        if request.method == "POST":
            datums_no_virsstundas_atlasit = request.POST.get("datums-no-virsstundas-atlasit")
            atlasits_id = request.POST.get("atlasits_id")

            if datums_no_virsstundas_atlasit: #ja administrators grib atlasit virsstundas kada laika perioda
                datums_lidz_virsstundas_atlasit = request.POST.get("datums-lidz-virsstundas-atlasit")
                atlasiti_dati = Virsstundas.objects.filter(datums__gte=datums_no_virsstundas_atlasit,
                                                               datums__lte=datums_lidz_virsstundas_atlasit)

                context = {
                        'atlasiti_dati': atlasiti_dati,
                    }
                return render(request, 'virsstundas_admin.html', context)

            if atlasits_id: #reason mainigaja glabajas statuss, kuru administrators pieskir ierakstam
                ieraksts= Virsstundas.objects.get(id=atlasits_id)
                statuss=request.POST.get("reason")
                ieraksts.statuss=statuss
                ieraksts.save()

                atlasiti_dati = Virsstundas.objects.all().order_by('-datums') #tiek atgriezti virsstundu ieraksti, kas ir sakartoti pec datuma dilstosa seciba
                context = {
                        'atlasiti_dati': atlasiti_dati,
                    }
                return render(request, 'virsstundas_admin.html', context)
    else:
        return HttpResponseRedirect('/darba_laiks/login/')

def lietotaja_profils(request): #lietotaja profila skats
    if request.user.is_authenticated():
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


            if user_id_update_photo: #ja lietotajs grib izmainit savu foto
                image= request.FILES.get("image", False) #ja lietotajs ielade bildi, tad funkcija nostrada
                if image:
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

            if user_id_update: #ja lietotajs grib izmainit savu profilu
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

            if user_id_update_password: #ja lietotajs grib izmainit savu paroli
                lietotajs = request.user
                password = request.POST.get("password-update")
                lietotajs.set_password(password)
                update_session_auth_hash(request, request.user) #kad lietotajs nomaina paroli, tas tiek automatiski autentificets sistema ar jauno paroli
                lietotajs.save()

                userprofile = UserProfile.objects.get(user=lietotajs)

                context = {
                    'userprofile': userprofile,
                    'lietotajs': lietotajs,
                }
                return render(request, 'lietotaja_profils.html', context)
    else:
        return HttpResponseRedirect('/darba_laiks/login/')


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



