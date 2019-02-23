package org.coinen.reactive.persistence.db;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class WorldPopDensityDto {
    @Id
    private String id;
    private double density;
}
