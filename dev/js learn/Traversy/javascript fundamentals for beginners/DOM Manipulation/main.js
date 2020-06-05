// console.log(window) shows all that's in the window object in the browser
//Single Element Selectors
// const form = document.getElementById('my-form'); //displays the html that's required for that Id
// console.log(document.querySelector('.container')); //can grab container classes

//Multiple Element Selectors
// console.log(document.querySelectorAll('.item'))//returns a node list, which is similar to an array

// //looping through the DOM element with class "item"
// const items = document.querySelectorAll('.item');

// 			//parameter 	//do stuff
// items.forEach((item) 	=> 	console.log(item));


//easy changes to the DOM
// const ul = document.querySelector('.items');
// // ul.remove(); //this removes the ul elements from the DOM from the HTML
// // ul.lastElementChild.remove(); //removes the last element from the DOM from the HTML
// ul.firstElementChild.textContent = 'Hello'; //Changes the text from "Item 1" to "Hello" in the DOM
// ul.children[1].innerText = 'Nate'; //this is a node list so we use the index of array. 
// 	//we change the text text inside that chosen child from the DOM
// ul.lastElementChild.innerHTML = '<h1>Hello from new heading</h1>';

// const bnn = document.querySelector('.btn');
// btn.sytle.background = 'red';

//events
// const btn = document.querySelector('.btn');

//  //EX 1
//   							  //e is the parameter for the arrow function
// btn.addEventListener('click', (e) => {
	
// 	// btn.style.background = 'red'; //if you use mousedown instead of click it'll highlight red during mouse down
// 	e.preventDefault(); //without this line it'll flash and go away bc the from is no longer submitting
// 	console.log('click');
// });

// //  //EX 2
// btn.addEventListener('click', (e) => {
	
// 	// btn.style.background = 'red'; //if you use mousedown instead of click it'll highlight red during mouse down
// 	e.preventDefault(); //without this line it'll flash and go away bc the from is no longer submitting
// 	console.log(e.target); //gives the hrml code that we're clicking
// 	console.log(e.target.className); //returns the class name we're clicking on
// 	document.querySelector('#my-form').style.background = 'orange';//changes the background of the form element
// 	document.querySelector('body').classList.add('bg-dark');//changes the body bg found in the css
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello New</h1';	

// });


// //Form Script
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');//it's a . because it's a div
// const userList = document.querySelector('#users'); 

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e){
// 	e.preventDefault();
// 	// console.log(nameInput.value);//the value gives you the actual value, otherwise it'll be the html
// 	if(nameInput.value === '' || emailInput === ''){
// 		msg.classList.add('error');
// 		msg.innerHTML = 'Please enter all fields';
// 				//empty parameters
// 		setTimeout(() 			=> msg.remove(), 3000); //this removes the error message we just injected after 3 seconds
// 	} else{
// 		const li = document.createElement('li'); //allows for creating an element of tipe li
// 		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //will append li

// 		userList.appendChild(li);


// 		//clear fields
// 		nameInput.value = '';
// 		emailInput.value = '';

// 	}
// }

////Nert havin fun

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');//it's a . because it's a div
const userList = document.querySelector('#users'); 
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) =>{
	if(nameInput.value != '' && emailInput != ''){
	e.preventDefault();
	btn.style.background = 'green';
	} 
	btn.addEventListener('mouseout', (e) =>{
		btn.style.background = '#333';
	});
})

nameInput.addEventListener('focus', (e) => {
	// e.preventDefault();
	document.querySelector('#page-title').innerText = 'Oh boy.. He typin';
});
nameInput.addEventListener('blur', (e) => {
	document.querySelector('#page-title').innerText = 'Come on. You can fill it out!';
});
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
	e.preventDefault();
	// console.log(nameInput.value);//the value gives you the actual value, otherwise it'll be the html
	if(nameInput.value === '' || emailInput === ''){
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';
				//empty parameters
		setTimeout(() 			=> msg.remove(), 3000); //this removes the error message we just injected after 3 seconds
		const tabTitle = document.querySelector('#tab-title');
		tabTitle.innerText = 'No long beginner';

	} else{
		const li = document.createElement('li'); //allows for creating an element of tipe li
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //will append li

		userList.appendChild(li); //now creates/appends the list element onto the DOM
		const pageTitle = document.querySelector('#page-title');
		pageTitle.innerText = 'You got DATA';
		li.style.background = `#${Math.floor(Math.random() * 0xeeeeee)+0x333333}`;

		//clear fields
		nameInput.value = '';
		emailInput.value = '';
		// btn.classList.add('btn');
		
		btn.style.background = 'blue';
	}
}












