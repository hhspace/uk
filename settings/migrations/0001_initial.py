# Generated by Django 2.1 on 2018-08-26 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Social',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Название социальной сети')),
                ('url', models.URLField(verbose_name='Ссылка')),
                ('icon', models.FileField(upload_to='', verbose_name='Иконка')),
            ],
            options={
                'verbose_name': 'Соц. сеть',
                'verbose_name_plural': 'Соц. сети',
            },
        ),
    ]
