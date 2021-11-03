var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ysb.png') {
      myImage.setAttribute ('src','images/J&D1.jpg');
    }
    else if(mySrc === 'images/J&D1.jpg') {
      myImage.setAttribute ('src','images/J&D2.jpg');
    }
    else if (mySrc === 'images/J&D2.jpg') {
        myImage.setAttribute('src', 'images/J&D3.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/ysb.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi ' + storedName;
}
  
myButton.onclick = function() {
    setUserName();
}
  