from django.conf.urls import url
from django.contrib import admin
from . import views

app_name='darba_laiks'


urlpatterns = [
    url(r'^$', views.darba_laiks, name='darba_laiks'),
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),

]