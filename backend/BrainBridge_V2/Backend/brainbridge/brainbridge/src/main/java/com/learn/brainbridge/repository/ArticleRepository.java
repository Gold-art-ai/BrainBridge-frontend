package com.learn.brainbridge.repository;

import com.learn.brainbridge.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findByOwnerId(Long ownerId);
}
