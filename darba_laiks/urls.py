from django.conf.urls import url
from django.contrib import admin
from . import views

app_name='darba_laiks'


urlpatterns = [
    url(r'^$', views.darba_laiks, name='darba_laiks'),
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),
    url(r'^login/$', views.LoginView.as_view(), name='login'),
    url(r'^create_user/$', views.UserFormView.as_view(), name='create_user'),
    url(r'^visi/$', views.visi_darbinieki, name='visi_darbinieki'),

]