package com.asha.university_event.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig{

    @Bean
    public CorsFilter CorsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Allow credentials (cookies, authorization headers, etc.)
        config.setAllowCredentials(true);

        // Define allowed origins (replace with your frontend URL)
        config.addAllowedOrigin("http://localhost:3000"); // Replace with your actual frontend URL

        // Allow all headers
        config.addAllowedHeader("*");

        // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
        config.addAllowedMethod("*");

        // Register the CORS configuration for all paths
        source.registerCorsConfiguration("/**", config);

        // Return a new CorsFilter with the configured source
        return new CorsFilter(source);
    }
}
