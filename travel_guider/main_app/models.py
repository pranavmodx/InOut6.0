from django.db import models

class Guides(models.Model):
    name = models.CharField(max_length=100, verbose_name='NAME of Guide')
    phone_number_regex = RegexValidator(regex='^((\+91|91|0)[\- ]{0,1})?[456789]\d{9}$', message='Please Enter 10/11 digit mobile number or landline as 0<std code><phone number>', code='invalid_mobile')    
    phone = models.CharField(max_length=10, validators=[phone_number_regex])
    description = models.TextField()
    rate_per_hour = models.IntegerField()
    native_language = models.CharField(max_length=3, choices = lang_choices)

class SearchRequest(models.Model):
    location = models.CharField(max_length=500, verbose_name='location')
    duration = models.IntegerField()
    no_of_people = models.IntegerField
