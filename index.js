let billAmount = document.getElementById('bill-amount');
let cashGiven = document.querySelector('#Cash-given');
let checkButton = document.querySelector('#check').addEventListener('click',clickHandler);
let message = document.querySelector('#errormessage');
let noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [500,100,50,20,10,5,1]

function clickHandler (){
    hideMessage();

    /* suppose 
     billAmount  = 1225
     caseGiven = 2000
    */

    if(billAmount.value > 0){ // 1225 > 0 = true
       if(cashGiven.value >= billAmount.value){ // 2000 >= 1225 = true
       const amountToBeReturned = cashGiven.value - billAmount.value; // 2000 - 1225 = 775 
       calculateChange(amountToBeReturned) // call a function  ex - calculateChange(775)
       }else{
        showMessage("Do you wanna wash plates?")
       }
    
    }else{
        showMessage("Invalid bill amount")
    }
}

function calculateChange(amountToBeReturned){ //775
    // go over all the available notes
    for(let i = 0; i < availableNotes.length; i++){

    // no of notes need for the denomination  
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
      // 775 / 500 = 1.55 || 275 / 100 = 2 || 75 / 50 = 1 || 25 / 20 = 1 || 5 / 10 = 0 || 5 / 5 = 1
      // math trunc convert 1.55 to 1, it remove all number after decimal point.

      // amount left after calculating the number of notes needed
      amountToBeReturned =   amountToBeReturned % availableNotes[i];
      //775 % 500 = 275 || 275 % 100 = 75 || 75 % 50 = 25 || 25 % 20 = 5 ||  5 % 5 = 0
      

      //updating the no of notes in the table for current amount
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



