const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const que_text = document.querySelector(".que_text");
const next_btn = document.querySelector("footer .next_btn");
const submit_btn = document.querySelector("footer .submit_que");
const scoreText = result_box.querySelector(".score_text");
const restart_quiz = result_box.querySelector(".buttons .restart");

let que_count = 0;
let userScore = 0;

window.onload = ()=>{
	quiz_box.classList.add("activeQuiz");
	submit_btn.classList.add("show");
    showQuetions(0);
}

restart_quiz.onclick = ()=>{
    window.location.reload();
}

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++;  
        showQuetions(que_count);  
    }
	else{
        showResult();
    }
}

submit_btn.onclick = ()=>{
    if(que_count == 0){ 
        alert("Please choose one of the option to Continue !!!");
		submit_btn.classList.add("show");
    }
}

function showQuetions(index){
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;
	
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", "Correct");
    }else{
        answer.classList.add("incorrect");
		answer.insertAdjacentHTML("beforeend", "Incorrect");
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
	submit_btn.classList.remove("show");
    next_btn.classList.add("show");
}

function showResult(){
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult");
    let scoreTag = '<span>Your Score = '+ userScore +' / 10</span>';
    scoreText.innerHTML = scoreTag;
    }
