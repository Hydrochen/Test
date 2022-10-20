let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cubes.png'){
        myImage.setAttribute('src', 'images/cubes2.png');
    } else {
        myImage.setAttribute('src', 'images/cubes.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {   //if myName has no value...
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to Data, ' + myName + '!';
    }
  }
  
  
   if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Data, ' + storedName + '!';
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  