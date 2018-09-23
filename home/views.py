from django.shortcuts import render
from django.utils import timezone
from .models import Hero, LandingBlocks
from settings.views import Logo
from news.models import Post
from settings.models import Logo

def home(request):
    heroes = Hero.objects.all().order_by('-id')
    blocks = LandingBlocks.objects.all().order_by('-id')[:4]
    news = Post.objects.all().order_by('-id')[:4]
    logos = Logo.objects.all().order_by('-id')[:1]
    return render(request, 'home/home.html', {'logos': logos, 'heroes': heroes, 'blocks': blocks, 'news': news})
