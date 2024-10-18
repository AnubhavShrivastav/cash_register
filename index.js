let billAmount = document.getElementById('bill-amount');
let cashGiven = document.querySelector('#Cash-given');
let checkButton = document.querySelector('#check').addEventListener('click',clickHandler);
let message = document.querySelector('#errormessage');
let noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [500,100,50,20,10,5,1]

function clickHandler (){
    hideMessage();

    if(billAmount.value > 0){
       if(cashGiven.value >= billAmount.value){
       const amountToBeReturned = cashGiven.value - billAmount.value;
       calculateChange(amountToBeReturned)
       }else{
        showMessage("Do you wanna wash plates?")
       }
    
    }else{
        showMessage("Invalid bill amount")
    }
}

function calculateChange(amountToBeReturned){
    for(let i = 0; i < availableNotes.length; i++){
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
      amountToBeReturned =   amountToBeReturned % availableNotes[i];
      noOfNotes[i].innerText = numberOfNotes;

    }

}

function hideMessage(){
    message.style.display = "none";
}


function showMessage(msg){
 message.style.display = "block";
 message.innerText = msg;

}



