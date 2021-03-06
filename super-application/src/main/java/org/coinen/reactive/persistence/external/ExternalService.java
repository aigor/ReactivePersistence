package org.coinen.reactive.persistence.external;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.coinen.reactive.persistence.model.StudyRequestDto;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Instant;

import static java.time.Duration.between;
import static java.time.Instant.now;

@Slf4j
@RequiredArgsConstructor
public class ExternalService {
    private final String externalServiceLocation;
    private final HttpClient httpClient;
    private final WebClient webClient;

    public ExternalStudyDto syncRequest(StudyRequestDto request) throws IOException, InterruptedException {
        Instant start = now();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(externalServiceUri(request))
            .build();

        HttpResponse<String> response = httpClient
            .send(req, HttpResponse.BodyHandlers.ofString());
        log.debug("External HTTP call finished in {}", between(start, now()));
        return ExternalStudyDto.fromString(response.body());
    }

    public Mono<ExternalStudyDto> reactiveRequest(StudyRequestDto request) {
        return Mono.from(
            webClient
                .get()
                .uri(externalServiceUri(request))
                .exchange()
                .flatMap(rsp -> rsp.bodyToMono(String.class)
                    .map(ExternalStudyDto::fromString))
        );
    }


    public Flux<ExternalServiceMetricsDto> serviceStatus() {
        return webClient.get()
            .uri(URI.create(externalServiceLocation + "/status"))
            .accept(MediaType.TEXT_EVENT_STREAM)
            .exchange()
            .flatMapMany(response -> response.bodyToFlux(ExternalServiceMetricsDto.class));
    }

    private URI externalServiceUri(StudyRequestDto request) {
        String url = externalServiceLocation +
            "/service/" +
            request.getStudy() + "/" +
            request.getRegion() +
            (request.getTimout() != null ? "?timeout=" + request.getTimout() : "");
        return URI.create(url);
    }
}
