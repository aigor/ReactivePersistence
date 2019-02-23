package org.coinen.reactive.persistence.r2dbc;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface TradeRepository {

	Mono<Void> saveAll(Flux<Trade> input);

	Mono<Void> save(Trade trade);

	Mono<Void> showRepoAnalytics();
}
