package com.learn.brainbridge.controllers;

import com.learn.brainbridge.dtos.ArticleDTO;
import com.learn.brainbridge.entity.Article;
import com.learn.brainbridge.entity.User;
import com.learn.brainbridge.repository.UserRepository;
import com.learn.brainbridge.service.ArticlesService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Tag(name = "Articles API", description = "Articles operations(ADD,GET)")
@RequestMapping("/articles")
public class ArticlesController {

    private final ArticlesService service;
    private final UserRepository userRepository;

    @Autowired
    public ArticlesController(ArticlesService service, UserRepository userRepository) {
        this.service = service;
        this.userRepository = userRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<?> createArticle(Authentication authentication, @Valid @RequestBody ArticleDTO articleDTO) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        String principalName = authentication.getName();
        User user = userRepository.findByEmail(principalName)
                .orElseGet(() -> userRepository.findByUsername(principalName).orElse(null));

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        Article article = new Article();
        article.setTitle(articleDTO.getTitle());
        article.setContent(articleDTO.getContent());
        article.setVisibility(articleDTO.getVisibility());
        article.setOwnerId(user.getId());
        article.setCoverImageUrl(articleDTO.getCoverImageUrl());
        article.setRelatedUrls(articleDTO.getRelatedUrls() == null ? new ArrayList<>() : articleDTO.getRelatedUrls());
        article.setAdditionalMediaUrls(articleDTO.getAdditionalMediaUrls() == null ? new ArrayList<>() : articleDTO.getAdditionalMediaUrls());

        Article saved = service.createArticle(article);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllArticles() {
        List<Article> articles = service.getAllArticles();
        if (articles.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No articles found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(articles);
    }

    @GetMapping("/my")
    public ResponseEntity<?> getMyArticles(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        String principalName = authentication.getName();
        User user = userRepository.findByEmail(principalName)
                .orElseGet(() -> userRepository.findByUsername(principalName).orElse(null));

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        List<Article> articles = service.getArticlesByOwner(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(articles);
    }
}
