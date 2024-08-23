const textinput = document.getElementById("text-input");
const buttonchecker = document.getElementById("check-btn");
const resultVal = document.getElementById("result");

buttonchecker.addEventListener("click", () => { const replaced = textinput.value.toLowerCase().replace(/[^a-z0-9]/g,"")
    if (textinput.value ==="") {
        alert("Please input a value");
    }

    else if (textinput.value.length === 1) {
        resultVal.innerText = `${textinput.value} is a palindrome! Great job king!`;
    }

    else if (replaced===[...replaced].reverse().join("")){
        resultVal.innerText = `${textinput.value} is a palindrome! Nice one!`
    }

    else{
        resultVal.innerText = `${textinput.value} is not a palindrome. You can do better (-_-) !`
    }
    

});
