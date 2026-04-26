package com.learn.brainbridge.repository;

import com.learn.brainbridge.entity.ArticleComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleCommentRepository extends JpaRepository<ArticleComment, Long> {
    List<ArticleComment> findByArticleIdOrderByCreatedAtDesc(Long articleId);
}
