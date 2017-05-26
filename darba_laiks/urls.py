from django.conf.urls import url
from django.contrib import admin
from . import views

app_name='darba_laiks'


urlpatterns = [
    url(r'^$', views.darba_laiks, name='darba_laiks'),
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),
    url(r'^login/$', views.LoginView.as_view(), name='login'),
    # url(r'^create_user/$', views.UserFormView.as_view(), name='create_user'),
    url(r'^darbinieki/$', views.darbinieki, name='darbinieki'),
    url(r'^visi/$', views.visi, name='visi'),
    url(r'^darbinieki/(?P<pk>[0-9]+)/$', views.darbinieka_darba_laiks, name='darbinieka-darba-laiks'),
    url(r'^saglabatie/$', views.saglabatie, name='saglabatie'),
    url(r'^device_info/$', views.device_info, name='device_info'),
    url(r'^virsstundas/$', views.virsstundas, name='virsstundas'),
    url(r'^virsstundas-admin/$', views.virsstundas_admin, name='virsstundas_admin'),
    url(r'^mans-profils/$', views.lietotaja_profils, name='lietotaja_profils'),


    # url(r'^saglabatie/(?P<pk>[0-9]+)/$', views.pievienot_favoritiem,name='pievienot_favoritiem'),
    # url(r'^saglabatie/(?P<pk>[0-9]+)/dzest/$', views.Dzest_favoritu.as_view(), name='dzest_favoritu'),

]