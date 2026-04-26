package com.learn.brainbridge.entity;

import com.learn.brainbridge.enums.ProjectVisibility;
import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(
        name = "articles",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_article_owner_title", columnNames = {"owner_id", "title"})
        }
)
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "title")
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT", name = "content")
    private String content;

    @Column(nullable = true, name = "field")
    private String field;

    @Column(nullable = false, name = "owner_id")
    private Long ownerId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "visibility")
    private ProjectVisibility visibility = ProjectVisibility.PUBLIC;

    @Column(nullable = true, columnDefinition = "TEXT", name = "cover_image_url")
    private String coverImageUrl;

    @ElementCollection
    @CollectionTable(name = "article_related_urls", joinColumns = @JoinColumn(name = "article_id"))
    @Column(name = "url", columnDefinition = "TEXT")
    private List<String> relatedUrls = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "article_additional_media", joinColumns = @JoinColumn(name = "article_id"))
    @Column(name = "media_url", columnDefinition = "TEXT")
    private List<String> additionalMediaUrls = new ArrayList<>();

    @Column(nullable = false, updatable = false, name = "created_at")
    @CreatedDate
    private LocalDate createdAt;

    @LastModifiedDate
    @Column(nullable = false, name = "updated_at")
    private LocalDate updatedAt;

    @PrePersist
    protected void onCreate() {
        if (createdAt == null) {
            createdAt = LocalDate.now();
        }
        if (updatedAt == null) {
            updatedAt = LocalDate.now();
        }
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDate.now();
    }

    public Article() {
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

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
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
