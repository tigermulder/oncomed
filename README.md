// 온코메드 기술과제 

1. 현재 상영 중인 영화 정보 리스트

stack : javascript, react, react-query

프로젝트 구조
src/
├── components/
│   ├── Filters.jsx // 한영전환, 오름차순 컴포넌트
│   ├── MovieList.jsx  // 데이더페칭후 영화리스트 컴포넌트
│   ├── Pagination.jsx // 이전 다음 컴포넌트
│   └── translations.js // 한영전환객체
├── App.js
├── api.js // 함수정리
└── index.js

확인url : https://tigermulder.github.io/oncomed/

구현 조건:

상위차순, 하위차순 정렬 기능과 언어 선택 기능을 제공해야 합니다.
Pagination 기능을 구현해야 합니다.
각각의 영화에 다음 정보를 표시해야 합니다:
포스터 (Poster)
제목 (Title)
설명 (Description)
장르 (Genres)
평점 (Vote Average, 별모양으로 표시)