from django.db import models
from colorfield.fields import ColorField

class Social(models.Model):
    title = models.CharField(u'Название социальной сети', max_length=50)
    url = models.URLField(u'Ссылка')
    icon = models.FileField(u'Иконка')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = u'Соц. сеть'
        verbose_name_plural = u'Соц. сети'

class Logo(models.Model):
    title = models.CharField(u'Название компании', max_length=50)
    subtitle = models.CharField(u'Дополнительно', max_length=100)
    logo = models.FileField(u'Логотип')
    logoMore = models.FileField(u'Дополнительный')
    logoMobile = models.FileField(u'Логотип для маленьких экранов')
    logoBW = models.FileField(u'Черно-белый для белого фона')
    bg = models.FileField(u'Картинка фона')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = u'Название и логотип'
        verbose_name_plural = u'Названия и логотипы'
