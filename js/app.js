function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-input').value = pin;
}

document.getElementById('calc-key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers-display');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-input').value;
    const typedNumbers = document.getElementById('typed-numbers-display').value;
    const successMessage  = document.getElementById('matched');
    const failMessage = document.getElementById('not-matched');

    if(pin == typedNumbers){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else{
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}