//8Ball

let QInEl = document.getElementById("qInput");
let ball8El = document.getElementById("ball8") ;
let AnsOutEl = document.getElementById("answerOut");

//Gobal Vals
let Answ1 = "Without a Doubt.";
let Answ2 = "As I see it, yes.";
let Answ3 = "Concentrate and ask again.";
let Answ4 = "Don't count on it.";
let Answ5 = "Outlook not so good.";

//Get Input // Specific inputs will be in if statement

ball8El.addEventListener("click", Mystics)

function Mystics(){
    
    let inpQ = QInEl.value;    

    if(inpQ === ""){
        AnsOutEl.innerHTML = "Please ask a Y/N question"
    }else if(inpQ === "Does a magic 8 ball actually work?"){
        AnsOutEl.innerHTML = "How dare you doubt me!"
    }else if(inpQ === "Is JavaScript awesome?"){
        AnsOutEl.innerHTML = "Of Course!"
    }else if(inpQ === "How do you work?"){
        AnsOutEl.innerHTML = "A Magic 8 ball never reveals his secrets"
    }else{
// Randomizer
        randNum = Math.random()
        console.log(randNum)

        if(randNum < 0.2){
            AnsOutEl.innerHTML = Answ1

        }else if(randNum < 0.4){
            AnsOutEl.innerHTML = Answ2
            
        }else if(randNum < 0.6){
            AnsOutEl.innerHTML = Answ3
    
        }else if(randNum < 0.8){
            AnsOutEl.innerHTML = Answ4
            
        }else{
            AnsOutEl.innerHTML = Answ5

        }


    }

};
