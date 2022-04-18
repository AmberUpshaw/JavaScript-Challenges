// CSX Challenges: Functions and Execution Context Solutions
//----------------------------------------------------------
//Challenge: addTwo
function addTwo(num){
  return num + 2;
}

console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12


//Challenge: addS
function addS(str){
  return str + 's';
}

console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'

//Challenge: sayHello
function sayHello(str){
  return 'Hi, ' + str;
}

console.log(sayHello('Mary')); // should log: 'Hi, Mary'
console.log(sayHello('Haley')); // should log: 'Hi, Haley'

//Challenge: wereAwesome
function wereAwesome(you, yourBuddy) {
  // ADD CODE HERE
  return `${yourBuddy} and ${you} are awesome!`;
}

console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"

//Challenge: lastLetter
function lastLetter(word) {
  const lastIndex = word.length - 1;
  return word[lastIndex];
}

console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"

//Challenge: Invoking Functions
let calls = "";

function jerry(str) {
  return 'Jerry' + kramer('Kramer') + george('George') + elaine('Elaine');
}

function george(str) {
	return str;
}

function elaine(str) {
	return str;
}

function kramer(str) {
	return str;
}

calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'

//Challenge: makePlans
let friendsAvailable = true;

function makePlans(name) {
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  if (bool == true){
    return `Plans made with ${name} this weekend`;
  } else{
    return 'Everyone is busy this weekend';
  }
}

console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."

//Challenge: isOdd
function isOdd(num){
  if (num % 2 != 0){
    return true;
  }else {
    return false;
  }
}

console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false

//Challenge: Control Flow - if statements & remainders
function iLoveEvenNumbers(num){
  if (num % 2 == 0){
    return 'Oh Yeah Evens!';
  }else {
    return 'I am too normal for odd numbers';
  }
}

console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'

//Challenge: getRemainder
function getRemainder(num1, num2) {
  if (num1 < num2){
    return num2 % num1;
  } else{
    return num1 % num2;
  }
}

console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0

//Challenge: Control Flow - if statements & multiple conditions
function greetings(hour) {
  if(hour < 12){
    return 'Good Morning!';
  } else if (hour >= 12 && hour < 15){
    return 'Good Afternoon!';
  } else {
    return 'Good Night!';
  }
}

console.log(greetings(8)); // expected log 'Good Morning!'
console.log(greetings(12)); // expected log 'Good Afternoon!'
console.log(greetings(14)); // expected log 'Good Afternoon!'
console.log(greetings(15)); // expected log 'Good Night!'
console.log(greetings(18)); // expected log 'Good Night!'

//Challenge: gradeCalculator
function gradeCalculator(grade) {
  if(grade >= 90){
    return 'A';
  }else if (grade >= 80 && grade <= 89){
    return 'B';
  }else if (grade >= 70 && grade <= 79){
    return 'C';
  }else if (grade >= 60 && grade <= 69){
    return 'D';
  }else{
    return 'F';
  }
}

console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"

//Challenge: droids
function droids(arr) {
  let result = '';
  for(let i = 0; i < arr.length; i++){
    if (arr[i].includes('Droids')){
      result = 'Found Droids!';
    }else {
      result = "These are not the droids you're looking for.";
    }
  }
  return result;
}

const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) // should log: "These are not the droids you're looking for."

//Challenge: Using forEach
function droids(arr) {
  let result = '';
  // ADD CODE HERE
  arr.forEach(el => {
    if (el == 'Droids'){
      result = 'Found Droids!'
    }else{
      result = "These are not the droids you're looking for.";
    }
  });
  return result;
}

const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) //should log: "These are not the droids you're looking for."

//Challenge: Short-Circuiting a Loop
function holidays(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr.includes('October')){
      return 'Happy Halloween';
    }else {
      return 'Have a great day!';
    }
  }
}

const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"

//Challenge: For Loops - Updating Array Elements
function addN(arr, n){
  for(let i = 0; i < arr.length; i++){
    arr[i] += n;
  }
  
  return arr;
} 

console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

//Challenge: For Loops - Summing Array Elements
function getTheSum(arr){
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  
  return total;
}

console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

//Challenge: multiplyAll
function multiplyAll(...args){
  let product = 1;
  args.forEach(el => product *= el);
  
  return product;
}

console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

//Challenge: Loops - Summing Two Arrays
function mergingElements(array1, array2){
  let newArr = [];
  
  for (let i = 0; i < array1.length; i++){
    newArr.push(array1[i] + array2[i]);
  }
  
  return newArr;
}

console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]

//Challenge: Loops & Control Flow
function mergingTripletsAndQuints(array1, array2) {
  let newArr = [];
  
  for(let i = 0; i < array1.length; i++){
    if ((array1[i] % 3 == 0) || (array1[i] % 5 == 0)){
      newArr.push(array1[i] + array2[i]);
    }else {
      newArr.push(array1[i]);
    }
  }
  
  return newArr;
}

console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

//Challenge: While Loops - Counters
function imAboutToExplodeWithExcitement(n){
  while (n != 0){
    if(n == 5){
      console.log("Oh wow, I can't handle the anticipation!")
    }else if(n == 3){
      console.log("I'm about to explode with excitement!");
    }else {
      console.log(n);
    }
    
    n--;
  }
}

imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

//Challenge: Control Flow - if statements and the Math object
function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
	let diff1 = (theMark > player1) ? theMark - player1 : player1 - theMark;
  let diff2 = (theMark > player2) ? theMark - player2 : player2 - theMark;
  
  if(diff1 == 0 || diff1 < diff2){
    return 'Player 1 is the closest';
  }else if (diff2 == 0 || diff2 < diff1){
    return 'Player 2 is the closest';
  }else if (diff1 == diff2){
    return 'They are the same distance';
  }
}

console.log(closestToTheMark(25, 75));

//Challenge: Loops - Range
function getTheRange(arr){
  const low = Math.min(...arr);
  const high = Math.max(...arr);
  const range = high - low;
  return [low, high, range];
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

//Challenge: Loops - Multiple Conditions
function addingAllTheWeirdStuff(array1, array2){
  let oddSum = 0;
  let evenSum = 0;
  for(let i = 0; i < array2.length; i++){
    if(array2[i] % 2 != 0){
      oddSum += array2[i];
    }else if(array2[i] % 2 == 0){
      evenSum += array2[i];
    }
  }
  
  for(let i = 0; i < array1.length; i++){
    if (array1[i] < 10){
      array1[i] += oddSum;
    }else if (array1[i] >= 10){
      array1[i] += evenSum;
    }
  }
  return array1;
}

console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

//Challenge: disemvowel
function disemvowel(string) {
  const newArr = string.split("");
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for(let i = 0; i < newArr.length; i++){
    for(let j = 0; j < vowels.length; j++){
      if(newArr[i] == vowels[j]){
        newArr.splice(i, 1);
      }
    }
  }
  
  return newArr.join('');
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('hello world')); // => 'hll wrld'

//Challenge: addWaldo
function addWaldo(obj){
  obj['Waldo'] = 'unknown';
  return obj;
}

const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

//Challenge: findWaldo
function findWaldo(obj){
  let waldo = 0;
  let notWaldo = 0;
  for(const p in obj){
    if(p == 'Waldo'){
      return obj[p];
    }else{
      notWaldo++;
    }
  }
  
  if(notWaldo > waldo){
    return 'Where\'s Waldo?';
  }
}

const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'

//Challenge: arrayBuilder
function arrayBuilder(obj) {
  const newArr = [];
  
  for(const p in obj){
    let counter = obj[p];
    
    while(counter > 0){
      newArr.push(obj);
      counter -= 1;
    }
  }
  
  return newArr;
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []

//Challenge: Functions - Function Expression
function functionDeclaration() {
  return "Hi there!";
}

const myFunc = function() {
  return functionDeclaration();
}

console.log(myFunc()); //should log: "Hi there!"

