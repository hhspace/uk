from django.db import models
from django.utils import timezone


class Post(models.Model):
    NEWS = 'NE'
    NOTICE = 'NO'
    CAT_CHOICES = (
        (NEWS, 'Новость'),
        (NOTICE, 'Объявление'),
    )
    type = models.CharField(
        u'Тип материала',
        max_length=2,
        choices=CAT_CHOICES
    )

    title = models.CharField(u'Заголовок новости', max_length=200)
    text = models.TextField(u'Содержание')
    img = models.FileField(u'Картинка для новости', blank=True )
    seokey = models.TextField(u'Ключевые слова', help_text='SEO', max_length=150 )
    seodescr = models.TextField(u'Описание', help_text='SEO', max_length=250 )

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
        verbose_name = u'новость'
        verbose_name_plural = u'новости'

