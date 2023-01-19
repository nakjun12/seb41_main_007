package com.bzzzzz.farm.domain.review.entity.reviewanswer;

import com.bzzzzz.farm.global.audit.Auditable;
import com.bzzzzz.farm.domain.member.entity.Member;
import com.bzzzzz.farm.domain.review.entity.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ReviewAnswer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewAnswerId;

    @Column(nullable = false)
    private String reviewAnswerTitle;

    @Lob
    @Column(nullable = false)
    private String reviewAnswerContent;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "memberId", nullable = false)
    private Member member;

    @OneToOne
    @JoinColumn(name = "reviewId")
    private Review review;

    public ReviewAnswer(String reviewAnswerTitle,String reviewAnswerContent) {
        this.reviewAnswerTitle = reviewAnswerTitle;
        this.reviewAnswerContent = reviewAnswerContent;
    }
}