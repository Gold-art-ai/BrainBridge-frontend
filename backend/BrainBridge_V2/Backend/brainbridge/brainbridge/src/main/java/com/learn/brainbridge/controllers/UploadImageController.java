package com.learn.brainbridge.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/images")
@Tag(name = "Image Upload", description = "Endpoints for managing profile pictures and course assets")
public class UploadImageController {

    // You would normally inject your ImageService here
    // private final ImageService imageService;

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(
            summary = "Upload an image file",
            description = "Accepts an image file (PNG, JPG) and returns the public URL."
    )
    public ResponseEntity<?> uploadImage(
            @Parameter(
                    description = "The image file to upload",
                    content = @Content(mediaType = MediaType.MULTIPART_FORM_DATA_VALUE,
                            schema = @Schema(type = "string", format = "binary"))
            )
            @RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please select a file to upload.");
        }

        try {
            // Logic to save the file (Local storage, Cloudinary, or S3)
            // String imageUrl = imageService.saveImage(file);

            String fakeUrl = "https://brainbridge.com/images/sample-result.jpg";

            return ResponseEntity.ok(Map.of(
                    "url", fakeUrl,
                    "name", file.getOriginalFilename(),
                    "size", file.getSize()
            ));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error uploading file: " + e.getMessage());
        }
    }
}