from django.shortcuts import render, get_object_or_404
from settings.models import Logo
from .models import Post

def news_list(request):
    logos = Logo.objects.all().order_by('-id')[:1]
    news = Post.objects.all().order_by('-id')
    return render(request, 'news/news_list.html', {'logos': logos,  'news': news})

def news_widget(request):
    return render(request, 'home/home.html', {})

def post_detail(request, pk):
    logos = Logo.objects.all().order_by('-id')[:1]
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'news/news_detail.html', {'logos': logos,  'post': post})

