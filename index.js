let billAmount = document.getElementById('bill-amount');
let cashGiven = document.querySelector('#Cash-given')
let checkButton = document.querySelector('#check').addEventListener('click',clickHandler)

function clickHandler (){
    let input = billAmount.value;
    console.log(input)
    if(input <= 0){
        console.log("Enter valid number");
    }else{
        console.log("ok")
    }
}



