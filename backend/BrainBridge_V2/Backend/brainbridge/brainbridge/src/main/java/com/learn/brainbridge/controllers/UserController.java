package com.learn.brainbridge.controllers;

import com.learn.brainbridge.dtos.AuthResponseDTO;
import com.learn.brainbridge.dtos.LoginDTO;
import com.learn.brainbridge.dtos.RegisterUserDTO;
import com.learn.brainbridge.dtos.UserDTO;
import com.learn.brainbridge.entity.User;
import com.learn.brainbridge.generics.ApiResponses1;
import com.learn.brainbridge.service.EmailVerificationService;
import com.learn.brainbridge.service.UserService;
import com.learn.brainbridge.repository.UserRepository;
import com.learn.brainbridge.util.JwtUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * UserController - REST API Controller for User operations
 * 
 * CONCEPTS TO LEARN:
 * 1. @RestController - Combines @Controller + @ResponseBody
 *    - @Controller: Marks this as a Spring MVC controller
 *    - @ResponseBody: Converts return values to JSON automatically
 * 2. @RequestMapping - Base URL path for all endpoints in this controller
 * 3. @Autowired - Dependency injection (injects UserService)
 * 4. HTTP Methods:
 *    - @GetMapping: GET request (retrieve data)
 *    - @PostMapping: POST request (create data)
 *    - @PutMapping: PUT request (update data)
 *    - @DeleteMapping: DELETE request (delete data)
 * 5. @PathVariable - Extracts value from URL path (/api/users/{id})
 * 6. @RequestBody - Converts JSON request body to Java object
 * 7. @Valid - Triggers validation on DTO (checks @NotBlank, @Email, etc.)
 * 8. ResponseEntity<T> - Wraps response with HTTP status code
 * 9. HttpStatus - HTTP status codes (OK, CREATED, NOT_FOUND, etc.)
 */
@RestController
@RequestMapping("/api/users") // All endpoints start with /api/users
@Tag(name = "Users", description = "API endpoints for managing users and authentication")
public class UserController {

    /**
     * @Autowired - Spring injects UserService automatically
     * Controller depends on Service, Service depends on Repository
     * This is the "layered architecture" pattern
     */
    @Autowired
    private UserService userService;

    @Autowired
    private EmailVerificationService emailVerificationService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    /**
     * POST /api/users/register
     * Register a new user
     * 
     * @param registerDTO - User registration data from request body
     * @return ResponseEntity with created user and HTTP 201 CREATED status
     */
    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Creates a new user account with email, username, and password.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "User registered successfully",
                    content = @Content(schema = @Schema(implementation = UserDTO.class))),
            @ApiResponse(responseCode = "400", description = "Invalid input or email/username already exists"),
            @ApiResponse(responseCode = "500", description="Internal Server Error")
    })
    public ResponseEntity<ApiResponses1<UserDTO>> registerUser(
            @Valid @RequestBody RegisterUserDTO registerUserDTO) {
        // For now we ignore profileImage and pass null; you can extend this later for file upload
        ApiResponses1<UserDTO> response = userService.registerUser(registerUserDTO, null);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/verify-email")
    @Operation(summary = "Verify email", description = "Verifies a user's email using a verification token sent by email.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Email verified successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid or expired token")
    })
    public ResponseEntity<ApiResponses1<Void>> verifyEmail(@RequestParam("token") String token) {
        emailVerificationService.verifyToken(token);
        ApiResponses1<Void> response = new ApiResponses1<>(true, "Email verified successfully", null);
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/login")
    @Operation(summary = "Login user", description = "Authenticates a user with email/username and password.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Login successful",
                    content = @Content(schema = @Schema(implementation = UserDTO.class))),
            @ApiResponse(responseCode = "400", description = "Invalid credentials or account deactivated")
    })
    public ResponseEntity<ApiResponses1<AuthResponseDTO>> loginUser(@Valid @RequestBody LoginDTO loginDTO) {
        UserDTO user  = userService.loginUser(loginDTO);

        // Use email if present, otherwise username as JWT subject
        String subject = (user.getEmail() != null && !user.getEmail().isEmpty())
                ? user.getEmail()
                : user.getUsername();
        String token = jwtUtil.generateToken(subject);

        AuthResponseDTO payload = new AuthResponseDTO(token, user);
        ApiResponses1<AuthResponseDTO> response  = new ApiResponses1<>(true,"Logged in successfully", payload);
        return ResponseEntity.ok(response);
    }

    /**
     * GET /api/users/me
     * Returns the currently authenticated user's profile.
     */
    @GetMapping("/me")
    public ResponseEntity<UserDTO> getMe(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String principalName = authentication.getName();

        // JWT subject is email if present, otherwise username (see loginUser).
        User user = userRepository.findByEmail(principalName)
                .orElseGet(() -> userRepository.findByUsername(principalName).orElse(null));

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok(userService.getUserById(user.getId()));
    }
    

    /**
     * GET /api/users/{id}
     * Get user by ID
     * 
     * @param id - User ID from URL path
     * @return ResponseEntity with user data and HTTP 200 OK status
     */
    @GetMapping("/{id}")
    @Operation(
            summary = "Get user by ID",
            description = "Retrieves user information by user ID."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User found",
                    content = @Content(schema = @Schema(implementation = UserDTO.class))),
            @ApiResponse(responseCode = "404", description = "User not found")
    })
    public ResponseEntity<UserDTO> getUserById(
            @Parameter(description = "User ID", required = true)
            @PathVariable Long id) {
        UserDTO user = userService.getUserById(id);
        return ResponseEntity.ok(user); // Shortcut for new ResponseEntity<>(user, HttpStatus.OK)
    }

    /**
     * GET /api/users
     * Get all users
     * 
     * @return ResponseEntity with list of users and HTTP 200 OK status
     */
    @GetMapping
    @Operation(
            summary = "Get all users",
            description = "Retrieves a list of all users in the system."
    )
    @ApiResponse(responseCode = "200", description = "List of users retrieved successfully")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    /**
     * PUT /api/users/{id}
     * Update user information
     * 
     * @param id - User ID from URL path
     * @param userDTO - Updated user data from request body
     * @return ResponseEntity with updated user and HTTP 200 OK status
     */
    @PutMapping("/{id}")
    @Operation(
            summary = "Update user",
            description = "Updates user information (firstName, lastName, profileImageUrl)."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User updated successfully",
                    content = @Content(schema = @Schema(implementation = UserDTO.class))),
            @ApiResponse(responseCode = "404", description = "User not found")
    })
    public ResponseEntity<UserDTO> updateUser(
            @Parameter(description = "User ID", required = true)
            @PathVariable Long id,
            @Valid @RequestBody UserDTO userDTO) {
        UserDTO updatedUser = userService.updateUser(id, userDTO);
        return ResponseEntity.ok(updatedUser);
    }

    /**
     * DELETE /api/users/{id}
     * Delete user by ID
     * 
     * @param id - User ID from URL path
     * @return ResponseEntity with HTTP 204 NO_CONTENT status
     */
    @DeleteMapping("/{id}")
    @Operation(
            summary = "Delete user",
            description = "Permanently deletes a user account."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "User deleted successfully"),
            @ApiResponse(responseCode = "404", description = "User not found")
    })
    public ResponseEntity<Void> deleteUser(
            @Parameter(description = "User ID", required = true)
            @PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build(); // HTTP 204 No Content
        // 529 is the one which has completely stopped receiving requests
        // 429 shows that there is rate limiting the API is actually receiving the requests but it can't continue processing them.
    }
}
