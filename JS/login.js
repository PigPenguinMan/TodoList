// 입력폼에 작성한 이름 가져오기 - form의 submit을 이벤트를 사용하기위해 
const loginForm = document.querySelector("#login_Form")
// name 값을 가져오기 위한 input 
const loginInput = document.querySelector("#login_Form #name");
// name 값을 가질 h1
const title = document.querySelector("#title");

// eventListener 연결 
// formdml submit을 사용할 경우 click이벤트가 아니라 form의 submit 이벤트로 연결해줘야 한다 

loginForm.addEventListener("submit",onLoginSubmit);

function onLoginSubmit(e){
    e.preventDefault(); // 새로고침 취소
    
    // loginInput의 value값을 가져옴
    const name = loginInput.value

    // if 문을 사용해서 , name값이 없을때 , 아래 실행되지않게
    // 함수에서 return을 사용하면 함수 종료 
    if (loginInput.value == ''){
        alert("닉네임을 입력해주세요")
        return ;
    }

    // value값을 title에 넣어줌
    title.innerHTML = name+"님 반갑습니다"; 
    // login-Form  hidden 클래스 추가 
    loginForm.classList.add("hidden");
    // todo-Form hidden 클래스 제거
    document.querySelector("#todo_Form").classList.remove("hidden")
}