let display = document.getElementById('display');

const appendCharacter = (num) => {
    // console.log(num);
    // console.log(display.innerText);
    // display.innerText = num;
    if (display.innerText === '0') {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}


function operation() {  
    try {
        res = eval(display.innerText);
        display.innerText = res;
        console.log(res); 
    } catch (error) {
        display.innerText = "Error";
    }
   
}

function clearChar(){
    display.innerText = 0;
}