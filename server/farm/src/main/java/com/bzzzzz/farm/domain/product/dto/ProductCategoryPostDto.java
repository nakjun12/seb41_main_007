package com.bzzzzz.farm.domain.product.dto;

import com.bzzzzz.farm.domain.category.entity.Category;
import com.bzzzzz.farm.domain.product.entity.Product;
import lombok.Getter;

@Getter
public class ProductCategoryPostDto {
    private Long productId;
    private Long categoryId;

    // 편의 메서드
    public Product getProduct() {
        Product product = new Product();
        product.setProductId(productId);
        return product;
    }

    public Category getCategory() {
        return new Category(categoryId);
    }
}