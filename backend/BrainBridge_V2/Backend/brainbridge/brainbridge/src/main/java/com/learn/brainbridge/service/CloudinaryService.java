package com.learn.brainbridge.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {

    @Autowired
    private Cloudinary cloudinary;

    /**
     * Upload image to Cloudinary and return the secure URL
     * @param file - The image file to upload
     * @param folder - Optional folder name in Cloudinary (e.g., "profile_pictures")
     * @return The secure URL of the uploaded image
     */
    public String uploadImage(MultipartFile file, String folder) throws IOException {
        Map<String, Object> uploadParams = ObjectUtils.asMap(
                "folder", folder != null ? folder : "brainbridge",
                "resource_type", "image",
                "transformation", ObjectUtils.asMap(
                        "quality", "auto",
                        "fetch_format", "auto"
                )
        );

        Map uploadResult = cloudinary.uploader().upload(file.getBytes(), uploadParams);
        return (String) uploadResult.get("secure_url");
    }

    /**
     * Delete image from Cloudinary by public ID
     * @param publicId - The public ID of the image to delete
     */
    public void deleteImage(String publicId) throws IOException {
        cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }
}
