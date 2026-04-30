package com.descope.java_sample_app;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.availability.AvailabilityChangeEvent;
import org.springframework.boot.availability.ReadinessState;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class ReadinessDelayHealthIndicator {

    @Value("${app.readiness.delay-seconds:30}")
    private int delaySeconds;

    private final long startTime;
    private final ApplicationEventPublisher eventPublisher;
    private volatile boolean readinessPublished = false;

    public ReadinessDelayHealthIndicator(ApplicationEventPublisher eventPublisher) {
        this.startTime = System.currentTimeMillis();
        this.eventPublisher = eventPublisher;
        System.out.println("Readiness delay started. Will be ready in " + delaySeconds + " seconds.");
    }

    @PostConstruct
    public void init() {
        // Initially set to REFUSING_TRAFFIC (application not ready to accept traffic)
        AvailabilityChangeEvent.publish(eventPublisher, this, ReadinessState.REFUSING_TRAFFIC);
        
        // Start a background thread to check delay and update readiness state
        new Thread(() -> {
            try {
                Thread.sleep(delaySeconds * 1000L);
                if (!readinessPublished) {
                    System.out.println("Readiness delay ended. Application is now READY.");
                    AvailabilityChangeEvent.publish(eventPublisher, this, ReadinessState.ACCEPTING_TRAFFIC);
                    readinessPublished = true;
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, "readiness-delay-thread").start();
    }
}
