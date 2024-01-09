from django.shortcuts import render
import requests
from requests.auth import HTTPBasicAuth
from rest_framework.response import Response
from rest_framework.views import APIView
import json

serverPath = 'http://web.corp.siyob.uz:9696/'

def post_data(url,results):
    response = requests.get(url=f'{url}',
                             auth=HTTPBasicAuth(username=results['username'], password=results['password']))
    result = response.json()
    return result

class GetBalance(APIView):
    
    def post(self,request):
        extractedData = post_data(serverPath+"ZUP/hs/api/check_user/",request.data)
        responce = Response()
        responce.data = extractedData
        return responce
   