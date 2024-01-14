
# **프로젝트 소개**

- 프로젝트 wiki 바로가기 : https://github.com/codestates-seb/seb41_main_007/wiki
## **👨‍🌾 LOGO**
![Screenshot from 2023-02-13 17-39-58](https://user-images.githubusercontent.com/93567754/218410220-0b14790a-5f77-4f9f-934d-b33a97df028c.png)
## **✨Feature✨**
### 리스트 & 배너
<details>
    <summary> 무한스크롤 & 스켈레톤</summary>
        
        •  상품 리스트 무한 스크롤 구현
        
        •  모든 상품 스켈레톤 적용
</details>
<details>        
    <summary>페이지네이션</summary>
        
        •  상품 리스트를 페이지로 나누어  특정 페이지로 이동할 수 있음
</details>        
<details>        
    <summary> 검색 및 상품분류</summary>
        
        •  상품 검색 기능 구현
        
        •  nav바를 통한 상품 분류 페이지로 이동
        
        •  검색어를 입력하지 않은 경우 상품 추천
</details>        
<details>
    <summary>캐러셀</summary>
        
        •  react-material 라이브러리를 활용한 메인 캐러셀 구현
        
        •  react-slick 라이브러리를 활용한 상품 캐러셀 구현
</details>        
<details>        
    <summary> 리뷰(평점, 상품평, 이미지)</summary>
        
        •  리뷰 평점을 종합하여 상품 평점 반영 
        
        •  이미지 등록
</details>     

### 전역 상태 관리 및 환경 변수 관리 
<details>
    <summary> 상태 관리 라이브러리 (Redux Toolkit)</summary>
        
        •  장바구니 관련 내용 관리
        
        •  장바구니 수량 확인
</details>        
<details>        
    <summary> 상태 관리 라이브러리 (React Query)</summary>
        
        •  서버 데이터 관리 및 업데이트
</details>        
<details>        
    <summary> Local Storage 활용</summary>
        
        •  새로고침 시 데이터를 받아옴
        
        •  JWT 토큰 관리
</details>    
    
### 반응형 웹 
<details>
    <summary> 메인</summary>
        
        •  캐러셀, 신상품, 베스트상품, 푸터 반응형 웹 구현 
</details>        
<details>        
    <summary> 검색페이지</summary>
        
        •  nav바, 상품 목록 반응형 웹 구현
</details>        
        
### 결제 기능 
<details>
    <summary> 상품 결제 (KakaoPay)</summary>
        
        •  카카오페이 결제 가능(테스트 구현)
</details>
        
### 로그인 기능 
<details>
    <summary> 소셜 로그인 (OAuth2.0)</summary> 
        
        •  OAuth2.0 소셜 회원가입 및 로그인 (구글 연동)
        
        •  로그인 여부에 따라 진입 가능 페이지 결정
</details>
        
###  알림 
<details>
    <summary> 토스트 방식(react-toastify) 알림</summary>
        
        •  장바구니에 상품 담았을 때 토스트로 알림
        
        •  회원정보 수정, 배송지 저장 시 토스트로 알림
</details>        
<details>
    <summary> 모달(material) 방식 알림</summary>
        
        •  필수 체크박스 모달창으로 알림
        
        •  회원 탈퇴, 주문조회 모달창으로 알림
</details>     

### 어드민 기능 
    - 상품 글 작성(유튜브, 그림 업로드, 옵션 추가, 조건부 작성)
    - 카테고리 생성 및 삭제
    - 상품 삭제 및 캐시, 로컬스토리지 비우기
    
### 정보 관리 기능 
    - 장바구니 수정 및 삭제
    - 주소록 수정 및 삭제(우편번호 라이브러리 사용)
    - 리뷰 수정 및 삭제
    - 회원 정보 수정 및 탈퇴
    
### 공통 컴포넌트화 
    - 모달
    - 스켈레톤 디자인
    - 캐러셀
    - 내 정보관리 수정 Form
    - 아코디언
    - 상품 목록
    
## 📷 Page GIF
<details>
<summary> 회원 가입 및 로그인</summary>

![리뷰기능](https://github.com/Ksiyeong/FarmAndPeople-gif/blob/main/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EB%B0%8F%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif?raw=true)
</details>
<details>
<summary>메인페이지</summary>

![메인페이지](https://github.com/Ksiyeong/FarmAndPeople-gif/blob/main/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.gif?raw=true)
</details>
<details>
<summary>상품검색</summary>

![상품검색](https://github.com/Ksiyeong/FarmAndPeople-gif/blob/main/%EC%83%81%ED%92%88%EA%B2%80%EC%83%89.gif?raw=true)
</details>
<details>
<summary>특정물품 페이지</summary>

![특정물품페이지](https://github.com/Ksiyeong/FarmAndPeople-gif/blob/main/%ED%8A%B9%EC%A0%95%EB%AC%BC%ED%92%88%ED%8E%98%EC%9D%B4%EC%A7%80.gif?raw=true)
</details>
<details>
<summary>장바구니 페이지</summary>

![장바구니페이지](https://github.com/Ksiyeong/FarmAndPeople-gif/blob/main/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88%ED%8E%98%EC%9D%B4%EC%A7%80.gif?raw=true)
</details>
<details>
<summary>결제 페이지</summary>

![결제페이지](https://user-images.githubusercontent.com/107738517/215788133-63edb67b-0343-4e7d-81ce-e7c7513f2cbd.gif)

</details>
<details>
<summary>마이페이지</summary>

![마이페이지](https://github.com/Ksiyeong/FarmAndPeople-gif/blob/main/%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.gif?raw=true)
</details>

## **🛠️ 기술 스택**

### 프론트엔드

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=React%20Query&logoColor=white"> <img src="https://img.shields.io/badge/Styled Component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">

### 백엔드
<img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/Spring Data Jpa-6DB33F?style=for-the-badge"> <img src="https://img.shields.io/badge/Query%20Dsl-59666C?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/JSON%20Web%20Tokens-000000?style=for-the-badge&logo=JSON%20Web%20Tokens&logoColor=white"> <img src="https://img.shields.io/badge/OAuth2.0-000000?style=for-the-badge&logo=&logoColor=white">

### CI/CD
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"> <img src="https://img.shields.io/badge/AWS%20Amplifyt-FF9900?style=for-the-badge&logo=AWS%20Amplify&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white"> <img src="https://img.shields.io/badge/linode-00A95C?style=for-the-badge&logo=linode&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">

