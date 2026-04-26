package com.learn.brainbridge.dtos;

import java.time.LocalDateTime;

public class ArticleCommentResponseDTO {
    private Long id;
    private Long articleId;
    private Long userId;
    private String userName;
    private String content;
    private LocalDateTime createdAt;

    public ArticleCommentResponseDTO() {}

    public ArticleCommentResponseDTO(Long id, Long articleId, Long userId, String userName, String content, LocalDateTime createdAt) {
        this.id = id;
        this.articleId = articleId;
        this.userId = userId;
        this.userName = userName;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getArticleId() { return articleId; }
    public void setArticleId(Long articleId) { this.articleId = articleId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
