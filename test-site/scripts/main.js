
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwn, but chocolate is my favorite...');
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result
}
multiply(13,809);

document.querySelector('html').onclick = function () {
    alert('Ouch! Stop poking me!')
};

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/agri-business.jpg') {
        myImage.setAttribute('src','images/firefox2.jpg');
    } else {myImage.setAttribute('src','images/agri-business.jpg');
        
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Agri-business is cool, ' +  myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Agri-business is cool, ' +  storedName;
}

myButton.onclick = function () {
    setUserName();
}