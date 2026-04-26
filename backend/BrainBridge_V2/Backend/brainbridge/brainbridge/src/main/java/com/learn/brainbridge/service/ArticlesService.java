package com.learn.brainbridge.service;

import com.learn.brainbridge.entity.Article;
import com.learn.brainbridge.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticlesService {

    private final ArticleRepository repo;

    @Autowired
    public ArticlesService(ArticleRepository repo) {
        this.repo = repo;
    }

    public Article createArticle(Article article) {
        return repo.save(article);
    }

    public List<Article> getAllArticles() {
        return repo.findAll();
    }

    public List<Article> getArticlesByOwner(Long ownerId) {
        return repo.findByOwnerId(ownerId);
    }

    public Optional<Article> getArticleById(Long id) {
        return repo.findById(id);
    }
}
