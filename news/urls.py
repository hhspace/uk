from django.urls import path, re_path
from . import views

urlpatterns = [
    path(r'', views.news_list, name='news_list'),
    re_path(r'^(?P<pk>[0-9])/$', views.post_detail, name='post_detail'),
]
