// Main JavaScript File
'use strict';

const { mainModule } = require("node:process");

let state = {
    text: 'Here is some text.'
};

let myArray = ["sky", "tree", "squirrel", "bird", "bees", "Puget Sound", "fake grass"];
let fel = _.first(myArray);
console.log(fel);

let lel = _.last(myArray);
console.log(lel);

let third = _.nth(myArray, 3);
console.log(third);

let chunky = _.chunk(myArray, 2);
console.log(chunky);

let slicey = _.slice(myArray, 2, -3);
console.log(slicey);

let rando = _.random(60);
console.log(rando);

let sammy = _.sample(myArray);
console.log(sammy);

let shuff = _.shuffle(myArray);
console.log(shuff);
// Wait for you page to load to assign events to the elements created in your index.html File
$(function () {
    // Select all svgs and change their attr "height" to 200
    $('svg').attr('height', 200);

    // Select your first svg and change it's width attribute to 10
    $('svg:first').attr('width', 10);

    // Select the input and set the attribute "placeholder" to "start typing"
    $('input').attr('placeholder', "start typing");

    // Set the input val to state.text
    $('input').val(state.text);

    // Select elements with class "italics" and set their css "font-style", to "italic"
    $('.italics').css('font-style', 'italic');

    // Select even rows in the table and set their css "background" to "lightgray"
    $('tr:even').css('background', 'lightgray');

    // Assign an event handler to the <input> element that updates state.text
    $('input').on('change', function(){
        state.text = $(this).val();
        console.log(state.text);
    });
    // Create a new paragraph, add some text, and add it as the *first* element in the <main> tag
    let p = $('<p>');
    p.text("Hey I made some new text!");
    $('main').prepend(p);
    // Assign an click event to the <button> element that changes the text of 
    // element with id "change" to the state.text, and resets the input
    $('button').on('click', function() {
        $('#change').text(state.text);
        $('input').val('');
    });
});
