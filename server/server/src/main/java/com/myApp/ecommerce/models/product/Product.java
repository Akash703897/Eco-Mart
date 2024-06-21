package com.myApp.ecommerce.models.product;

import java.math.BigDecimal;

import com.myApp.ecommerce.models.category.Category;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product")
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "name", nullable = false, length = 100,unique = true)
    private String name;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "description", nullable = false,columnDefinition = "TEXT")
    private String description;

    @Column(name = "weight", nullable = false,columnDefinition = "TEXT")
    private String weight;
    @Enumerated
    @Column(name = "status", nullable = false)
    private ProductStatus status;
    @Lob
    @Column(name = "image",columnDefinition = "LONGTEXT")
    private String image;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(name = "quantity", nullable = false)
    private Long quantity;

}