from django.db import models

class User(models.Model):
    lang_choices = (
        ('ENG', 'English'),
        ('HIN', 'Hindi'),
        ('MAL', 'Malayalam'),
        ('TAM', 'Tamil'),
    )

    expense_choices = (
        ('ECO', 'Economy'),
        ('BAS', 'Basic'),
        ('LUX', 'Luxury'),
    )

    name = models.CharField(max_length=30)
    email = models.EmailField(null=True)
    phone = models.IntegerField()
    photo = models.ImageField()
    description = models.TextField()
    lang_known = models.CharField(max_length=3, choices=lang_choices)
    expense_type = models.CharField(max_length=3, choices=expense_choices)

