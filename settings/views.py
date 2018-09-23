from django.shortcuts import render
from .models import Logo


def settings(request):
    logos = Logo.objects.all().order_by('-id')[:1]
    return render(request, 'layouts/base.html', {'logos': logos})
