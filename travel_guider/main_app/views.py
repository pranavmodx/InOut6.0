from django.shortcuts import render
from django.http import JsonResponse
from .models import User, Guide

def Home(request):
    # return render('')
    # obj = Guide.objects.filter(location=<POST>)
    # resp = JsonResponse({'result': obj.content})