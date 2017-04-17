from django.conf.urls import url
from django.contrib import admin
from . import views

app_name='darba_laiks'


urlpatterns = [
    url(r'^$', views.darba_laiks, name='darba_laiks'),
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),
    url(r'^login/$', views.LoginView.as_view(), name='login'),
    url(r'^create_user/$', views.UserFormView.as_view(), name='create_user'),
    url(r'^darbinieki/$', views.darbinieki, name='darbinieki'),
    url(r'^visi/$', views.visi, name='visi'),
    url(r'^visi/(?P<pk>[0-9]+)/$', views.Rediget.as_view(),name='update'),
    url(r'^visi/(?P<pk>[0-9]+)/dzest/$', views.Dzest.as_view(),name='dzest'),
    url(r'^visi/(?P<pk>[0-9]+)/pievienot-bildi/$', views.RedigetBildi.as_view(), name='bilde'),
    url(r'^darbinieki/(?P<pk>[0-9]+)/$', views.darbinieka_darba_laiks, name='darbinieka-darba-laiks'),
    url(r'^saglabatie/$', views.saglabatie, name='saglabatie'),

]