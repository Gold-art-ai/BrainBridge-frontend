package com.learn.brainbridge.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Schema(description = "Create comment request")
public class CreateArticleCommentDTO {

    @NotBlank
    @Size(min = 1, max = 2000)
    @Schema(description = "Comment content", example = "Great article!" )
    private String content;

    public CreateArticleCommentDTO() {}

    public CreateArticleCommentDTO(String content) {
        this.content = content;
    }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
