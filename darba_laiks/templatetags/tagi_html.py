from django import template
from datetime import datetime, date

register = template.Library()


@register.filter(name='stundas_starp')
def stundas_starp(no, lidz):
    tdelta = datetime.combine(date.today(), lidz) - datetime.combine(date.today(), no)
    return tdelta.seconds//3600
