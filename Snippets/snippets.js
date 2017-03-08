/*

// Variables   


 var myNum = 56  // Number
 var myName = 'Chris'  // String
 var myValue = true  // Boolean
 var name = prompt()  // User input
 
 var name = prompt("What is your name?");
	alert("Hello " + name);


// If / Else Statements


 var age = 15;

 if (age < 16) { // Comparison operators < <= > >= == !=
	 alert("You can't drive");
 }else if (age == 16) { 
	 alert("You can Finally drive");
 }else {
	 alert("You've probably have been driving already");
 }


// Functions


 function addition (number1, number2){
		return number1 + number2;
 };

 var sum = addition(17, 45);

 alert(sum);
 
 

 function multi (num1, num2){
		return num1 * num2;
 };

 alert (multi (45, 75));


//Array


 var myList = ['apples', 'oranges', 'bananas'];

	myList [0] == 'apples'
	myList [1] == 'oranges'
	myList [2] == 'bananas'

 myList[3] = 'pears'; // abb to array
 myList[0] = 'watermelon'; // change a value

// Arrays can hold any type of values, even
     other arrays or functions

 myList.shift() // removes and returns the first element from the array

 myList.pop() // removes and returns the last element from the array

 myList.forEach(function(value, index){
				console.log(value, index);			 
 });  // This will list what value is in which index position of the array


//Loops


 var times =0

 while (times < 10){
	console.log ('Tried it', times);
	times++
 } // this will check the condition first before running any code
 

 do {  
	console.log ('Tried it', times)
	times++
 } while (times < 10); // this will always run at least one tine before its check the condition


 for (var i = 0; i < 10; i++){
	console.log ('i is', i);
 }

 var myList = ['apples', 'oranges', 'bananas'];

 for (var i = 0; i < myList.length; i++){
	console.log (myList[i]);
 }
 
 
 // Selectors
 
 
 document.getElementsByTagName('p');  // gets all the paragraph elements
 
 var pTags = document.getElementsByTagName('p');
 firstpTag = pTags[0];

	firstpTag.innerHTML = "This was changed";
			// Changes the text
			
 document.getElementsByClassName('done');
 			// Get element by class
			
 document.getElementById('checklist');
			// Get element by id
			
 document.querySelector('h1');
      // Gets only the first element
			
 document.querySelectorAll('p');
 			// Gets all the elements
	
	
	var li = document.querySelector('done'); // Select the element
	
  li.className = ""; // Removes class
	
	li.className = "not-done"; // Change class name
	
	li.className = "not-done done"; // Add more than one class
	
	li.className = li.className + "special" // Add a class name if existing classes are unknown
	
	li.className = li.className.replace("not-done"); // Removes just one class
	
 	li.classList; // Shows you all the classes for the element
	
	li.classList.add("new"); // Add a class
	
	li.classList.remove("new"); // Remove a class
	
	li.parentElement; // Will select the parent element
	
	li.parentElement.parentElement; // Will select the parent of the parent element
	
	li.parentElement.children; // Will select all of the children elements of the parent
	
	li.parentElement.children[0]; // Selects the first child element of the parent
	
	li.parentElement.children[0].innerHTML"Pears"; // Will change the text of the first child element of the parent
	
 */


 
 
 
 
 
 
 
