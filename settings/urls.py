from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.settings, name='settings'),
]
