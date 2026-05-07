# Stage 1: Build stage
FROM maven:3.9.15-eclipse-temurin-17 AS build
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline -B

COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run stage
FROM eclipse-temurin:21.0.10_7-jre-ubi10-minimal
WORKDIR /app

ARG DESCOPE_PROJECT_ID
ENV DESCOPE_PROJECT_ID=$DESCOPE_PROJECT_ID

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/actuator/health/liveness || exit 1

ENTRYPOINT ["java", "-jar", "app.jar"]
