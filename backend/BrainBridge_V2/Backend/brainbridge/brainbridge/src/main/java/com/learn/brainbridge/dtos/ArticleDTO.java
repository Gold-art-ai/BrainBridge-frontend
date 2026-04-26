package com.learn.brainbridge.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.learn.brainbridge.enums.ProjectVisibility;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ArticleDTO {

    @JsonProperty("id")
    private Long id;

    @NotBlank
    @Size(min = 2, max = 120)
    @Schema(description = "Article title", example = "How I built BrainBridge" )
    @JsonProperty("title")
    private String title;

    @NotBlank
    @Size(min = 2, max = 20000)
    @Schema(description = "Article content", example = "In this article, I will share..." )
    @JsonProperty("content")
    private String content;

    @Schema(description = "Legacy field (deprecated)", example = "Healthcare")
    @JsonProperty("field")
    private String field;

    @NotNull
    @Schema(description = "Article visibility", example = "PUBLIC")
    @JsonProperty("visibility")
    private ProjectVisibility visibility;

    @Schema(description = "Cover image url/base64", example = "data:image/png;base64,...")
    @JsonProperty("coverImageUrl")
    private String coverImageUrl;

    @JsonProperty("relatedUrls")
    private List<String> relatedUrls = new ArrayList<>();

    @JsonProperty("additionalMediaUrls")
    private List<String> additionalMediaUrls = new ArrayList<>();

    @JsonProperty("technologies")
    private List<String> technologies = new ArrayList<>();

    @JsonProperty("createdAt")
    private LocalDate createdAt;

    @JsonProperty("updatedAt")
    private LocalDate updatedAt;

    public ArticleDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public ProjectVisibility getVisibility() {
        return visibility;
    }

    public void setVisibility(ProjectVisibility visibility) {
        this.visibility = visibility;
    }

    public String getCoverImageUrl() {
        return coverImageUrl;
    }

    public void setCoverImageUrl(String coverImageUrl) {
        this.coverImageUrl = coverImageUrl;
    }

    public List<String> getRelatedUrls() {
        return relatedUrls;
    }

    public void setRelatedUrls(List<String> relatedUrls) {
        this.relatedUrls = relatedUrls;
    }

    public List<String> getAdditionalMediaUrls() {
        return additionalMediaUrls;
    }

    public void setAdditionalMediaUrls(List<String> additionalMediaUrls) {
        this.additionalMediaUrls = additionalMediaUrls;
    }

    public List<String> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<String> technologies) {
        this.technologies = technologies;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }
}
