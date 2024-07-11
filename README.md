### 샘플 코드

이미지 https://picsum.photos/100/

퍼블릭이미지 `<img src={process.env.PUBLIC_URL + "/images/logo_1x.png"} alt="Logo" />`

### 컴포넌트와 style 관리

- 컴포넌트와 style을 함께 보관한다.
- style의 파일명은 컴포넌트와 동일하게 한다.

1. 폴더명은 페이지를 기준으로 카멜케이스로 표기한다.
1. 페이지 안에 사용되는 컴포넌트도 함께 보관한다.
1. 다른 곳에서 사용되는 컴포넌트는 components 폴더에 따로 보관한다.

---

### 용어 정리

0. access

- 로그인 페이지

- 회원가입 유형 선택 페이지
- 사용자 회원가입 페이지
- 사업자 회원가입 페이지

1. 사용자 user

- 홈 페이지
- 음식점리스트 페이지
- 음식점상세 페이지
- 결제 페이지
- 주문내역 확인 페이지

- 마이페이지
  - 홈 페이지 MyPage
  - 주문내역 Order list
  - 리뷰관리 Review list
  - 주소설정 Addr list
  - 결제수단 Card list
  - 문의내역 Inquiry list
  - 고객센터 Help Service

2. 사업자 owner

- 홈 페이지 OwnerPage
- 주문관리 페이지
- 주문내역 페이지
- 메뉴관리 페이지
- 리뷰관리 페이지
- 매장설정 페이지
- 통계 페이지

3. 관리자 admin

- 홈 페이지 AdminPage
- 카테고리 관리 페이지
- 신고관리 페이지
