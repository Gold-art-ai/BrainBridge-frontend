package com.learn.brainbridge.dtos;

import com.learn.brainbridge.enums.NotificationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationDTO {
    private Long id;
    private NotificationType type;
    private String title;
    private String body;
    private Boolean isRead;
    private LocalDateTime createdAt;
}
