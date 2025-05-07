package com.FindIt.modals;

import java.math.BigDecimal;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="product")
@Schema(description = "Product entity representing an item in the e-commerce catalog")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(description = "Unique identifier of the product", example = "123e4567-e89b-12d3-a456-426614174000")
    private UUID id;

    @Column(nullable = false)
    @Schema(description = "Name of the product", example = "Wireless Bluetooth Headphones", required = true)
    private String name;

    @Column(length = 2000)
    @Schema(description = "Detailed description of the product", example = "Noise-cancelling over-ear headphones with 30hr battery")
    private String description;

    @Schema(description = "Price of the product in USD", example = "199.99")
    private BigDecimal price;

    @Schema(description = "Brand name of the product", example = "SoundMaster")
    private String brand;

    @Enumerated(EnumType.STRING)
    @Schema(description = "Category of the product", example = "ELECTRONICS")
    private Category category;

    @Schema(description = "URL to the product image", example = "https://example.com/images/headphones.jpg")
    private String imageUrl;
}
