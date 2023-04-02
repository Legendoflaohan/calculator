let text = [];

//sum up two numbers
function sum(a, b) {

    return a + b;

}

//add a num that been clicked in array(text) ;
function getText(e) {

    let input = e.target.innerText;

    text.push(input);
}

function executeSum(indexOfAdd) {
    //get two arguments for sum
    let a = +text.slice(0, [indexOfAdd]).join('');
    console.log(a)
    let b = +text.slice([indexOfAdd], (text.length)).join('');
    console.log(b)
    //execute sum
    let result = sum(a, b);

    document.getElementById('mainScreen').innerText = `${result}`;
}

function execute(e) {
    getText(e);
    //locate 'enter'
    let indexOfEnter = text.indexOf('enter');
    //locate '+'
    let indexOfAdd = text.indexOf('+');
    console.log(indexOfAdd)
    //execute when 'enter' is clicked
    if (indexOfEnter != -1) {
        //remove 'enter'
        text.pop();
        //execute if there is a '+'
        if (indexOfAdd != -1) {
            executeSum(indexOfAdd);
        }
    }
}

function interFace(e) {

    if (e.target.innerText != 'enter') {
        document.getElementById('upperScreen').innerText += e.target.innerText;
    }
}

//return text from element that been clicked
addEventListener('click', interFace);
addEventListener('click', execute);
