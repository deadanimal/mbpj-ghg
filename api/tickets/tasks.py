from __future__ import absolute_import, unicode_literals
from celery import task
from celery.decorators import periodic_task
from celery.task.schedules import crontab

import requests

@periodic_task(run_every=(crontab()), ignore_result=True)
def lol():

    link_provided = 'https://webhook.site/f473829b-8b5c-4237-80b5-a2743cb2debd'
    r = requests.get(link_provided)

    return True
    
