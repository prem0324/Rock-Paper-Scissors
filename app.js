const  choices=document.querySelectorAll('.choice')
const msg=document.querySelector("#msg");
let userWinner=0;
let computerWinner=0;
let userTurn=document.querySelector("#userTurm")
let compTurn=document.querySelector("#compTurm")

let Userwin;
const compChoice=document.querySelector("#compChoice");
const userssChoice=document.querySelector("#usersChoice");

function computerChoice(){
    const arr=['rock','paper','scissors'];
    return arr[Math.floor(Math.random()*3)]
}

choices.forEach((val)=>{
    val.addEventListener('click',()=>{
        const userChoice=val.firstElementChild.id;
        let computerChoiceC=computerChoice();
        console.log("user =",userChoice);
        console.log("computer =",computerChoiceC);

        if(userChoice===computerChoiceC){
            Tie(userChoice,computerChoiceC)
        }
        else {
            if(userChoice==="rock"){
                Userwin=computerChoiceC==="paper"?false:true;   
            }
            else if(userChoice==="scissors"){
                //paper rock
                Userwin=computerChoiceC==="paper"?true:false;
            }
            else{
                //scissors rock
                Userwin=computerChoiceC==="scissors"?false:true;
            }
        WinnerFunction(Userwin,userChoice,computerChoiceC)
        }
    })
})

function WinnerFunction(winner,userChoice,computerChoice){
    if(winner){
    userTurn.innerText=++userWinner;
    msg.style.backgroundColor="green"
    msg.style.color="white"
    msg.innerText="You Won!"
    console.log("U =",userChoice,"\n","c =" ,computerChoice);
    userImage(userChoice);
    compImage(computerChoice)
}
else{
    compTurn.innerText=++computerWinner;
    msg.style.backgroundColor="red"
    msg.style.color="white"
    msg.innerText="You Loose!"

    userImage(userChoice);
    compImage(computerChoice)

}
}


function Tie(userChoice,computerChoice){
    msg.style.backgroundColor="black"
    msg.style.color="red"
    msg.innerText="Draw!"
    userImage(userChoice);
    compImage(computerChoice)
}


function compImage(img){
    if(img==="rock"){
        compChoice.setAttribute("src","images/rock.avif")
        }
        else if(img==="paper"){
        compChoice.setAttribute("src","images/paper.jpeg")
    
        }
        else{
        compChoice.setAttribute("src","images/scissors.png")
    
    }    
}
function userImage(userImg){
    if(userImg==="rock"){
        userssChoice.setAttribute("src","images/rock.avif")
        }
        else if(userImg==="paper"){
            userssChoice.setAttribute("src","images/paper.jpeg")
    
        }
        else{
            userssChoice.setAttribute("src","images/scissors.png")
    
    }
}