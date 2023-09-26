/*
  switch the heading to 'I love JavaScript!
  */
// let's do that on an event, as a callback to setTimeout
let heading = document.querySelector('h1');
//heading.innerHTML = "I love JavaScript!";
setTimeout(() => heading.textContent = "I love JavaScript", 3000);

/*
 switch the image
 */
//select the image by its id
let image = document.querySelector("#main");
// switch the src attribute the other image
//image.src = "images/LoveJS.jpg";
// switch after timeout event
setTimeout(() => image.src = "images/LoveJS.jpg", 5000);

/*
 make the link href valid
 */
// select the element and store a reference in a variable.
const link = document.querySelector('a');
// change the text inside the link with the textContent property.
link.textContent = "Mozilla Developer Network";
// change the URL the link is pointing to:
link.href = "https://developer.mozilla.org";
// get a reference to the div element node

/* 
Create a new paragraph element and give it some text
*/
let paragraph = document.createElement('p');
paragraph.textContent = "This is test text";
// Now append the new paragraph at the end of the div
let parent = document.querySelector('div');
parent.appendChild(paragraph);
// create a text node to the paragraph

// Grab a reference to the paragraph the link is inside and append the text node to it.

//
// Moving and removing elements
//
// to move the paragraph with the link to the bottom of the div

// to remove a node


/*
Add style
*/
// Can add inline styles directly as below
/* 
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/
// but better to add the style as a class and switch the class

/*
Build a list dynamically with javascript
*/
// create nodes to hold the list, input and button elements


// on button click, read input from the content of the input box

  // create a new list item to hold the user input
  
  // create a button with the list item for deleting
 
  // append the span text to the li


  // if list item button clicked, remove the node item

/*
 validate email input in the client - just check correct format
 */


