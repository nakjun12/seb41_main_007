package com.bzzzzz.farm.domain.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
@Validated
public class QuestionPostDto {
    @Positive
    private Long memberId;
    private String questionTitle;
    private String questionContent;
}