from django.db import models
from django.utils import timezone
from django.contrib import admin

class Address(models.Model):
    address = models.CharField(u'Адрес', max_length=200)
    latitude = models.CharField(u'Широта', max_length=200, help_text='Брать значение с Яндекс карт')
    longitude = models.CharField(u'Долгота', max_length=200, help_text='Брать значение с Яндекс карт')
    OFFICES = 'OF'
    HOME = 'HO'
    HOME_CHOICES = (
        (OFFICES, 'Офис компании Аврора'),
        (HOME, 'Объект'),
    )
    home = models.CharField(
        max_length=2,
        choices=HOME_CHOICES,
    )

    def is_upperclass(self):
        return self.year_in_school in (self.JUNIOR, self.SENIOR)

    def __str__(self):
        return self.address

    class Meta:
        verbose_name = u'Адрес'
        verbose_name_plural = u'Адреса'
