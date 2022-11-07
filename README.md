## Brief Description 
This tutorial will teach us to generate random background colors by clicking on the button. We will use HTML, CSS, and JavaScript complete this small project. I will give detailed information step by step. I will also add a demo at the end of the project so you can view the project as live  
  

## How to use methods and functions 

We will learn about the methods and functions that will be used in this project. The ``` querySelector() ``` is a method that is used to search and return an element within a document. We will also use ``` getElementById() ``` is JavaScript function that is used to grab an HTML element by its Id name.   

The ``` Math.random() ``` is another function which returns a random floating number that’s greater than or equal to 0 and less than 1. We will also use ``` Math.floor() ``` function which always return the largest number less than or equal to given number. Lastly, We will use ``` addEventListener ``` which is method allow us to setup a function to be called upon a specific event. We will use ‘onClick’ event for this project. 

## Tutorial  

First of all, create all the required files and folders including HTML, CSS and JS files. Create one button in HTML and design it using CSS. I will give more attention to explain the JS file here.

We will use ``` querySelector() ``` to select our body whose background color will change and will use ``` getElementById() ``` to connect our button between HTML and JavaScript file.  Then, We will create a function using Math.random() and Math.floor functions which will generate random number for us. In the last step, we will use addEventListener method on button click event and change the style of back ground color by using ``` body.style.backgroundColor ``` and call our recent created fuction which will generate three random numbers for RGB values. 

``` JavaScript 
const body = document.querySelector('body');
const btn= document.getElementById('bg');

function getColor() {
  let num = Math.floor(Math.random() * 256);
  return num;
}

btn.addEventListener('click', function() {
  body.style.backgroundColor = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
})

 ```

 ## Reference 
 [JavaScript Math.floor() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 


 [JavaScript Math.random() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 

 
 [JavaScript Math function more detail](https://www.w3schools.com/js/js_random.asp)

