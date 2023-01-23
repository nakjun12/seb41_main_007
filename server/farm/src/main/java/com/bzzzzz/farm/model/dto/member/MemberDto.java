package com.bzzzzz.farm.model.dto.member;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private String password;

        private String name;

        private int age;

        @Email
        private String email;

        private String address;

        private String gender;

        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
        private String phone;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Patch{
        private Long memberId;
        private String password;
        private String name;
        private int age;

        @Email
        private String email;

        private String address;

        private String gender;

        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
        private String phone;

        public void setMemberId(long memberId){
            this.memberId = memberId;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private Long memberId;
        private String name;
        private int age;
        private String email;
        private String address;
        private String gender;
        private String phone;
    }
}
