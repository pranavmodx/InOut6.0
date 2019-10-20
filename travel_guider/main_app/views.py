from django.shortcuts import render
from django.http import JsonResponse
from .models import User, Guide, Location

#def Home(request):
    # return render('')
    # obj = Guide.objects.filter(location=<POST>)
    # resp = JsonResponse({'result': obj.content})

def location(request):
    places = Location.objects.all()
    return JsonResponse({'loc': places})
