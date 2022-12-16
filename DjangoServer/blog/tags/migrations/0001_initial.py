# Generated by Django 4.1.3 on 2022-11-30 07:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('tags_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.TextField()),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='posts.posts')),
            ],
            options={
                'db_table': 'blog_tags',
            },
        ),
    ]
