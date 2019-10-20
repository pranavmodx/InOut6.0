from django.shortcuts import render
from django.http import JsonResponse
from django.core.serializers import serialize
from .models import User, Guide, Location

#def Home(request):
    # return render('')
    # obj = Guide.objects.filter(location=<POST>)
    # resp = JsonResponse({'result': obj.content})

def location(request):
    places = Location.objects.all()[:5]
    place_ = serialize('json', places) 
    return JsonResponse({'loc': place_})

def all_guides(request):
    po = Guide.objects.all()
    po_ = serialize('json', po)
    return JsonResponse({'people': po_})
