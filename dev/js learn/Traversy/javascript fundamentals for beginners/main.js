/////object array's
const todos = [
	{
		id: 1, 
		text: 'take out trash',
		isCompleted: true
	},
	{
		id: 2, 
		text: 'meeting with boss',
		isCompleted: true
	},
	{
		id: 3, 
		text: 'dentist',
		isCompleted: false
	}
];

// console.log(todos);
// //drill down and display value within the object
// 			//obj[idx].subObject
// console.log(todos[2].isCompleted)

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


//  //For
// for(let i = 0; i < 10; i++){
// 	console.log(`For loop Number: ${i}`);
// console.log(todos[i].text);
// }

//  //For of
// for(let todo of todos){
// 	console.log(todo.text);
// }

// //For Each
// todos.forEach(function(todo) {
// 	console.log(todo.text);
// })

// Map
// const todoText = todos.map(function(todo){
// 	return todo.text;
// });
// console.log(todoText);

// // Filter
// const todoCompleted = todos.filter(function(todo){
// 	return todo.isCompleted === true;
// });
// console.log(todoCompleted);

//Filter + map
// const todoCompleted = todos.filter(function(todo){
// 	return todo.isCompleted === true;
// }).map(function(todo){
// 	return todo.text;
// });
// console.log(todoCompleted);

// //While
// let i = 0;
// while (i<todos.lenth){
// 	console.log(todos[i].text);
// 	i++;
// }




/////CONDITIONALS
//  //EX 1
// const x = '10';
// if(x == 10){
// 	console.log('x is either string 10 or number 10')
// }
// if(x === 10){
// 	console.log('x is number 10')
// }

//  //EX 2
// const x = 20;
// if(x === 10){
// 	consle.log('x is 10');
// } else if(x > 10){
// 	console.log('x is greater than 10');
// } else{
// 	console.log('x is less than 10');
// }

//Ternary operators
//  //EX 3
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

//Switches
//  //EX 4
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';

// switch(color){
// 	case 'red':
// 		consle.log('Color is Red');
// 		break;
// 	case 'blue':
// 		console.log('Color is blue');
// 		break;
// 	default:
// 		console.log('Color is not Red or Blue');
// 		break;
// }



//////Functions
// //EX 1
// function addNums(num1 = 0, num2 = 0){
// 	return (num1 + num2);
// }
// console.log(addNums(5,9));

//  //EX 2
// function addNums(num1){
// 	return num1 + 5;
// }
// console.log(addNums(33));

//Arrow Functions
//  //EX 1 identical to Functions EX1
// const addNums = (num1 = 0, num2 = 0) =>  num1 + num2;
// console.log(addNums(3,4));

//  //EX 2 identical to Functions EX2
// const addNums = num1 => num1 + 5;
// console.log(addNums(33));


///Constructor functions with prototypes
 // //EX1
	// 		//object name should start with a capital
	// 				//parameters of the properties you want to set
	// //constructor
	// function Person(firstName, lastName, dob){
	// 	//you want to set the parameters to the properties of the object by using the this keyword
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.dob = dob;
	// }
	// //instantiate an object by using the Person() constructor
	// const person1 = new Person('John', 'Doe', '4-3-1980');
	// console.log(person1);

// //  //EX2 -Access specific properties from object and also use the Date constructor for the date of birth
// 	function Person(firstName, lastName, dob){
// 		//you want to set the parameters to the properties of the object by using the this keyword
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.dob = new Date(dob); //the new Date() constructor will format the string as a date
// 	}
// 	//instantiate an object by using the Person() constructor
// 	const person1 = new Person('John', 'Doe', '4-3-1980');
// 	const person2 = new Person('Jane', 'Smith', '9-2-1929');
// 	console.log(person1.firstName);
// 	console.log(person2.dob);
// 	console.log(person2.dob.getFullYear());

//  //EX3 --Add functionality to the prototype function by adding internal functions
	// function Person(firstName, lastName, dob){
	// 	//you want to set the parameters to the properties of the object by using the this keyword
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.dob = new Date(dob); //the new Date() constructor will format the string as a date
	// 	//these functions are directly visible in the object even in the console
	// 	this.getBirthYear = function(){
	// 		return this.dob.getFullYear();
	// 	}
	// 	this.getFullName = function(){
	// 		return `${this.firstName} ${this.lastName}`;
	// 	}
	// }
	// //instantiate an object by using the Person() constructor
	// const person1 = new Person('John', 'Doe', '4-3-1980');
	// const person2 = new Person('Jane', 'Smith', '9-2-1929');

	// console.log(person1.getBirthYear());
	// console.log(person1.getFullName());


// //  //EX4 put object functions inside Prototypes from ES6
// 	function Person(firstName, lastName, dob){
// 		//you want to set the parameters to the properties of the object by using the this keyword
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.dob = new Date(dob); //the new Date() constructor will format the string as a date
// 	}

// 	//by using the prototype, you don't see the functions inside the Person object 
// 		//but inside it's __proto__ section.
// 	Person.prototype.getBirthYear = function(){
// 		return this.dob.getFullYear();
// 	}

// 	Person.prototype.getFullName = function(){
// 		return `${this.firstName} ${this.lastName}`;
// 	}

// 	//instantiate an object by using the Person() constructor
// 	const person1 = new Person('John', 'Doe', '4-3-1980');
// 	const person2 = new Person('Jane', 'Smith', '9-2-1929');

// 	console.log(person1.getBirthYear());
// 	console.log(person1);

// //  //EX5 ES6 Classes
// 	//Class -No need to use the prototypes or make Person() a function
// 	class Person {
// 		constructor(firstName, lastName, dob) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.dob = new Date(dob); //the new Date() constructor will format the string as a date
// 		}
// 		//These functions are shown in the __proto__ section
// 		getBirthYear(){
// 			return this.dob.getFullYear();
// 		}
// 		getFullName(){
// 			return `${this.firstName} ${this.lastName}`;
// 		}
// 	}

// 	//instantiate an object by using the Person() constructor. Stays the same with Classes
// 	const person1 = new Person('John', 'Doe', '4-3-1980');
// 	const person2 = new Person('Jane', 'Smith', '9-2-1929');

// 	console.log(person1.getBirthYear());
// 	console.log(person1);












