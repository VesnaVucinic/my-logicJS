“duplicate a line multiple times in vscode” 
1. On Windows: Shift + Alt + Up/Down.
2. On Mac: Shift + Option + Up/Down.

Logic in JavaScript (120 mins)
Recap (5 mins)
❓ What is logic?
A: Oxford: 'reasoning conducted or assessed according to strict principles of validity'
We use logic in our programming to make decision, when our programme might take different routes.  In programming we have conditions, conditions have an outcome of true or false. Based of outcome of conditions program will take different route.
True, False, Truthy & Falsy (5 mins) – truthyfalsey.js
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy


What is the difference between true/false and 'truthy'/'falsy'?
A: What data type are true or false? (Boolean). Are true/false actual values? (yes) 
Truthy and falsy are ways to describe data.

•	 ❔ Ask students if 4 is true (No, it is the number 4! But it is truthy!)
•	 ❔ Ask students if 0 is false (No, it is the number 0! But it is falsy!)
•	 ❗ Advise students that during this session we will be using all four words carefully and to listen out for them
Value which are true when we convert them to Boolean is Truthy values
Value which are false when we convert them to Boolean is call Falsy values
Falsy values:
0
“ ”
Undefined 
Null
NaN

Any vale other then Falsy are Truthy values

if (true) {
    console.log ("Hi") // “Hi”
}

if (false) {
    console.log ("Hi")
}

// console.log ("hi" + 5) //NaN

if (NaN) {
    console.log('Hi')
}
if (null) {
    console.log('Hi')
}
if (undefined) {
    console.log('Hi')
}
if (0) {
    console.log('Hi')
}
if ("") {
    console.log('Hi')
}


Comparison (5 mins) – comparison.js
•	If we want to compare two values we have a range of operators that enable us to do that in order to get a Boolean value.  And when we get true or false, we can determine which path in our programme to take.
•	 💻 Show students >, <, <= and >=
•	 💻 Show students ==, ===, != and !==

> // greater than
< // less than
>= // greater than or equal to
<= // less than or equal to

We can compare if two things are equal using the double equals sign or check if two things are not equal using the not equal operator.

== // equal to The equality operator (==) checks whether its two operands are equal, returning a Boolean result. If the operands are of different types, try to convert them to the same type before comparing:
•	When comparing a number to a string, try to convert the string to a numeric value.
console.log('1' ==  1);
// expected output: true

!= // not equal to It is the negation of the equality operator 
console.log('1' !=  1);
// expected output: false

=== // strictly equal to  strict equality (===) the strict equality operator always considers operands of different types to be different.

!== // not strictly equal to The strict inequality operator (!==) checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.
console.log('1' !==  1);
// expected output: true

-these two lines are same
“1” !== 1
!(x === y)


Logical && (5 mins) – logicandor.js
•	🗣️ We might want to make this slightly more complicated and have two comparison statements that we need to be true
•	 🗣️ In that case we can combine that two comparison statements using the double ampersand - logical AND operator
•	❗  the operator is looking for both sides to evaluate to be truthy, not necessarily the value true
•	 💻 Show students && using eg. 4 > 2 && 2 > 1 and 3 + 4 === 7 && "hello".length === 5
console.log( 4 > 2 && 2 > 1 ) //true
console.log (3 + 4 === 7 && "hello".length === 5) //true

•	 ❔ Ask students what they think 3 + 4 === 7 && "hello" will return and why
console.log(3 + 4 === 7 && "hello" ) // hello

•	 💻 Show students the result ("hello")
•	 ❗ Advise that the operator will work left to right, returning the first falsy value it finds. If it gets to the end, it will return the final evaluated value.
3 + 4 === 7 && "hello" && 5 // 5
"hello" && 3 ===3 // true
❔ Ask students what they anticipate to receive back for 4 && "hello" && 4 + 3 === 7 and why (true)
console.log(4 && "hello" && 4 + 3 === 7) //true

 ❔ Ask students what they anticipate to receive back for 4 && "hello" && 4 + 3 and why (7)
console.log(4 && "hello" && 4 + 3 ) //7

❔        Ask students what they anticipate to receive back for 4 && "hello" && null && "futureproof" and why (null)
console.log(4 && "hello" && null && "futureproof" ) //null


"short-circuit" evaluation using the following rule:
(some falsy expression) && expr is short-circuit evaluated to the falsy expression;
Short circuit means that the expr part above is not evaluated,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#operator_precedence

 
Logical || (5 mins)
•	 🗣️ we might only need one of our comparison statements to be true
•	 🗣️ we can achieve this with the double pipe operator (logical OR operator)
•	❗  the operator is looking for either side to evaluate to be truthy, not necessarily the value true
•	 💻 Show students || using eg. 4 > 2 || 1 > 2 and 3 + 4 === 6 || "hello".length === 3
•	❔ Ask students what they think 3 + 4 === 7 || "hello" will return and why
•	💻 Show students the result (true)
console.log(4 > 2 || 1 > 2 ) //true
console.log(3 + 4 === 6 || "hello".length === 3) //false

•	 ❗ Advise that the operator will work left to right, returning the first truthy value it finds. If it gets to the end, it will return the final evaluated value.
•	❔ Ask students what they anticipate to receive back for 4 || "hello" || null || "futureproof" and why (4)
•	 ❔ Ask students what they anticipate to receive back for 0 || "hello" || null || "futureproof" and why ("hello")
•	 
•	 ❔ Ask students what they anticipate to receive back for null || 0 || "" and why ("")
console.log(3 + 4 === 7 || "hello") //true
console.log(4 || "hello" || null || "futureproof") //4
console.log(0 || "hello" || null || "futureproof") // hello
console.log(null || 0 || "" ) //’’


Operator precedence
The following expressions might seem equivalent, but they are not, because the && operator is executed before the || operator (see operator precedence).
true || false && false      // returns true, because && is executed first
(true || false) && false    // returns false, because operator precedence cannot apply



Logical Assignment (5 mins) 

The logical OR assignment operator (||=) accepts two operands and assigns the right operand to the left operand if the left operand is falsy:
The logical AND assignment operator (&&=) accepts two operands and assigns the right operand to the left operand if the left operand is truthy:
// Logical Assignment
let cat
let name = "Zelda"
cat ||= name //Zelda

let cat = "Bob"
let name= "Fred"
cat ||= name   //Bob

// Logical Assignment
let cat
let name = "Zelda"
cat &&= name //undefined

let cat = "Bob"
let name= "Fred"
cat &&= name //Fred

Control Flow (25 mins)
❓ What do we mean by 'control flow'?
A: The order in which our statements are executed. Often, we want this to change depending on a previous outcome.
Logical && as control flow (5 mins)
we saw a mechanism to determine which route to take, let’s see how we can actually implement that in code.

	
•	🗣️ for a simple comparison in which we either do something or nothing, we can make use of the && operator
•	 🗣️ && will go left to right evaluating each statement until it finds a falsy one
•	💻 Create a function eg const driveCar = () => console.log(‘Vroom!') and a variable eg. let age = 20
•	 ❔ Ask students what they anticipate will happen run running age > 20 && driveCar()
const driveCar = () => console.log("Vroom")
let age = 20
console.log(age > 20 && driveCar)

•	💻 Create an object eg. let prospect = { name: 'Beth', pets: 2 } and a function eg. const sendAd = p => console.log(`Hey, ${p.name}, need pet insurance for your ${p.pets} best friends?`)
•	 ❔ Ask students what they anticipate will happen run running prospect.pets && sendAd(prospect)
let prospect = { name: 'Beth', pets: 2 }
const sendAd = p => console.log(`Hey, ${p.name}, need pet insurance for your ${p.pets} best friends?`)
console.log(prospect.pets && sendAd(prospect)) // undefined


•	 ❔ Ask students what they anticipate will happen if the value of pets is 0 and why
let prospect = { name: 'Beth', pets: 0 }
const sendAd = p => console.log(`Hey, ${p.name}, need pet insurance for your ${p.pets} best friends?`)
console.log(prospect.pets && sendAd(prospect)) // 0

In JavaScript we have three structures for implementing code conditionally: if statements, switch statements, and ternary expressions.

Ternary statements (5 mins)
•	 🗣️ a simple comparison with 2 possible outcomes can be expressed in a ternary statement
•	 💻 Show students a ternary statement using the data from above eg. age > 16 ? driveCar() : 'Nope!'
If a certain condition is true, you want to return one value. If the condition is false, you want to return a different value.

let age = 20
const driveCar = () => console.log("Vroom")
console.log(age > 16 ? driveCar() : 'Nope!') // Vroom

let age = 15
const driveCar = () => console.log("Vroom")
console.log(age > 16 ? driveCar() : 'Nope!') //'Nope



if statements (5 mins)
An if statement basically says "If this condition is true or returns truthy value, then run this block of code." If the condition isn't true, the program will skip the block of code.
•	❔ Have a student help you recreate number > 0 && 'positive' as an if statement, concentrating on the syntax
•	 ❔ Have a student help you recreate number > 0 ? 'positive' : 'negative' as an if statement, concentrating on the syntax of the else
   let num = 4
    if (num > 0) {
        console.log("positive") 
    } // If the condition returns a falsy value, do nothing
    
else
Often we want to run one block of code when the condition returns a truthy value and a different block of code when it returns a falsey value. To do this, we use an else clause:
    let num = 0
    if (num > 0) {
        console.log("positive") 
    } else {
        console.log("negative")
    }
Note that the else clause does not take a condition — if the condition for the if returns a falsey value, we want the else code block to run no matter what. This means that exactly one of the code blocks will always run.
but sometimes we need to check multiple conditions. We can handle this situation by using one or more else if clauses.
•	❔ Have a student help you write a complete if/else if/else

function fizzbuzz(num) {
   if (num %3 === 0 && num % 5===0) {
        console.log ("fizzbuzz")
    } else if (num % 3===0) {
        console.log ("fizz")
    } else if (num % 5===0) {
        console.log ("buzz")
    } else {
        console.log(num) 
    }
}
fizzbuzz(15) 


•	 🗣️ Tell students that the order of these conditions does matter
•	 💻 Show students FizzBuzz in the wrong order and ask them what they think of that code
•	 ❔ Have a students navigate you through fixing it
The most specific one needs to go the top- with more conditions is more specific
function fizzbuzz(num) {
   if (num % 5===0) {
        console.log("buzz")
    } else if (num % 3===0) {
        console.log("fizz")
    } else if (num %3 === 0 && num % 5===0) {
        console.log("fizzbuzz")
    } else {
        console.log(num) 
    }
}
fizzbuzz(15)    

As you can see we couldn’t done that with ternary or with just && and || operators
switch statements (10 mins)
•	 🗣️ we can see how an if statement could swiftly add up to be a lot of code!
•	 🗣️ and now we have another control flow option is the switch statement
•	 🗣️ this is for cases where we have a really long list of different outcomes for the same condition
We compare the value passed into the switch statement against each of the case values using strict equality (===). When a match is found, the statement nested under that case is executed

let day = "Tuesday"
    switch (day) {
      case "Monday":
        console.log("no");
        break;
      case "Tuesday":
        console.log("today");
      case "Wednesday":
        return("no agan");
      default:
        console.log("other day");
        break;
    }
    

We can consider the default case to be something like the else statement in an if statement. It will run if there are no matches. The difference is that a switch statement requires a default case but an if statement does not require an else statement.
break
In the previous example, break is used to stop the switch statement from continuing to look at case statements once it finds a match.
default
The default keyword is similar to the else clause in an if...else construction. It specifies a set of statements to run after all of the switch statement's cases have been checked. 
Loops (35 mins)
❓ Why use loops?
A: (Human) efficiency and readability
•	 💻 Show students a list of repetitive statements
// list of repetitive statements
    let num = [1, 2, 3, 4, 5, 6]
    function printNum(num) {
       console.log(num) 
    }
    printNum(num[0])
    printNum(num[1])
    printNum(num[2])
    printNum(num[3])
    printNum(num[4])


•	 ❔ Do you  think this looks like good code and if not, why not?
•	 🗣️ if we want to repeat a specific action, we can use a loop
for (5 mins)
Let make one for loop for the same example
for (let num = 0; num <= 6; num++) {
    console.log(num)
}


let num = [1, 2, 3, 4, 5, 6]
for (let i= 0; i <= num.length; i++) {
    console.log(num)
}

•	 💻 Walkthrough each part of the statement explaining what it is doing
The for loop is made up of four statements in the following structure:
for ([initialization]; [condition]; [iteration]) {
  [loop body]
}
•	Initialization
o	Typically used to initialize a counter variable.
•	Condition
o	An expression evaluated before each pass through the loop. If this expression evaluates to true, the statements in the loop body are executed. If the expression evaluates to false, the loop exits.
•	Iteration
o	A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to completion.
•	Loop body
o	Code that runs on each pass through the loop.
Usage: Use a for loop when you know exactly how many times you want the loop to run (for example, when you have an array of known size).


while (10 mins)
•	Often, you will see while loops simply being used as an alternative to for loops:
•	The while loop is similar to a for loop, repeating an action in a loop based on a condition and will continue to loop until that condition evaluates to false. Unlike for, while only requires condition and loop statements:
while ([condition]) {
    [loop_body]
}

•	 💻 We will first create variable let number = 0
•	 💻 Then a while loop with the condition number <= 4
let counter= 0 // the initialization moved OUTSIDE the body of the loop!
while (counter < 4) { 
    console.log(counter++) // the iteration moves INSIDE the body of the loop!
}

As we can see we've just moved the initialization and iteration statements - declaring the i variable outside the loop, and now incrementing it inside the loop.

•	 💻 Update the condition to be number > 0 && number <= 4 and ask students what they think will happen
let number = 0
while (number > 0 && number <= 4 ) {
    console.log(number++)
    
}
If the condition of a while loop is never true, it will never be executed.

do while (5 mins)
The do loop is similar to a while loop, the only difference being that it is always executed at least once no matter what. 
Note the placement of the conditional after the block of code.
    let number = 0
    do {
        console.log(`The num is ${number}`)
        number++;
    } while (number > 0 && number < 4); // The num is 0 - 3
    
    do {
        console.log(`The num is ${number}`)
        number++;
    } while (number > 1 && number <= 4);// The num is 0
    
    do {
        console.log(`The num is ${number}`)
        number++;
        console.log(`The num is ${number}`)
    } while (number > 1 && number <= 4);// The num is 0 // The num is 1
    
    do {
        console.log(`The num is ${number}`)
        number++;
    } while (number >= 1 && number <= 4);// The num is 0 - 4


The only difference between do and while loop is in what point checks the condition.
Iterators
loop allows you to do the same thing over and over again until a condition is met whilst an iterator allows you to start repeating something. loop we are checking some condition and then iterate while codition is true.

Beside for loop we have some slightly newer methods : 
for ... in / for ... of
for ... in and for ... of are newer tools but very handy ones!
We use for ... in when working with objects and for ... of when working with arrays. (Think 'for-in object'!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


-how can I access to value in object : catData[kay]

let catData = { name: "Zelda", age: 3, markings: "calico" };

for (const key in catData) {
  console.log(`${key}: ${catData[key]}`);
	// console.log(key, catData[key])
}


let cats = ["Zelda", "Rumble", "Sam"];

for (const catName of cats) {
  console.log(`This cat's name is ${catName}`);
}



One nice reason to use a for ... in / for ... of over a forEach (see below) is that you can add a break in a for ... in / for ... of to 'escape' the loop. This is not possible in a forEach.


https://fireship.io/snippets/javascript-loops-pro-tips/
Sneak Peek: Some Array Iterator Methods (> 25 mins)
❓ What is an 'Array Iterator Method'?
A: A built in method that can be called on an Array and will do an action for each element in the Array
forEach (section timing eg. 5 mins)
•	 ❗ Advise students that really these belong in this afternoon as they are built in actions for the Array method but as they are related to the loops we've seen above, we will look at a few choice ones now
•	 ❔  has anyone used a forEach?
•	 🗣️  forEach is a method that can be called on any Array
const shoping = ["humus", "cucumber" , "lentil cakes"]
shoping.forEach(thing => console.log(`Buy ${thing}.`))
 
•	 🗣️ What type of data is in parentheses – function. forEach receives function as an argument. Then we can write code as:
const shoping = ["humus", "cucumber" , "lentil cakes"]

function buyThing(thing) {
    console.log(`Buy ${thing}.`)
    
}

shoping.forEach(buyThing)

console.log(shoping)

•	 ❔ What is  the name of a function that is passed to another function to be invoked at a later time (callback)
•	We could write function as a function expression:
const shoping = ["humus", "cucumber" , "lentil cakes"]

const buyThing = thing => console.log(`Buy ${thing}.`)

shoping.forEach(buyThing)

console.log(shoping)


•	So it doesn’t matter how it receives its function but the function does need to know how to handle an argument 
•	Concept of taking each element of the Array one by one and passing it into callback function is called yielding and then callback function just receives that as parameter.

What will happened if I do this? What I am actually doing now?
const shoping = ["humus", "cucumber" , "lentil cakes"]

const buyThing = thing => console.log(`Buy ${thing}.`)

//shoping.forEach(buyThing)

shoping.forEach(buyThing())

Do we need parentheses? No
We do not invoking function we just taking definition – reference to the function
If we invoke function with buyThis() then argument that forEach receives is return value of function which is currently undefined but if we add return “carrot” then forEach receives string ‘carrot”.
Which is not what we want we want to receive function and we need reference to the function because forEach will take that function and invoke it when appropriate.

what will happen if I do :
do you think that’s gonna work?

const shoping = ["humus", "cucumber", "lentil cakes"]

shoping.forEach(console.log)

It’s actually giving us a lot of info it has yielded each item plus some extra data about the item and console logged it


•	 ❗ Advise students that forEach is great for when you want to trigger an action but not so good for producing a return value
•	 💻 Show students ````let excited = arr.forEach(el => ${el.toUpperCase()}!)``` and ask what the return value might be
•	 🗣️ Tell students that if we are interested in a return value, we might use some other methods
•	This anatomy is used in lot of different methods, and when I say anatomy, I mean you are defining some collection, we are colling a method on it and method receives a callback function.




map (2 mins)
Has anyone used map?
•	 💻 Show students let excited = animals.map(el => (`${el.toUpperCase()}!`)) and ask what the return value might be
•	 ❔ Ask students if they think the original Array has been changed (no)
let animals = ["fish", "cat", "dog", "fox", "cow"]
let excited = animals.map(el => (`${el.toUpperCase()}!`))
console.log(animals)
console.log(excited)

map works in a similar way to forEach but the return values of each time the callback is executed, are returned in a new array.
some
some will run its callback function for each item in the collection until it hits one that makes the condition return true. At that point we can conclude that at least 'some' of the items in the collection meet the condition and therefore can exit and return true.

let animals = ["fish", "cat", "dog", "fox", "cow"]
animals.some(animal => console.log(animal.startsWith("c"))); //=> true



filter (2 mins)

filter's callback will also need to return a boolean value but this time it will be run for all items in the collection and any that make the condition return true will be placed into a new array that will become the return value of the filter. Does not change the original array what we ca see if console.log original and filtered array.

The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.


let animals = ["fish", "cat", "dog", "fox", "cow"]
let filteredAnimals = animals.filter(animal => (animal.startsWith("c")))   // >	(2) ['cat', 'cow']
//console.log(animals)
//console.log(filteredAnimals)


reduce (5 mins)
•	 🗣️ Reduce method is tricky
•	 🗣️ the reduce method is useful when we want to reduce all values of an array into a single one eg. summing all values. This is shown in the following example:
num = [1, 2, 3, 4]
//total is previousValue
num.reduce((total, nextVal) => total + nextVal, 0) // 10

What is happening here:  The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

•	 💻 Update the second argument to 100 and ask what they think the result will be
num.reduce((total, nextVal) => total + nextVal, 100)   //110

•	reduce can take an optional second argument of a custom 'starting point' for the running total. If no second argument is given, the first item will be used as the starting point. 

•	 🗣️ Tell students that they are more methods such as these and to check the documentation to find them!
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce






























