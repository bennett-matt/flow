from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("users/sessions", views.session, name="session"),
]