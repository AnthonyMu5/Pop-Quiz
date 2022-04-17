const start_btn = document.querySelector(".start button");
const about_quiz = document.querySelector(".quiz");

start_btn.onclick = ()=>{
    about_quiz.classList.add("activeInfo")
}