from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.core.files.storage import default_storage
from .models import Photo
from rest_framework import serializers

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'file', 'uploaded_at', 'device_info', 'file_size', 'file_name']

class UploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            photo = Photo.objects.create(
                file=file_obj,
                device_info=request.data.get('device_info', 'Unknown'),
                uploaded_at=request.data.get('uploaded_at', None)
            )
            
            serializer = PhotoSerializer(photo)
            return Response({
                "message": "Photo uploaded successfully",
                "photo": serializer.data
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            return Response({
                "error": "Failed to upload photo",
                "details": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class PhotoListView(APIView):
    def get(self, request, *args, **kwargs):
        photos = Photo.objects.all()
        serializer = PhotoSerializer(photos, many=True)
        return Response({
            "photos": serializer.data,
            "count": photos.count()
        }, status=status.HTTP_200_OK)