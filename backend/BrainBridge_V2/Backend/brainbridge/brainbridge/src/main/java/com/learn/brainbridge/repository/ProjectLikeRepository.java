package com.learn.brainbridge.repository;

import com.learn.brainbridge.entity.ProjectLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectLikeRepository extends JpaRepository<ProjectLike, Long> {
    Optional<ProjectLike> findByUserIdAndProjectId(Long userId, Integer projectId);
    boolean existsByUserIdAndProjectId(Long userId, Integer projectId);
    void deleteByUserIdAndProjectId(Long userId, Integer projectId);
    long countByProjectId(Integer projectId);
}
