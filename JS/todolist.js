// todo 입력 공간 -
const todoInput = $("#todo_Form #todo");

// button : click 이벤트로 실행
// button에 id가 없기떄문에 , 노드로 접근하거나.
// querySelector를 이용해 선택자를 이용하여 접근해서 객체를 가져온다 
const todoButton = todoInput.next();

// todo board 객체 가져오기
const todoBoard = $("#todo_board");

// 버튼에 이벤트 리스너 : button 이므로 click이벤트 
todoButton.on("click",addTodo);

function addTodo(){
    // todoInput - value 값 들고오기 
    const text = todoInput.val();

    // 새로 요소 생성 
    // li , input type= "checkbox" ,textnode , button
    const li = $('<li>')
    const checkbox = $('<input>').attr('type','checkbox');
    const textbox = $('<span>').html(text);
    const button = $("<button>");
    button.html("X");
    // li요소 - input ,textnode , button 추가
    li.append(checkbox);
    li.append(textbox);
    li.append(button);
    // todoBoard에 li추가
    todoBoard.append(li);

    // todoInput.value 값을 빈값으로 만들기 
    todoInput.val("");

    // 체크 박스를 눌렀을때 이벤트 리스너 실행 :click
    checkbox.on("click",todoCheck)

   // X버튼을 눌러 삭제
    button.on("click",removeBtn)
}

 
 function removeBtn(e){
    const li = e.target.parent();
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