# Generated by Django 4.0.3 on 2022-07-19 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts_chamber', '0004_alter_posts_options_remove_pagehtml_url_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='position',
        ),
        migrations.AddField(
            model_name='employee',
            name='main_position',
            field=models.CharField(blank=True, max_length=250, verbose_name='Должность'),
        ),
        migrations.AddField(
            model_name='employee',
            name='second_position',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='Вторая должность'),
        ),
        migrations.DeleteModel(
            name='Position',
        ),
    ]