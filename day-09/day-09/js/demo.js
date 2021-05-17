'use strict';
let body = document.querySelector('body');
let paragraph = document.createElement('p');
paragraph.className = "highlight";
paragraph.classList.add('important');
paragraph.innerText = "helloooo JS world!";
paragraph.style.fontSize = "2em";

body.appendChild(paragraph);
// use querySelector and css selectors to get the none.css href
// log it
let css  = document.querySelector('[href*="css/none.css"]');
console.log(css);



//select h1 and modify it's font-size
let h1 = document.querySelector('h1');
h1.style.fontSize = "5em";



//add event listener to the button to track x and y of clicks
//log them
//log the target
let button = document.querySelector('button');
button.addEventListener('click', function() { 
    let message = "You clicked " + event.offsetX + " and "  + event.offsetY;
    let clickedElement = event.target;
    console.log(message);
    console.log(clickedElement);
});



//key press event listener
document.addEventListener('keydown', function(event) {
    if(event.key=='ArrowUp'){ 
        console.log("Going up!");
    }
});

// track state of clicks ``````
let clickCount = 0;
document.querySelector('button.clickAgain').addEventListener('click', function(){
    if(clickCount > 10) {
        console.log("ok chill");
    } else { 
        clickCount++;
        console.log(`you clicked meeee ${clickCount} times!`);
    }
});



//get all style sheet links, log them, then add even listeners to each

function doSomething(id) { 
    document.querySelector(`#${id}`).addEventListener('click', function() { 
        css.setAttribute('href', `css/${id}.css`);
    });
}
let listItem = document.querySelectorAll('.styles li');
//console.log(listItem);
for (var i in Object.keys(listItem)) { 
    doSomething(listItem[i].id);
}


// track state of clicks
