# Generated by Django 4.0.3 on 2022-03-07 06:36

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=512, verbose_name='Наименование')),
                ('description', models.CharField(max_length=512, verbose_name='Описание')),
                ('type', models.PositiveSmallIntegerField(choices=[(1, 'documents'), (2, 'news'), (3, 'activity')], verbose_name='Тип категорий')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
            },
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True, verbose_name='Имя')),
                ('url', models.FileField(upload_to='files', verbose_name='Файл')),
                ('type', models.PositiveSmallIntegerField(choices=[(1, 'PDF'), (2, 'excel'), (3, 'word'), (4, 'other')], verbose_name='Тип файла')),
            ],
            options={
                'verbose_name': 'Файл',
                'verbose_name_plural': 'Файлы',
            },
        ),
        migrations.CreateModel(
            name='PageHTML',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(verbose_name='Адрес страницы')),
                ('title', models.CharField(max_length=512, verbose_name='Заголовок')),
                ('content', ckeditor.fields.RichTextField(verbose_name='Содержимое')),
                ('public_date', models.DateTimeField(verbose_name='Дата публикации')),
            ],
            options={
                'verbose_name': 'Страница',
                'verbose_name_plural': 'Страницы',
            },
        ),
        migrations.CreateModel(
            name='Position',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=254, verbose_name='Должность')),
                ('priority', models.PositiveSmallIntegerField(blank=True, null=True, verbose_name='Приоритет в отображений')),
            ],
            options={
                'verbose_name': 'Должность',
                'verbose_name_plural': 'Должности',
            },
        ),
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=512, verbose_name='Заголовок')),
                ('content', ckeditor.fields.RichTextField(verbose_name='Содержимое')),
                ('public_date', models.DateTimeField(verbose_name='Дата публикации')),
                ('category', models.ForeignKey(limit_choices_to={'type__in': [2, 3]}, on_delete=django.db.models.deletion.PROTECT, to='accounts_chamber.category', verbose_name='Категория')),
                ('main_image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='core.image', verbose_name='Главное изображение')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
            },
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=64, verbose_name='Имя')),
                ('second_name', models.CharField(max_length=64, verbose_name='Фамилия')),
                ('third_name', models.CharField(blank=True, max_length=64, null=True, verbose_name='Отчество')),
                ('birth_date', models.DateTimeField(verbose_name='Дата рождения')),
                ('avatar', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='core.image', verbose_name='Фотография')),
                ('position', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='accounts_chamber.position', verbose_name='Должность')),
            ],
            options={
                'verbose_name': 'Работник',
                'verbose_name_plural': 'Работники',
            },
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=512, verbose_name='Заголовок')),
                ('category', models.ForeignKey(limit_choices_to={'type': 1}, on_delete=django.db.models.deletion.PROTECT, to='accounts_chamber.category', verbose_name='Категория')),
                ('file', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='accounts_chamber.file', verbose_name='Файл')),
            ],
            options={
                'verbose_name': 'Документ',
                'verbose_name_plural': 'Документы',
            },
        ),
    ]
