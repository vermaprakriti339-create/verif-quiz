let wel=document.getElementById("welcome");
let quiz=document.getElementById("quiz");
let srtbtn=document.getElementById("quizs");
let ques=document.getElementById("question-count");
let que=document.getElementById("your-question");
let opt=document.getElementById("options");
let res=document.getElementById("result");
let nextbtn=document.getElementById("next-btn");
let progressbar=document.querySelector(".progress-bar");
let resrtbtn=document.getElementById("resart-btn");
let finalreslt=document.getElementById("final-result");
let finalscore=document.getElementById("final-score");
let finalpercantage=document.getElementById("final-percentage");
let playagain=document.getElementById("play-again");

  

 let currentquestion=0;
 let score=0;
let question=[{
        question:"Which language runs in a browser?",
        option:["java","js","c++","python"],
        answer:"js"

    },{
        question:"Which keyword declares a constant in js?",
        option:["var","let","const","static"],
        answer:"const"
    },{
        question:"What is full Form of js",
        option:["java script","java switch" ,"java scope" ,"java sprit"],
        answer:"java script"
    }];

  
    function showQuestion(){
         nextbtn.disabled=true;
        opt.innerHTML="";
        res.textContent="";
        let currentq=question[currentquestion];
        que.textContent=currentq.question
       ques.textContent=`Question${currentquestion+1} of ${question.length}`;
       progressbar.style.width= `${((currentquestion + 1) / question.length) * 100}%`;
       currentq.option.forEach((item)=>{
        let btn=document.createElement("button");
        btn.textContent=item;
        btn.classList.add("option-btn");
        btn.addEventListener("click" ,()=>{
            clearInterval(timerInterval);
           opt.querySelectorAll('button').forEach((btn)=>{
             btn.disabled=true;
             
              
           });
           
        //    btn.classList.add("corect");
            if(item===currentq.answer){
            score++;
            // console.log("correct answer!");
            res.textContent="corect answer";
             btn.classList.add("correct");
           } else{
            btn.classList.add("wrong");
            // console.log("wrong answer!");
            res.textContent=`Wrong answer! correct answer  ${currentq.answer}`
           }
           opt.querySelectorAll("button").forEach((op)=>{
            if(op.textContent===currentq.answer){
                op.classList.add("correct");
            }

           })
           nextbtn.disabled=false;

         
        })
        opt.appendChild(btn);

       });
    }

    let timeLeft = 30;
let timerInterval;
let timer = document.getElementById("timer");
    function setTimmer(){
        timeLeft=30;
        timer.textContent=`⏱ 00:${String(timeLeft).padStart(2, "0")}`;
        clearInterval(timerInterval);
        timerInterval=setInterval(() => {
            
      
            timeLeft--;
             timer.textContent = `⏱ 00:${String(timeLeft).padStart(2, "0")}`;
             if(timeLeft<=0){
                clearInterval(timerInterval);
               opt.querySelectorAll("button").forEach((btn)=>{
                btn.disabled=true;
               })
               nextbtn.disabled=false;
               res.textContent="Time is up!";
             }
            //  nextbtn.disabled=true;
        },1000)
    }

    nextbtn.addEventListener("click" ,()=>{
        currentquestion++;
        if(currentquestion<question.length){
            showQuestion();
            setTimmer();
        }else{
            clearInterval(timerInterval);
            quiz.querySelector(".question-area").classList.add("hide");
            opt.classList.add("hide");
            res.classList.add("hide");
            nextbtn.classList.add("hide");
            resrtbtn.style.display="none";
            finalreslt.classList.remove("hide");
            finalscore.textContent=`Your Score: ${score}/${question.length}`;
            let percentage=(score/question.length)*100;
            finalpercantage.textContent=`Percantage: ${percentage.toFixed(2)}%`;

            // que.textContent="Quiz Completed!";
            // ques.textContent=` your score ${score}/ ${question.length}`;
            opt.innerHTML="";
            nextbtn.disabled=true;
            nextbtn.style.display = "none";
            resrtbtn.style.display="block";
            timer.style.display="none";

        }

    })

    resrtbtn.addEventListener("click" ,()=>{
        clearInterval(timerInterval);
        currentquestion=0;
        score=0;
        timeLeft=30;
        nextbtn.style.display="block";
        nextbtn.disabled=true;
        wel.classList.remove("hide");
        quiz.classList.remove("show");
        // showQuestion();
        // setTimmer();
        resrtbtn.style.display="none";
        finalreslt.classList.add("hide");
        quiz.querySelector(".question-area").classList.remove("hide");
opt.classList.remove("hide");
res.classList.remove("hide");
nextbtn.classList.remove("hide");
timer.style.display="none";

    
   

    })

    playagain.addEventListener("click" ,()=>{
        clearInterval(timerInterval);
        currentquestion=0;
        score=0;
        timeLeft=30;
        nextbtn.style.display="block";
        nextbtn.disabled=true;
        // quiz.classList.remove("show");
        showQuestion();
        setTimmer();
        resrtbtn.style.display="none";
        finalreslt.classList.add("hide");
        quiz.querySelector(".question-area").classList.remove("hide");
opt.classList.remove("hide");
res.classList.remove("hide");
nextbtn.classList.remove("hide");
timer.style.display = "block";

    })

srtbtn.addEventListener("click" ,()=>{
    // console.log("clicked button")
    wel.classList.add("hide");
    quiz.classList.add("show");
    showQuestion();
    setTimmer();
    timer.style.display="block";
  
    
})