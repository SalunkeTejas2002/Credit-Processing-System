package com.creditprocessingsystem.controller;

import com.creditprocessingsystem.dto.HealthResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Exposes health-related endpoints for the application.
 */
@RestController
@RequestMapping("/api/v1/health")
@CrossOrigin(origins = "http://localhost:5173")
public class HealthController {

    private static final Logger logger = LoggerFactory.getLogger(HealthController.class);

    /**
     * Returns application health status as a lightweight DTO.
     *
     * @return HTTP 200 with health information
     */
    @GetMapping
    public ResponseEntity<HealthResponse> getHealth() {
        logger.info("Received health check request");

        HealthResponse healthResponse = new HealthResponse(
                "UP",
                "Credit Processing System",
                "1.0.0"
        );

        return ResponseEntity.ok(healthResponse);
    }
}
