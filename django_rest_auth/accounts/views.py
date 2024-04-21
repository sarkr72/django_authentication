from django.shortcuts import render

# Create your views here.
from django. shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import UserRegisterSerializer, LoginSerializer, PasswordResetRequestSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
# from .utils import send_code_to_user
# Create your views here.

class RegisterUserView(GenericAPIView):
    serializer_class=UserRegisterSerializer

    def post(self, request):
        user_data=request.data
        serializer=self.serializer_class(data=user_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            user=serializer.data
            # send_code_to_user(user['email'])
            #send email function user()
            # print(user)
            return Response({
                'data': user,
                'message':f'hi thanks for signing up a passcode is sent to your email'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginUserView(GenericAPIView):
    serializer_class=LoginSerializer
    def post(self, request):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class TestauthenticationView(GenericAPIView):
    permission_classes=[IsAuthenticated]

    def get(self, request):
        data={
            'msg': 'it works'
        }
        return Response(data, staus=status.HTTP_200_OK)
    
class PasswordResetRequestView(GenericAPIView):
    serializer_class=PasswordResetRequestSerializer
    def post(self, request):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        return Response({'message':"a link has been sent to your email to reset your password"})