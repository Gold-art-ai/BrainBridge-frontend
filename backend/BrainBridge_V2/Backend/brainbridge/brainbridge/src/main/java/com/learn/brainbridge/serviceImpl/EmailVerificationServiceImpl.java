package com.learn.brainbridge.serviceImpl;

import com.learn.brainbridge.Exception.BadRequestException;
import com.learn.brainbridge.entity.EmailVerificationToken;
import com.learn.brainbridge.entity.User;
import com.learn.brainbridge.repository.EmailVerificationTokenRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class EmailVerificationServiceImpl implements com.learn.brainbridge.service.EmailVerificationService {

    @Autowired
    private EmailVerificationTokenRepository tokenRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Value("${app.frontend.base-url:http://localhost:5173}")
    private String frontendBaseUrl;

    @Override
    @Transactional
    public void sendVerificationEmail(User user) {
        // remove existing tokens for this user
        tokenRepository.deleteByUser(user);

        String token = UUID.randomUUID().toString();
        LocalDateTime expiresAt = LocalDateTime.now().plusHours(24);

        EmailVerificationToken verificationToken = new EmailVerificationToken();
        verificationToken.setUser(user);
        verificationToken.setToken(token);
        verificationToken.setExpiresAt(expiresAt);
        verificationToken.setUsed(false);
        tokenRepository.save(verificationToken);

        String verificationLink = frontendBaseUrl + "/verify-email?token=" + token;

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(user.getEmail());
        message.setSubject("Verify your BrainBridge account");
        message.setText("Hi " + (user.getFirstName() != null ? user.getFirstName() : "") + ",\n\n"
                + "Please verify your email by clicking the link below:\n"
                + verificationLink + "\n\n"
                + "This link will expire in 24 hours.\n\n"
                + "If you did not create an account, please ignore this email.\n\n"
                + "BrainBridge Team");

        mailSender.send(message);
    }

    @Override
    @Transactional
    public void verifyToken(String token) {
        EmailVerificationToken verificationToken = tokenRepository.findByToken(token)
                .orElseThrow(() -> new BadRequestException("Invalid verification token"));

        if (Boolean.TRUE.equals(verificationToken.getUsed())) {
            throw new BadRequestException("Verification token has already been used");
        }

        if (verificationToken.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new BadRequestException("Verification token has expired");
        }

        User user = verificationToken.getUser();
        user.setIsEmailVerified(true);

        verificationToken.setUsed(true);
        tokenRepository.save(verificationToken);
    }
}

