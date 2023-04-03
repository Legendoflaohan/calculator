let text = [];
let result = 0;
//sum up two numbers
function addition(a, b) {

    return a + b;

}
function subtraction(a, b) {

    return a - b;

}
function multiply(a, b) {

    return a * b;

}
function divide(a, b) {
    return a / b;
}


//add a character that been clicked in array(text) ;
function getText(e) {
    //execute only when click at the correct place
    if (e.target.className == 'unit' ||
        e.target.className == 'zero' ||
        e.target.className == 'add') {
        let input = e.target.innerText;
        text.push(input);
    }
    if (e.target.className == 'ce') {
        text.pop();
    }
    if (e.target.className == 'ac') {
        text.length = 0;
    }
}

function getTextKeyboard(e) {
    //if input is not legal, do nothing
    if (e.key == '/' ||
        e.key == '*' ||
        e.key == '+' ||
        e.key == '-' ||
        e.key == '7' ||
        e.key == '8' ||
        e.key == '9' ||
        e.key == '4' ||
        e.key == '5' ||
        e.key == '6' ||
        e.key == '1' ||
        e.key == '2' ||
        e.key == '3' ||
        e.key == '0' ||
        e.key == '.' ||
        e.key == 'Enter') {
        let input = e.key;
        text.push(input);
    }
    if (e.key == 'Backspace') {
        text.pop();
    }
    if (e.key == 'Escape') {
        text.length = 0;
    }
}

//core operation
function executeOperation(index) {
    //get two arguments for operation
    let a = +text.slice(0, [index]).join('');
    let b = +text.slice([index + 1], (text.length)).join('');
    //select operation
    switch (true) {
        case (text[index] == '+'):
            result = addition(a, b);
            break;
        case (text[index] == '-'):
            result = subtraction(a, b);
            break;
        case (text[index] == '*'):
            result = multiply(a, b);
            break;
        case (text[index] == '/'):
            result = divide(a, b);
            break;
    }

    document.getElementById('mainScreen').innerText = `${result}`;
    //clear the array(text) after one operation
    text.length = 0;
    //now array(text) length is 1, which contains only the result of the previous operation
    text.push(result);
}

//main function
//filter of which operator
function execute(e) {
    getText(e);
    //locate 'enter'
    let indexOfEnter = text.indexOf('Enter');

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
            case (text.indexOf('*') != -1):
                executeOperation(text.indexOf('*'));
                break;
            case (text.indexOf('/') != -1):
                executeOperation(text.indexOf('/'));
                break;
        }
    }
}

function executeKeyboard(e) {
    getTextKeyboard(e);
    //locate 'enter'
    let indexOfEnter = text.indexOf('Enter');

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
            case (text.indexOf('*') != -1):
                executeOperation(text.indexOf('*'));
                break;
            case (text.indexOf('/') != -1):
                executeOperation(text.indexOf('/'));
                break;
        }
    }
}

function interFace(e) {
    //show output only when right place been clicked
    if (e.target.className == 'unit' ||
        e.target.className == 'zero' ||
        e.target.className == 'add') {
        //when after a operation, enter this
        //there's only one element in the array now
        //after press an operator after the previous result, there're two elements in the array
        //so won't enter this 'if' sentence, I'm such a geneious
        if (text[0] == result && text.length == 1) {
            //if the input is an operator, do this
            if (e.target.innerText == '+' ||
                e.target.innerText == '-' ||
                e.target.innerText == '*' ||
                e.target.innerText == '/') {
                document.getElementById('mainScreen').innerText = '';
                document.getElementById('upperScreen').innerText = text[0];
            } else if (e.target.innerText == 'Enter') {
                return;
            } else {
                //if the input is a number character(else of being an operator), do this
                text.length = 0;
                document.getElementById('mainScreen').innerText = '';
                document.getElementById('upperScreen').innerText = '';
            }
        }

        if (e.target.innerText != 'Enter') {

            document.getElementById('upperScreen').innerText += e.target.innerText;
        }
    }
    if (e.target.className == 'ce') {
        //remove the last character of the upperScreen innerText
        document.getElementById('upperScreen').innerText = document.getElementById('upperScreen').innerText.slice(0, -1);
    }
    if (e.target.className == 'ac') {
        text.length = 0;
        document.getElementById('mainScreen').innerText = '';
        document.getElementById('upperScreen').innerText = '';
    }
}

function interFaceKeyboard(e) {
    //if keydown is not legal, show nothing
    if (e.key == '/' ||
        e.key == '*' ||
        e.key == '+' ||
        e.key == '-' ||
        e.key == '7' ||
        e.key == '8' ||
        e.key == '9' ||
        e.key == '4' ||
        e.key == '5' ||
        e.key == '6' ||
        e.key == '1' ||
        e.key == '2' ||
        e.key == '3' ||
        e.key == '0' ||
        e.key == '.' ||
        e.key == 'Enter') {
        if (text[0] == result && text.length == 1) {
            //if the input is an operator, do this
            if (e.key == '+' ||
                e.key == '-' ||
                e.key == '*' ||
                e.key == '/') {
                document.getElementById('mainScreen').innerText = '';
                document.getElementById('upperScreen').innerText = text[0];
            } else if (e.key == 'Enter') {
                return;
            } else {
                //if the input is a number character(else of being an operator), do this
                text.length = 0;
                document.getElementById('mainScreen').innerText = '';
                document.getElementById('upperScreen').innerText = '';
            }
        }

        if (e.key != 'Enter') {

            document.getElementById('upperScreen').innerText += e.key;
        }
    }
    if (e.key == 'Backspace') {
        document.getElementById('upperScreen').innerText = document.getElementById('upperScreen').innerText.slice(0, -1);
    }
    if (e.key == 'Escape') {
        text.length = 0;
        document.getElementById('mainScreen').innerText = '';
        document.getElementById('upperScreen').innerText = '';
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

function soundEffectKeyboard(e) {
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

function backgroundColorChange(e) {
    // click other places do not affect
    if (e.target.className == 'unit' ||
        e.target.className == 'zero' ||
        e.target.className == 'add') {
        e.target.style.backgroundColor = '#9f9488';
    }
}

function backgroundColorChangeBack(e) {
    //JS generate inline style, which takes precedence over style defined in the stylesheet
    //removeProperty() only remove the element attribute, which sets the inline style for the element
    e.target.style.removeProperty('background-color');
}

//return text from element that been clicked
addEventListener('click', interFace);
addEventListener('click', execute);
addEventListener('mousedown', backgroundColorChange);
addEventListener('mouseup', backgroundColorChangeBack);
addEventListener('click', soundEffect);
//keyboard feature
addEventListener('keydown', interFaceKeyboard);
addEventListener('keydown', executeKeyboard);
addEventListener('keydown', soundEffectKeyboard);