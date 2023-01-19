package com.bzzzzz.farm.domain.product.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ProductOptionResponseDto {
    private long productOptionId;
    private String productOptionName;
    private int price;
    private int stock;
}