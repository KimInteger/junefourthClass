// Subject : this 사용 예제
// Object : this가 가리키는 객체 설명
// Verb : this가 가리키는 객체 속성 설명

// this는 함수가 호출될 때 결정되는 특수한 객체로
// 함수를 호출하는 방법에 따라 this가 가리키는 객체가 달라짐

// 아래의 this는 화살표 함수 내부에서 상위 스코프의 this를 가리킴

const THIS_IS_GLOBAL = global; // 전역 객체 그대로 할당

// 화살표 함수
const second = (a,b) => {
  
}