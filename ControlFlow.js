    // Logical && as control flow 
// const driveCar = () => console.log("Vroom")
// let age = 32
// console.log(age > 20 && driveCar())

// let prospect = { name: 'Beth', pets: 0 }
// const sendAd = p => console.log(`Hey, ${p.name}, need pet insurance for your ${p.pets} best friends?`)
// console.log(prospect.pets && sendAd(prospect))

    // Ternary statements 
// let age = 20
// const driveCar = () => console.log("Vroom")
// console.log(age > 16 ? driveCar() : 'Nope!') 
// let age = 15
// const driveCar = () => console.log("Vroom")
// console.log(age > 16 ? driveCar() : 'Nope!') 

    // If Statements
// let num = 4
// if (num < 0) {
//     console.log("positive") 
// } 
    
// let num = 0
// if (num > 0) {
//     console.log("positive") 
// } else {
//     console.log("negative")
// }

// function fizzbuzz(num) {
//     if (num % 5===0) {
//          console.log("buzz")
//      } else if (num % 3===0) {
//          console.log("fizz")
//      } else if (num %3 === 0 && num % 5===0) {
//          console.log("fizzbuzz")
//      } else {
//          console.log(num) 
//      }
//  }

//  fizzbuzz(15)
 
       

 


    // switch statements 
// let day = "Tuesday"
// switch (day) {
//     case "Monday":
//         console.log("no");
//     break;
//     case "Tuesday":
//         console.log("today");
//     break
//     case "Wednesday":
//         return("no agan");
//     default:
//         console.log("other day");
//     break;
// }
x =15
switch (true) {
    case (x % 5 === 0 && x % 3 === 0):
        console.log("FizzBuzz");
        break;
    case x % 3 === 0:
        console.log("Fizz");
        break;
    case x % 5 === 0:
        console.log("Buzz");
        break;
    default:
        console.log(x);
        break;
}