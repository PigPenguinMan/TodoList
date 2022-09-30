// todo 입력 공간 -
const todoInput = document.querySelector("#todo_Form #todo");

// button : click 이벤트로 실행
// button에 id가 없기떄문에 , 노드로 접근하거나.
// querySelector를 이용해 선택자를 이용하여 접근해서 객체를 가져온다 
const todoButton =todoInput.nextElementSibling;

// todo board 객체 가져오기
const todoBoard = document.querySelector("#todo_board");

// 버튼에 이벤트 리스너 : button 이므로 click이벤트 
todoButton.addEventListener("click",addTodo);

function addTodo(){
    // todoInput - value 값 들고오기 
    const text = todoInput.value;

    // 새로 요소 생성 
    // li , input type= "checkbox" ,textnode , button
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const textNode = document.createTextNode(text);
    const button = document.createElement("button")
    button.innerHTML = "X";
    // li요소 - input ,textnode , button 추가
    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);
    // todoBoard에 li추가
    todoBoard.append(li);

    // todoInput.value 값을 빈값으로 만들기 
    todoInput.value = "";

    // 체크 박스를 눌렀을때 이벤트 리스너 실행 :click
    checkbox.addEventListener("click",todoCheck)

   // X버튼을 눌러 삭제
    button.addEventListener("click",removeBtn)
}

 
 function removeBtn(e){
    const li = e.target.parentNode;
    li.remove();
 }
// 체크박스 이벤트 리스너에 들어가는 함수
function todoCheck(e){
    const li = e.target.parentNode ;
    if(e.target.checked){
        li.style.color = "lightgray";
        li.style.textDecorationLine = "line-through";
    
    }else 
        li.style.color = "black";
    }  