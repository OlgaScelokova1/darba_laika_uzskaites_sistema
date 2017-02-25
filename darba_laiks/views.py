from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.
def darba_laiks(request):
    return render(request, "index.html")