//Document Object Model

// 1. .getElemementById

// const heading = document.getElementById('heading');
// console.log(heading)


// 2. .getElementByTagName
// const heading = document.getElementsByTagName('h1');
// console.log(heading[0])
// console.log(heading)


// 3. getElementsByClassName

// const heading = document.getElementsByClassName('heading');
// console.log(heading);

// 4. querySelector

// const heading = document.querySelector('.heading');
// console.log(heading);

// 5. querySelectorAll

// const heading = document.querySelectorAll('.heading');
// console.log(heading);

//Traverse DOM

// 1. parentNode

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

//2. childNodes

// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

//3. nextElementSibling

// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);


// 4. previousElementSiblings

// const subHeading = document.querySelector('h3')
// console.log(subHeading.previousElementSibling);


// Manipulation

// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Web dev is Awesome'; //changing h1
// heading.style.color = "blue";
// heading.style.fontSize = '20px';
// heading.classList.add('title');
// heading.classList.remove('title');

// Create.elements

 
// const heading = document.createElement('h1');
// heading.innerHTML = 'JavaScript is Awesome!';
// heading.classList.add('title');
// const parent = document.querySelector(".parent");
// parent.appendChild(heading);


// const subHeading = document.createElement('h3');
// subHeading.innerHTML = "Web dev is Awesome";
// heading.insertAdjacentElement('afterend', subHeading);

// console.log(heading)


// Dom Events

// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', function(){
//     console.log('button clicked');

// });


// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', function(event){
//     heading.style.color = "red";
//     heading.style.fontSize = '30px'
//     console.log('button clicked', event);

// });



// Project

const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click',function(){
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src = './bulb-on.jpg';
        bulbSwitch.innerHTML = "Turn off";
    }else{
        bulb.src = './bulb-off.jpg';
        bulbSwitch.innerHTML = "Turn on";

    }
});
    
