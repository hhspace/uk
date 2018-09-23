from django.db import models
from django.utils import timezone

class Hero(models.Model):
    title = models.CharField(u'Заголовок', max_length=200)
    text = models.TextField(u'Содержание')
    btnText = models.CharField(u'Текст кнопки', max_length=50)
    link = models.CharField(u'Ссылка', max_length=200)
    bg = models.FileField(u'Фоновая картинка')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = u'Промо экран'
        verbose_name_plural = u'Промо экраны'


class LandingBlocks(models.Model):
    title = models.CharField(u'Заголовок', max_length=200)
    link = models.CharField(u'Ссылка', max_length=200)
    linkText = models.CharField(u'Текст ссылки', max_length=200)
    icon = models.FileField(u'Иконка')
    created_date = models.DateTimeField(
            u'Дата создания',
            default=timezone.now)
    published_date = models.DateTimeField(
            u'Дата публикации',
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = u'Промо блок'
        verbose_name_plural = u'Промо блоки'

