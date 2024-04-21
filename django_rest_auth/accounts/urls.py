from django.urls import path
from .views import RegisterUserView, LoginUserView, TestauthenticationView



urlpatterns=[
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', LoginUserView.as_view(), name="login"),
    path('profile/', TestauthenticationView.as_view(), name="granted")
]