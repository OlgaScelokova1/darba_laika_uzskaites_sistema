from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic
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
from datetime import timedelta


# Create your views here.
def darba_laiks(request):
    date = datetime.date.today()
    monday = date - datetime.timedelta(date.weekday())
    sunday = monday + datetime.timedelta(6)
    tuesday = monday + datetime.timedelta(1)
    wednesday=monday + datetime.timedelta(2)
    thursday=monday + datetime.timedelta(3)
    friday=monday + datetime.timedelta(4)
    saturday= monday + datetime.timedelta(5)
    week= datetime.date.today().strftime("%V")
    '24'
    context = {'monday': monday,
               'tuesday': tuesday,
               'wednesday': wednesday,
               'thursday': thursday,
               'friday': friday,
               'saturday': saturday,
               'sunday': sunday,
               'week':week,
               }
    return render(request, "index.html", context)

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