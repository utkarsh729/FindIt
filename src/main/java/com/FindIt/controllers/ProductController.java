package com.FindIt.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FindIt.modals.Product;
import com.FindIt.services.ProductService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name = "Product", description = "Product management APIs")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Operation(
        summary = "Get all products",
        description = "Retrieves a list of all products, optionally filtered by search term"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully retrieved products",
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(implementation = Product.class)
            )
        ),
        @ApiResponse(
            responseCode = "500",
            description = "Internal server error"
        )
    })
    @GetMapping
    public List<Product> findAllProduct(
        @Parameter(description = "Search term for filtering products by name or brand")
        @RequestParam(required = false) String search
    ) {
        return productService.searchProducts(search);
    }

    @Operation(
        summary = "Get product by ID",
        description = "Retrieves a specific product by its UUID"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully retrieved product",
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(implementation = Product.class)
            )
        ),
        @ApiResponse(
            responseCode = "404",
            description = "Product not found"
        ),
        @ApiResponse(
            responseCode = "500",
            description = "Internal server error"
        )
    })
    @GetMapping("/{id}")
    public Product findProductById(
        @Parameter(description = "UUID of the product to retrieve")
        @PathVariable UUID id
    ) {
        return productService.getProductById(id);
    }
}
