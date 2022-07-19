// The Fortune Teller

function tellFortune (children, partner, location, job) {
    console.log ("You will be a ", job, "in ", location, ", and married to ", 
    partner, "with ", children, "kids.");
}
tellFortune (2, "Tom", "Berlin", "developer"); 
tellFortune (3, "Anna", "Rome", "painter");
tellFortune (2, "Lin", "Cluj", "dentist");  

// The Puppy Age Calculator

function calculateDogAge (puppyAge) {
    const dogAge = puppyAge * 7; 
    console.log("Your doggie is " + dogAge + " years old in dog years!")
}
calculateDogAge (7);
calculateDogAge (10);
calculateDogAge (18);



// The Lifetime Supply Calculator



function calculateSupply (age,amount) {
    const maxAge = 100 - age; 
    const lifetimeSupply = maxAge * Math.round(amount) * 365; 
    console.log (Math.round(lifetimeSupply));
}

calculateSupply (13, 6);
calculateSupply (26, 8.5);
calculateSupply (47, 5)




// The Geometrizer

function calcCircumference (radius) {
console.log ("The circumference", 2 * Math.PI * radius);
}

calcCircumference (5);

function calcArea (radius) {
    console.log ("The area is", Math.PI * radius **2)
}

calcArea (3);
calcArea (7);
calcArea (9);


// The Temperature Converter

function celsiusToFahrenheit () {
    let celsius = 34; 
    console.log (celsius, "C is ", celsius / 5 * 9 + 32, "F")
}

celsiusToFahrenheit()

function fahrenheitToCelsius () {
    let fahrenheit = 87; 
    console.log(fahrenheit, "F is ", (fahrenheit - 32) * 5 / 9, "C")
}

fahrenheitToCelsius();