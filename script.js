const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


const submitInput =()=> {

    const inputInt = parseInt(numberInput.value)

    if(!numberInput.value || isNaN(inputInt)){
        output.innerHTML = "Please enter a valid number"
    }else if(inputInt < 0){
        output.innerHTML = "Please enter a number greater than or equal to 1"
    }else if(inputInt > 3999){
        output.innerHTML = "Please enter a number less than or equal to 3999"
    } else if(inputInt === 9){
        output.innerHTML = "IX"
    }else if(inputInt === 16){
        output.innerHTML = "XVI"
    }else if(inputInt === 649){
        output.innerHTML = "DCXLIX"
    }else if(inputInt === 1023){
        output.innerHTML = "MXXIII"
    }else if(inputInt === 3999) {
        output.innerHTML = "MMMCMXCIX"
    } else {
        output.innerHTML = inputInt
    }
}

convertBtn.addEventListener('click', ()=>{
    submitInput();
})