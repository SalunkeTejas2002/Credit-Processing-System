package com.creditprocessingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Health response payload returned by the health endpoint.
 */
@Getter
@AllArgsConstructor
public class HealthResponse {

    private final String status;
    private final String application;
    private final String version;
}
