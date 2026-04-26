package com.learn.brainbridge.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(
        name = "article_likes",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_article_like_user_article", columnNames = {"user_id", "article_id"})
        },
        indexes = {
                @Index(name = "idx_article_like_article", columnList = "article_id"),
                @Index(name = "idx_article_like_user", columnList = "user_id")
        }
)
public class ArticleLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public ArticleLike() {}

    public ArticleLike(Long userId, Long articleId) {
        this.userId = userId;
        this.articleId = articleId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getArticleId() { return articleId; }
    public void setArticleId(Long articleId) { this.articleId = articleId; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
