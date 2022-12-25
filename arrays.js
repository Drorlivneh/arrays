// let array = ['Django', 'Tuesday', 'Thursday', 'Friday', 'Saturday','Titanic'];
// let movies = [];

// array.shift();

// movies[0]=array.shift();

// let hola = ['a','b','c'];
// let reverse = hola.reverse()
// ;
// console.log(reverse);

//Write a function that takes an array of numbers and a number n, and returns true if 
//the number n appears in the array, and false otherwise.

function numbersArray(num, array){
    if (array.includes(num)){
        return true;
    }
    else{
        return false;
    }
}
console.log(numbersArray(2, [1,2,3]));

//Write a function that takes an array of 
//strings and adds a new string to the 
//beginning and to the end of the array, 
//then returns the modified array.

// function beginEndAdded(beginString, array, endString){
   
//     array.unshift(beginString);
//     array.push(endString)
//     return array;
// }
// console.log(array);
//console.log(beginEndAdded('first',['second' , 'third'],'fourth'));

//3
// function numbersArray(array){
//     return array.includes(5);
// }
// console.log(numbersArray([3,4,5]));

//4
function twoArrays(Array1,Array2){
    return Array1.concat(Array2);
}
console.log(twoArrays([1,2,3],[4,5,6]));

//5

function nAppear(array,num){
    if (array.includes(num)){
    return true;
}
    else {
    return false;
    }
}

console.log(nAppear([4,5,6],6));

// //6
// function strings(array,stringS){
// array.indexOf(stringS);
// }
// console.log(strings(['a','b','c','d','e'],'d'));

//7
function reverse(array){
    return array.reverse();
}

console.log(reverse(['red','blue','white']));

//8
function reverseIf(array){
    if (array.length>=5 && array.length<=10 ){
        return array.reverse();
    }
}
console.log(reverseIf(['red','blue','white']));
console.log(reverseIf(['red','blue','white','green','purple','till']));

//9
function reverseRemoved(array=[],num){
if (array.includes(num)){
    array.shift();
    return array.reverse();
}
}
console.log(reverseRemoved([1,2,3,4],2));

//10 
function arrayClone(array){
    let arrayCopy = [...array]
return arrayCopy
}
console.log(arrayClone([1,2,3,4])); 

//11
function firstElements(array,n){
   return array.splice(0,n)
}
console.log(firstElements([2,3,4,5,6],2));

//12
function lastElements(array,n){
   return array.slice(-n)
}
console.log(lastElements([3,4,5,6,7,8,9],3));

//13
function firstLastChecker(array){
    return array.at(-1)===array[0];
}

console.log(firstLastChecker([2,3,4,5,6,2]));

//14
function firstLastcounter(array){
    if (array.at(-1)===array[0]){
        return array.length-2;
    }
}

console.log(firstLastcounter([2,3,4,6,2]));


///////////ex 2    console.log();

let weirdArray = ['inception', 'spiderman', 'tuesday'];
let weirderArray = ['green', 'saturday','friday', 'wednesday'];
//1
console.log(weirderArray.reverse());
//2
console.log(weirdArray.concat(weirderArray));
//3
let movie = weirdArray.splice(0,2);
console.log(movie);
//4
weirderArray.unshift('monday');
console.log(weirderArray);
//5
weirderArray.push('monday');
console.log(weirderArray);
//6
let color = weirderArray.shift();
console.log(color);
//7
weirderArray.push('sunday');
console.log(weirderArray);
//8 
let weekend = weirderArray.splice(1,2);
console.log(weekend);

//////////// ex 3
//1
let practiceFile = [273.15];
console.log(practiceFile);
practiceFile.push(42);
console.log(practiceFile);
practiceFile.push("hello");
console.log(practiceFile);
practiceFile.push(false);
practiceFile.push(-4.6);
practiceFile.push( "87");
console.log(practiceFile);
//////2
//1
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
console.log(cargoHold);
cargoHold.splice(5,1,'space tether');
//cargoHold.insert(5, 'item');////////////////////////
console.log(cargoHold);
//2
let popRemoved = cargoHold.pop();
console.log(cargoHold);
console.log(popRemoved);
//3
let shiftRemoved = cargoHold.shift();
console.log(cargoHold);
console.log(shiftRemoved);
//4
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);
//5///////////////////////////////////////////

///////////////3
//1
cargoHold.splice(2,0,'keys'); 
console.log(cargoHold);
cargoHold.splice(3,1); 
//2
console.log(cargoHold.indexOf('instruction manual'));
cargoHold.splice(3,1); 
console.log(cargoHold);
//3
let newCargoHold = [...cargoHold];
newCargoHold.splice(2,3,'cat','fob', 'string cheese');
console.log(newCargoHold);
//4
let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 =  ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
console.log(holdCabinet1);
console.log(holdCabinet2);
let concatedHoldCabinet = holdCabinet1.concat(holdCabinet2);
console.log(concatedHoldCabinet);
let slicedHoldCabinet1 = holdCabinet1.slice(1,3);
console.log(slicedHoldCabinet1);
let slicedHoldCabinet2 = holdCabinet2.slice(1,3);
console.log(slicedHoldCabinet2);
console.log(holdCabinet1);
console.log(holdCabinet2);
console.log(holdCabinet1.reverse());/////////////////////////////////////////////////////////
console.log(holdCabinet2.sort());
//5
let str = 'In space, no one can hear you code.';
console.log(str.split()); 
console.log( str.split('e')); 
console.log(str.split(' ') ); 
console.log(str.split('')); 
arr = ['B', 'n', 'n', 5];
console.log(arr);
console.log(arr.join());
console.log(arr.join('a'));
console.log( arr.join(' '));
console.log( arr.join(''));
let splitedArray = arr.join('a');
console.log(arr);


//////////////////////////ex 4/////

let numbers1 = [1,2,3,4,5]; 
let numbers2 = numbers1;
console.log(numbers1);
console.log(numbers2);

numbers1.push(6);
console.log(numbers1);
console.log(numbers2);

let numbers3 = [1,2,3,4,5]; 
let numbers4 = numbers3.slice(0);
console.log(numbers3);
console.log(numbers4);
numbers3.push(6);
console.log(numbers3);
console.log(numbers4);
