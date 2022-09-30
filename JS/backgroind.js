// 배경 이미지 이름을 배열에 저장 
const images=["0.jpg","1.jpg","2.jpg","3.jpg"];

// 랜덤 함수의 특징 - 0~1사이의 실수 > 0~원하는 수 정수로 바꿔서 사용
// 배열 > 요소를 넣어주면 인덱스 값으로 접근가능 
const randomNum = Math.floor(Math.random()*images.length);
const chooseImg = images[randomNum];

// 바디 객체를 가져옴
const bodyBackground = document.querySelector("body");

// 바디에 이미지 추가 
// css에서 이미지 추가하는 방식과 동일
bodyBackground.style.background = `url(./img/${chooseImg})`;
