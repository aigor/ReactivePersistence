package org.coinen.reactive.persistence;

import lombok.RequiredArgsConstructor;

// TODO: Use it somehow
@RequiredArgsConstructor
public enum Studies {
    UKRAINE_WEATHR_4_SYNC("uk-sync"),
    UKRAINE_WEATHR_27_ASYNC("uk-async"),
    WORLD_GDP("world-gdp"),
    WORLD_POP("world-pop"),
    EUROPE_POP("europe-pop"),
    US_SALES_JDBC("usa-districts-jdbc"),
    US_DISTRICS_R2DBC("usa-districts-r2dbc"),
    US_DISTRICS_BLOCKING("usa-districts-all-blocking");

    private final String name;
}
