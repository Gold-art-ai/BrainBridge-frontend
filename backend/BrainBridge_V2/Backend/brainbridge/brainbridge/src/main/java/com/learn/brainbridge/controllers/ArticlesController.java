package com.learn.brainbridge.controllers;

import com.learn.brainbridge.dtos.ArticleDTO;
import com.learn.brainbridge.dtos.ArticleLikeStatusDTO;
import com.learn.brainbridge.dtos.CreateArticleCommentDTO;
import com.learn.brainbridge.entity.ArticleComment;
import com.learn.brainbridge.entity.ArticleLike;
import com.learn.brainbridge.entity.Article;
import com.learn.brainbridge.entity.User;
import com.learn.brainbridge.repository.ArticleCommentRepository;
import com.learn.brainbridge.repository.ArticleLikeRepository;
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
import java.util.Optional;

@RestController
@Tag(name = "Articles API", description = "Articles operations(ADD,GET)")
@RequestMapping("/articles")
public class ArticlesController {

    private final ArticlesService service;
    private final UserRepository userRepository;
    private final ArticleLikeRepository articleLikeRepository;
    private final ArticleCommentRepository articleCommentRepository;

    @Autowired
    public ArticlesController(
            ArticlesService service,
            UserRepository userRepository,
            ArticleLikeRepository articleLikeRepository,
            ArticleCommentRepository articleCommentRepository
    ) {
        this.service = service;
        this.userRepository = userRepository;
        this.articleLikeRepository = articleLikeRepository;
        this.articleCommentRepository = articleCommentRepository;
    }

    private User getCurrentUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }
        String principalName = authentication.getName();
        return userRepository.findByEmail(principalName)
                .orElseGet(() -> userRepository.findByUsername(principalName).orElse(null));
    }

    @PostMapping("/add")
    public ResponseEntity<?> createArticle(Authentication authentication, @Valid @RequestBody ArticleDTO articleDTO) {
        User user = getCurrentUser(authentication);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        Article article = new Article();
        article.setTitle(articleDTO.getTitle());
        article.setContent(articleDTO.getContent());
        article.setField(articleDTO.getField());
        article.setVisibility(articleDTO.getVisibility());
        article.setOwnerId(user.getId());
        article.setCoverImageUrl(articleDTO.getCoverImageUrl());
        article.setRelatedUrls(articleDTO.getRelatedUrls() == null ? new ArrayList<>() : articleDTO.getRelatedUrls());
        article.setAdditionalMediaUrls(articleDTO.getAdditionalMediaUrls() == null ? new ArrayList<>() : articleDTO.getAdditionalMediaUrls());
        article.setTechnologies(articleDTO.getTechnologies() == null ? new ArrayList<>() : articleDTO.getTechnologies());

        Article saved = service.createArticle(article);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateArticle(Authentication authentication, @Valid @RequestBody ArticleDTO articleDTO) {
        if (articleDTO.getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Article id is required for update");
        }
        User user = getCurrentUser(authentication);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        Optional<Article> existingOpt = service.getArticleById(articleDTO.getId());
        if (existingOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Article not found");
        }

        Article existing = existingOpt.get();
        if (existing.getOwnerId() == null || !existing.getOwnerId().equals(user.getId())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Forbidden");
        }

        existing.setTitle(articleDTO.getTitle());
        existing.setContent(articleDTO.getContent());
        existing.setField(articleDTO.getField());
        existing.setVisibility(articleDTO.getVisibility());
        existing.setCoverImageUrl(articleDTO.getCoverImageUrl());
        existing.setRelatedUrls(articleDTO.getRelatedUrls() == null ? new ArrayList<>() : articleDTO.getRelatedUrls());
        existing.setAdditionalMediaUrls(articleDTO.getAdditionalMediaUrls() == null ? new ArrayList<>() : articleDTO.getAdditionalMediaUrls());
        existing.setTechnologies(articleDTO.getTechnologies() == null ? new ArrayList<>() : articleDTO.getTechnologies());

        Article saved = service.createArticle(existing);
        return ResponseEntity.status(HttpStatus.OK).body(saved);
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
        User user = getCurrentUser(authentication);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        List<Article> articles = service.getArticlesByOwner(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(articles);
    }

    @GetMapping("/fetch/{id}")
    public ResponseEntity<?> getArticleById(@PathVariable Long id) {
        Optional<Article> article = service.getArticleById(id);
        if (article.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Article not found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(article.get());
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable("id") Long id) {
        Optional<Article> article = service.getArticleById(id);
        if (article.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Collections.singletonMap("message", "Article not found"));
        }
        service.deleteArticle(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                java.util.Collections.singletonMap("message", "Article " + article.get().getTitle() + " deleted"));
    }

    @GetMapping("/{id}/likes")
    public ResponseEntity<?> getLikeStatus(@PathVariable("id") Long id, Authentication authentication) {
        long count = articleLikeRepository.countByArticleId(id);

        boolean likedByMe = false;
        User user = getCurrentUser(authentication);
        if (user != null) {
            likedByMe = articleLikeRepository.existsByUserIdAndArticleId(user.getId(), id);
        }

        return ResponseEntity.ok(new ArticleLikeStatusDTO(count, likedByMe));
    }

    @PostMapping("/{id}/likes/toggle")
    public ResponseEntity<?> toggleLike(@PathVariable("id") Long id, Authentication authentication) {
        User user = getCurrentUser(authentication);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        boolean exists = articleLikeRepository.existsByUserIdAndArticleId(user.getId(), id);
        if (exists) {
            articleLikeRepository.deleteByUserIdAndArticleId(user.getId(), id);
        } else {
            articleLikeRepository.save(new ArticleLike(user.getId(), id));
        }

        long count = articleLikeRepository.countByArticleId(id);
        boolean likedByMe = !exists;
        return ResponseEntity.ok(new ArticleLikeStatusDTO(count, likedByMe));
    }

    @GetMapping("/{id}/comments")
    public ResponseEntity<?> getComments(@PathVariable("id") Long id) {
        List<ArticleComment> comments = articleCommentRepository.findByArticleIdOrderByCreatedAtDesc(id);
        return ResponseEntity.ok(comments);
    }

    @PostMapping("/{id}/comments")
    public ResponseEntity<?> addComment(
            @PathVariable("id") Long id,
            Authentication authentication,
            @Valid @RequestBody CreateArticleCommentDTO dto
    ) {
        User user = getCurrentUser(authentication);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        ArticleComment comment = new ArticleComment(id, user.getId(), dto.getContent());
        ArticleComment saved = articleCommentRepository.save(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
