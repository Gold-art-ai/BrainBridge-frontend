package com.learn.brainbridge.controllers;

import com.learn.brainbridge.dtos.ProjectDTO;
import com.learn.brainbridge.entity.Projects;
import com.learn.brainbridge.entity.User;
import com.learn.brainbridge.repository.UserRepository;
import com.learn.brainbridge.service.ProjectsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@Tag(name = "Projects API", description = "Projects operations(ADD,GET,DELETE OR UPDATE)")
@RequestMapping("/projects")
public class ProjectsController {
    private final ProjectsService service;
    private final UserRepository userRepository;

    @Autowired
    public ProjectsController(ProjectsService service, UserRepository userRepository) {
        this.service = service;
        this.userRepository = userRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<?> createProject(Authentication authentication, @Valid @RequestBody ProjectDTO projectDTO) {
        System.out.println("Received project creation request: " + projectDTO.getTitle());

        // Always bind the created project to the authenticated user.
        // Otherwise the frontend can accidentally send an incorrect ownerId and the project won't show up in GET /projects/my.
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        String principalName = authentication.getName();
        User user = userRepository.findByEmail(principalName)
                .orElseGet(() -> userRepository.findByUsername(principalName).orElse(null));

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        Integer ownerId;
        try {
            ownerId = Math.toIntExact(user.getId());
        } catch (ArithmeticException ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("User ID is too large to map to project owner id");
        }

        Projects project = new Projects();
        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        project.setOwnerId(ownerId);
        project.setTeamId(projectDTO.getTeamId());
        project.setSourceIdeaId(projectDTO.getSourceIdeaId());
        project.setCoverImageUrl(projectDTO.getCoverImageUrl());
        project.setRepoUrl(projectDTO.getRepoUrl());
        project.setStartDate(projectDTO.getStartDate());
        project.setEndDate(projectDTO.getEndDate());
        project.setProjectStatus(projectDTO.getProjectStatus());
        project.setProjectVisibility(projectDTO.getProjectVisibility());
        project.setField(projectDTO.getField());
        project.setMainTags(projectDTO.getMainTags() == null ? new ArrayList<>() : projectDTO.getMainTags());
        project.setSubTags(projectDTO.getSubTags() == null ? new ArrayList<>() : projectDTO.getSubTags());
        project.setSdgGoals(projectDTO.getSdgGoals() == null ? new ArrayList<>() : projectDTO.getSdgGoals());
        project.setNst2Goals(projectDTO.getNst2Goals() == null ? new ArrayList<>() : projectDTO.getNst2Goals());
        project.setAdditionalMediaUrls(projectDTO.getAdditionalMediaUrls() == null ? new ArrayList<>() : projectDTO.getAdditionalMediaUrls());
        project.setCreatedAt(java.time.LocalDate.now());
        project.setUpdatedAt(java.time.LocalDate.now());
        Projects saved = service.createProject(project);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProjects() {
        List<Projects> projects = service.getAllProjects();
        if (projects.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No projects found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(projects);
    }

    @GetMapping("/my")
    @Transactional(readOnly = true)
    public ResponseEntity<?> getMyProjects(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        String principalName = authentication.getName();

        // Try to resolve the current user by email first, then by username
        User user = userRepository.findByEmail(principalName)
                .orElseGet(() -> userRepository.findByUsername(principalName).orElse(null));

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        Integer ownerId;
        try {
            ownerId = Math.toIntExact(user.getId());
        } catch (ArithmeticException ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("User ID is too large to map to project owner id");
        }

        try {
            List<Projects> projects = service.getProjectsByOwner(ownerId);
            return ResponseEntity.status(HttpStatus.OK).body(projects);
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to load your projects: " + ex.getMessage());
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateProject(@Valid @RequestBody ProjectDTO projectDTO) {
        if (projectDTO.getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Project id is required for update");
        }

        Optional<Projects> existingOpt = service.getProjectById(projectDTO.getId());
        if (existingOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Project not found");
        }

        Projects project = existingOpt.get();
        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        project.setOwnerId(projectDTO.getOwnerId());
        project.setTeamId(projectDTO.getTeamId());
        project.setSourceIdeaId(projectDTO.getSourceIdeaId());
        project.setCoverImageUrl(projectDTO.getCoverImageUrl());
        project.setRepoUrl(projectDTO.getRepoUrl());
        project.setStartDate(projectDTO.getStartDate());
        project.setEndDate(projectDTO.getEndDate());
        project.setProjectStatus(projectDTO.getProjectStatus());
        project.setProjectVisibility(projectDTO.getProjectVisibility());
        project.setField(projectDTO.getField());
        project.setMainTags(projectDTO.getMainTags() == null ? new ArrayList<>() : projectDTO.getMainTags());
        project.setSubTags(projectDTO.getSubTags() == null ? new ArrayList<>() : projectDTO.getSubTags());
        project.setSdgGoals(projectDTO.getSdgGoals() == null ? new ArrayList<>() : projectDTO.getSdgGoals());
        project.setNst2Goals(projectDTO.getNst2Goals() == null ? new ArrayList<>() : projectDTO.getNst2Goals());
        project.setAdditionalMediaUrls(projectDTO.getAdditionalMediaUrls() == null ? new ArrayList<>() : projectDTO.getAdditionalMediaUrls());
        project.setUpdatedAt(java.time.LocalDate.now());

        Projects updated = service.updateProject(project);
        return ResponseEntity.status(HttpStatus.OK).body(updated);
    }

    @GetMapping("/team/{teamName}")
    public ResponseEntity<?> getProject(@PathVariable("teamName") Integer teamName) {
        List<Projects> projects = service.getProjectsByTeam(teamName);
        if (projects.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No projects found for team " + teamName);
        }
        return ResponseEntity.status(HttpStatus.OK).body(projects);
    }

    @GetMapping("/fetch/{id}")
    public ResponseEntity<?> getProjectById(@PathVariable("id") Integer id) {
        Optional<Projects> project = service.getProjectById(id);
        if (project.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No projects found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(project.get());
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable("id") Integer id) {
        Optional<Projects> project = service.getProjectById(id);
        if (project.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Collections.singletonMap("message", "Project not found"));
        }
        service.deleteProject(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                java.util.Collections.singletonMap("message", "Project " + project.get().getTitle() + " deleted"));
    }

    @PostMapping("/view/{id}")
    public ResponseEntity<?> incrementViewCount(@PathVariable("id") Integer id) {
        service.incrementViewCount(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
