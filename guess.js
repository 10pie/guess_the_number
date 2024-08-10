const randnum=Math.floor(Math.random()*100)+1;
const guessed=document.getElementById("guess");
const submit=document.getElementById("sbmt");
const result=document.getElementById("result");

let chances=10;
function checkguess(){
 const guessednum=Number(guessed.value);
 chances--;
        if(guessednum==randnum){
            result.textContent="Result:-Congratulations! You Guessed The Number Correctly!";
            submit.disabled=true;
            return;
        }
        else if(guessednum<randnum){
            result.textContent="Result:- Your Guessed Number Is Lower Than The Original Number\n";
        }
        else{
            result.textContent="Result:- Your Guessed Number Is Higher Than The Original Number\n";
        }
        if(chances==0){
            submit.disabled=true;
            gameover();
        }
}

    submit.addEventListener("click",checkguess);

function gameover(){
    result.textContent="Result:- GAME OVER!!";
    return;
}