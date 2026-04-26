package com.learn.brainbridge.repository;

import com.learn.brainbridge.entity.ArticleLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface ArticleLikeRepository extends JpaRepository<ArticleLike, Long> {
    long countByArticleId(Long articleId);
    boolean existsByUserIdAndArticleId(Long userId, Long articleId);
    Optional<ArticleLike> findByUserIdAndArticleId(Long userId, Long articleId);

    @Transactional
    void deleteByUserIdAndArticleId(Long userId, Long articleId);
}
