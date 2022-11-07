'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

    Getting access to HTML documents
*/


// Chanhing the background color
const body = document.querySelector('body');
const btn= document.getElementById('bg');

function getColor() {
  let num = Math.floor(Math.random() * 256);
  // Returning a random number from 0 to 255 (256 not included)
  return num;
}

btn.addEventListener('click', function() {
  body.style.backgroundColor = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
})

