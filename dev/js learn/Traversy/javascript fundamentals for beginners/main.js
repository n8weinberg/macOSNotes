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
