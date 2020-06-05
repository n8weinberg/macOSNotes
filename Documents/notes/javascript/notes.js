// variables: var, let, const
/*
	var is globally scoped. 
		If you set a var inside an if or loop it'll cause conflicts with things outside your intended scope
	let:
		reassign values
	
	const: 
		can't be reassigned
			but you can add values to an array that's const (manipulate the array)
		always use const unless you know you're going to reassign your value
		must be initialized a value at declaration


*/

/*
Data types: string, numbers, boolean, null, undefined
	strings can use single or double quotes
	numbers can be any digits. There are no float or double data types, just number. 
	booleans use lowercase true and false
	null is a variable with nothing in it. it's empty. 
		typeof will return "object" but it's NOT an object.
	undefined:
		const x = undefined;
			or
		let z;
	Find Data Types:
		typeof VARIABLE_TO_CHECK

	Concatenation:
		separate string and number with + sign (old way)
			ex: console.log('My name is ' + name + 'and I am ' + age + ' years old');
		Template string (new way):
			uses back tics ` ` instead of ' ' or " " and you put the variable in ${variable}
			syntax ex: 	`stringyString ${VARIABLE_NAME} stringStringStringy`;

				ex: console.log(`My name is ${name} and I am ${age} years old`);
			Can assign the template string to a variable too
				ex: const hello = `stringyString ${VARIABLE_NAME} stringStringStringy`;

*/

/////Conditionals
	// single = 
		// assign
	// double == 
		// equal excluding type
	// tripple ===
		// equal including type

	// If Statements
	if(condition){
		//do a thing;
	} 
	else if(condition2){
		// do another thing;
	} 
	else{
		// do last thing;
	}

	//multiple conditionals
		// or is written as ||
		// and is written as &&

	//Ternary operator [parenthese aren't required]
					//if true    if false	
		(condition) ? doThing1 : doThing2;
		//equal to this 
			if(condition){
				doThing1;
			}
			else{
				doThing2;
			}
		// EX: 
			const x = 11;
			const color = (x >10) ? 'red' : 'blue';
	//switch statement (basically a case statement)
	switch(VARIABLE_TO_CHECK){
		case variablePossibleValue1: //if checking string use 'variablePossibleValue1'
			// do thing;
			break;
		case variablePossibleValue2:
			//do thing;
			break;
		default:
			// do thing;
			break;
	}

/* Function & Method & Property


Method:
	uses dot at beginning after object
	has parentheses()
	function associated with an object

	Useful Methods:
		substring(start, end);
		toUpperCase();
		split() - splits string into an array
			split by letter: ''
			split by comma + space: ', '






Property:
	uses dot at beginnning after object
	Does not have parentheses 






*/






// Arrays
// creating an array
//can have mix and match data types
let emptyArray = [];
// or
//array constructor
let emptyArray2 = new Array();

// adding value to array at the end using push method
emptyArray.push(55);

// adding a value to the array at the beginning using unshift method
emptyArray.unshift('yourButt');

// removing the last value off the array using pop method
emptyArray.pop();

// see if a variable is an array using Array.isArray()
Array.isArray()
	//returns boolean false if not an array

// return the index of a value in array using indexOf('VALUE_IN_ARRAY')
emptyArray.indexOf('yourButt');


// you can mix and match types in arrays
emptyArray.push('three');

// count values in the array using length method
emptyArray.length;

// to sort the values using sort() function. digits first and strings after
emptyArray.sort();

// to reverse the order of values in the array use reverse()
emptyArray.reverse();



// Loops (basically like C++ but with let instead of int)
	// For Loop
		for(let incrementer = start value; incrementer BOOL end; incrementer++){
			// do things;
		}
	
	//For of loops
		for(let incrementer of array){
			//do things;
		}

	//forEach
		arrayName.forEach(function(incrementer){
			//do things in here;
		});

	// map
		//return's an array of the values 
		const ArrObjInternalPar = ArrayOfObj.map(function(incrementer){
			return incrementer.internalPar;
		});
	// filter
		const ArrObjInternalPar = ArrayOfObj.filter(function(incrementer){
			return incrementer.internalParBool === true;
			//or use incrementer.internalPar == 72;
		});

	//filter + map
		const ArrObjInternalPar = ArrayOfObj.filter(function(incrementer){
			return incrementer.internalParBool === true;
		}).map(function(incrementer){
			return incrementer.internalPar;
			//or use: return incrementer.internalPar == number/string; for non boolean
		});

	// While Loop
		let i = 0; //initialize variable to loop
		while(i<10){ //attach condition to loop
			console.log(i);
			i++//increment variable or condition to change outcome of loop
		}



/*
Object Literals
const OBJECT_NAME = {
	objectParameter1: 'objectParemeterValue',
	objectParameter2: 'objectParemeterValue2',
	objectParameter3: 33,
	objectParameterArray: ['thing1', 'thing2', 3],
	objectInObjectParameter: {
		subObject1: 'thingy',
		subObject2: 32
	}
}

//pull items out of the object NOT assigning = destructuring
	const {objectParameter1, objectParemeter2} = OBJECT_NAME;
	console.log(objectParameter1); //returns objectParemeterValue
	const {objectParameter1, objectParemeter2, objectInObjectParameter: {subObject1}} = OBJECT_NAME;
	console.log(subObject1); //returns thingy

Add Properties to object with the dot object notiation:
	OBJECT_NAME.newParameter = 'herpaDerp';
*/

/*
Array's of Objects
	const obj = [
		{
			val1: myVal,
			val2: myVal2,
			myText: 'texty' //no comma at the end of last
		}, //comma between objects
		{
			val1: = myvalues,
			val2: myvallll,
			myText: 'what up' 
		} //no comma after the end
	];

	Ex:
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
		console.log(todos);
		//drill down and display value within the object
					//obj[idx].subObject
		console.log(todos[2].isCompleted)

*/

/* JSON
	convert array of objects to JSON
	const objectNameJSON = JSON.stringify(objName);



*/