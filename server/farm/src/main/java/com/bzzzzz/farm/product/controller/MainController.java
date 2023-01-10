package com.bzzzzz.farm.product.controller;

import com.bzzzzz.farm.product.dto.ProductSimpleResponseDto;
import com.bzzzzz.farm.product.mapper.ProductMapper;
import com.bzzzzz.farm.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Validated
@RequiredArgsConstructor
public class MainController {
    private final ProductService productService;
    private final ProductMapper productMapper;

    @GetMapping
    public ResponseEntity getMain() {
        /**
         * 좋아요 높은 순 10개
         * 신상품 7개
         * 판매량 순 20개
         * Todo: 최근 리뷰 ?? 4개
         * */

        Map<String, List<ProductSimpleResponseDto>> response = new HashMap<>();

        List<ProductSimpleResponseDto> orderByLikeCount = productMapper.productsToProductSimpleResponseDtos(productService.findProducts(0, 10, "likeCount", "descending", "").getContent());
        List<ProductSimpleResponseDto> orderByProductId = productMapper.productsToProductSimpleResponseDtos(productService.findProducts(0, 7, "productId", "descending", "").getContent());
        List<ProductSimpleResponseDto> orderBySoldCount = productMapper.productsToProductSimpleResponseDtos(productService.findProducts(0, 20, "soldCount", "descending", "").getContent());

        response.put("orderByLikeCount", orderByLikeCount);
        response.put("orderByProductId", orderByProductId);
        response.put("orderBySoldCount", orderBySoldCount);

        return new ResponseEntity(response, HttpStatus.OK);
    }
}