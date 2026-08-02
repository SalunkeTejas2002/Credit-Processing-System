package com.creditprocessingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.OffsetDateTime;

/**
 * Standard API error response payload.
 */
@Getter
@Builder
@AllArgsConstructor
public class ErrorResponse {

    private final OffsetDateTime timestamp;
    private final int status;
    private final String error;
    private final String message;
    private final String path;
}
