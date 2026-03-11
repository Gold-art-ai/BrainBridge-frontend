package com.learn.brainbridge.service;

import com.learn.brainbridge.entity.User;

public interface EmailVerificationService {

    void sendVerificationEmail(User user);

    void verifyToken(String token);
}

