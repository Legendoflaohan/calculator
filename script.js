let text = [];

//sum up two numbers
function addition(a, b) {

    return a + b;

}

function subtraction(a, b) {

    return a - b;
    
}

//add a num that been clicked in array(text) ;
function getText(e) {

    let input = e.target.innerText;

    text.push(input);
}

function executeOperation(index) {
    //get two arguments for operation
    let a = +text.slice(0, [index]).join('');
    let b = +text.slice([index + 1], (text.length)).join('');
    let result = 0;
    //select operation

    console.log(text[index])
    switch (true) {
        case (text[index] == '+'):
            result = addition(a, b);
            break;
        case (text[index] == '-'):
            console.log(a);
            console.log(b);
            result = subtraction(a, b);
            break;
    }

    document.getElementById('mainScreen').innerText = `${result}`;
}

function execute(e) {
    getText(e);
    //locate 'enter'
    let indexOfEnter = text.indexOf('enter');

    //execute when 'enter' is clicked
    if (indexOfEnter != -1) {
        //remove 'enter'
        text.pop();
        switch (true) {
            case (text.indexOf('+') != -1):
                executeOperation(text.indexOf('+'));
                break;
            case (text.indexOf('-') != -1):
                executeOperation(text.indexOf('-'));
                break;
        }
    }
}

function interFace(e) {

    if (e.target.innerText != 'enter') {

        document.getElementById('upperScreen').innerText += e.target.innerText;
    }
}

function soundEffect(e) {
    switch (e.target.innerText) {
        case '0':
            document.getElementById('soundOne').pause();
            document.getElementById('soundZero').currentTime = 0;
            document.getElementById('soundZero').play();
            break;
        case '1':
            document.getElementById('soundZero').pause();
            document.getElementById('soundOne').currentTime = 0;
            document.getElementById('soundOne').play();
    }

}

//return text from element that been clicked
addEventListener('click', interFace);
addEventListener('click', execute);
addEventListener('click', soundEffect);
