from django.urls import path
from . import views

urlpatterns = [
    path('search', views.location),
    path('ga', views.all_guides),
]
