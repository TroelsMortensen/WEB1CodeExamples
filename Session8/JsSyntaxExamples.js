const condition = true;
const otherCondition = true;
const thirdCondition = true;

if (condition) {
    // block of code to be executed if the condition is true
}


if (condition) {
    // block of code to be executed if the condition is true
} else {
    // something else to be executed if the condition is false
}



if (condition) {
    // block of code to be executed if the condition is true
} else if (otherCondition) {
    // something else to be executed if the condition is false
} else if (thirdCondition) {
    // something else to be executed if the condition is false
} else {
    // something else to be executed if the condition is false
}


for (let myCount = 0; myCount < 10; myCount++) {
    // do something here
}

while (i < 10) {
    console.log("The number is " + i);
    i++;
}

const someArray = [];

for (const i of someArray) {
    console.log(i);
}

let myDate = new Date();

myDate = new Date(1996, 11, 26, 15, 45, 55);
myDate = new Date(1996, 11, 26);

let firstDate = new Date(2010, 0, 1);
let secondDate = new Date(2000, 0, 1);
let dateDifference = firstDate - secondDate;

let dayDifference = dateDifference / (1000 * 60 * 60 * 24);

window.alert("sometext");
alert("hello");

var myTimerVar = setTimeout(
    function () {
        alert("Hello")
    }
    , 1000
);




