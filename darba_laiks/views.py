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


# Create your views here.
def darba_laiks(request):
    if request.method == 'GET':
        date = datetime.date.today()
        monday = date - datetime.timedelta(date.weekday())
        sunday = monday + datetime.timedelta(6)
        tuesday = monday + datetime.timedelta(1)
        wednesday=monday + datetime.timedelta(2)
        thursday=monday + datetime.timedelta(3)
        friday=monday + datetime.timedelta(4)
        saturday= monday + datetime.timedelta(5)
        #week= datetime.date.today().strftime("%V")
        week=date.strftime("%V")
        month= date.month



        context = {'monday': monday,
                   'tuesday': tuesday,
                   'wednesday': wednesday,
                   'thursday': thursday,
                   'friday': friday,
                   'saturday': saturday,
                   'sunday': sunday,
                   'week':week,
                   'month': month,
                   }
        if request.user.is_authenticated():
            return render(request, "index.html", context)
        else:
            return HttpResponseRedirect('/darba_laiks/login/')

    if request.method =='POST':
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

        Atstrada.objects.create(
            lietotajs=request.user,
            darba_laiks=Darba_laiks.objects.get(id=darba_laiks_id),
            iemesls=Iemesls.objects.get(id=iemesls_id),
            no=request.POST.get("timeWillStart", ""),
            datums=request.POST.get("dateWhenWill", ""),
            lidz=request.POST.get("timeWillEnd", ""),
        )


        date = datetime.date.today()
        monday = date - datetime.timedelta(date.weekday())
        sunday = monday + datetime.timedelta(6)
        tuesday = monday + datetime.timedelta(1)
        wednesday = monday + datetime.timedelta(2)
        thursday = monday + datetime.timedelta(3)
        friday = monday + datetime.timedelta(4)
        saturday = monday + datetime.timedelta(5)
        # week= datetime.date.today().strftime("%V")
        week = date.strftime("%V")
        month = date.month

        context = {'monday': monday,
                   'tuesday': tuesday,
                   'wednesday': wednesday,
                   'thursday': thursday,
                   'friday': friday,
                   'saturday': saturday,
                   'sunday': sunday,
                   'week': week,
                   'month': month,
                   }
        if request.user.is_authenticated():
            return render(request, "index.html", context)
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

class LoginView(FormView):
    success_url = '/darba_laiks/'
    form_class = AuthenticationForm
    template_name = 'login_form.html'
    redirect_field_name = REDIRECT_FIELD_NAME

    @method_decorator(sensitive_post_parameters('password'))
    @method_decorator(csrf_protect)
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        # Sets a test cookie to make sure the user has cookies enabled
        request.session.set_test_cookie()

        return super(LoginView, self).dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        auth_login(self.request, form.get_user())

        # If the test cookie worked, go ahead and
        # delete it since its no longer needed
        if self.request.session.test_cookie_worked():
            self.request.session.delete_test_cookie()

        return super(LoginView, self).form_valid(form)

    def get_success_url(self):
        redirect_to = self.request.POST.get(self.redirect_field_name)
        if not is_safe_url(url=redirect_to, host=self.request.get_host()):
            redirect_to = self.success_url
        return redirect_to

class UserFormView(View):
    form_class=UserForm
    template_name='registration_form.html'

    #display blank form
    def get(self,request):
        form=self.form_class(None)
        return render(request, self.template_name, {'form':form})

    def post(self, request):
        form = self.form_class(request.POST)

        if form.is_valid():

            #create a user
            user=form.save(commit=False)

            #cleaned data

            username=form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save() #save to database

            #returns User object if credentials are correct
            user=authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request,user)
                    return redirect('darba_laiks:darba_laiks')

        return render(request, self.template_name, {'form': form})

def darbinieki(request):
    darbinieki = User.objects.all()

    query=request.GET.get("q")
    if query:
        darbinieki=darbinieki.filter(
            Q(username__icontains=query) |
            Q(first_name__icontains=query) |
            Q(last_name__icontains=query)

        )

    context = {'darbinieki': darbinieki}
    return render(request, 'visi.html', context)


def visi(request):
    visi = User.objects.all()



    context = {'visi': visi,
               }
    return render(request, 'lietotaji.html', context)

class Rediget(UpdateView):
    template_name='rediget.html'
    success_url = reverse_lazy('darba_laiks:visi')
    model = User
    fields = ["username", "first_name", "last_name"]

class Dzest(DeleteView):
    template_name = 'izdzest.html'
    model=User
    success_url=reverse_lazy('darba_laiks:visi')