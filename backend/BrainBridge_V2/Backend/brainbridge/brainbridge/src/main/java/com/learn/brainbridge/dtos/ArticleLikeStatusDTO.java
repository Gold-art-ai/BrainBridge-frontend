package com.learn.brainbridge.dtos;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Like status for an article")
public class ArticleLikeStatusDTO {

    @Schema(description = "Total likes count")
    private long count;

    @Schema(description = "Whether the current user has liked this article")
    private boolean likedByMe;

    public ArticleLikeStatusDTO() {}

    public ArticleLikeStatusDTO(long count, boolean likedByMe) {
        this.count = count;
        this.likedByMe = likedByMe;
    }

    public long getCount() { return count; }
    public void setCount(long count) { this.count = count; }

    public boolean isLikedByMe() { return likedByMe; }
    public void setLikedByMe(boolean likedByMe) { this.likedByMe = likedByMe; }
}
