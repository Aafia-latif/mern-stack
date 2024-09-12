// 1.Calculate Average of Three Numbers

let numOne=10;
let numTwo=20;
let numThree=30;

console.log("Average of Three Numbers = ",(numOne+numTwo+numThree)/3);



//2. calculate speed
let distanceInKm;
distanceInKm=150;

let timeInHours;
timeInHours=2;

console.log("speed====", distanceInKm/timeInHours);

// second data
distanceInKm=100;
timeInHours=1.5;
console.log("speed=====", distanceInKm/timeInHours);

// 3. Total Price of Multiple Items

let price1;
price1=25;

let price2;
price2=35;

let price3;
price3=15;

console.log("Total Price : ", price1+price2+price3);

// second data
price1=50;
price2=20;
price3=30;
console.log("Total Price : ", price1+price2+price3);


// 4. Compare Average Heights
let height1;
height1=1.75;

let height2;
height2=1.80;

// console.log("Average height = ", (height1+height2)/2,"meters");
console.log("Average height = ", ((height1+height2)/2).toFixed(2),"meters");
// data 2
height1=1.65;
height2=1.70;
console.log("Average height = ", ((height1+height2)/2).toFixed(2),"meters");


//5. Find Time Taken to Cover Distance
let speed;
speed=60;

let Distance;
Distance=120;

console.log("Time Taken = ", (Distance/speed).toFixed(2),"hours");

// Data 2
speed=80;
Distance=160;
console.log("Time Taken = ", (Distance/speed).toFixed(2),"hours");

// 6.Check if a Number is Positive or Negative
let num;
num=5;
if(num>0){
    console.log("Number is Positive "); 
}else {
    console.log("Number is negative");
}

// Data 2
num=-3;
if(num>0){
    console.log("Number is Positive "); 
}else {
    console.log("Number is negative");
}

// 7.Check if a Number is Even or Odd

let num2;
num2=12;
if(num2%2==0){
    console.log("Number is even ");
}else {
    console.log("Number is odd");
}

// data 2

num2=7;
if(num2%2==0){
    console.log("Number is even ");
}else {
    console.log("Number is odd");
}

// 8.Calculate and Compare Two BMIs

// Data 1

let massA;
massA=68;

let heightA;
heightA=1.75;

let massB;
massB=85;

let heightB;
heightB=1.80;

let bmiA= massA/(heightA*heightA);
let bmiB= massB/(heightB*heightB);

if(bmiA>bmiB){
    console.log("Person A has higher BMI than Person B ");
}else if(bmiA<bmiB){
    console.log("Person B has higher BMI than Person A ");
}else{
    console.log("Person A and Person B have the same BMI ");
}

// Data 2

massA=72;

heightA=1.60;

massB=72;

heightB=1.70;

bmiA= massA/(heightA*heightA);
bmiB= massB/(heightB*heightB);

if(bmiA>bmiB){
    console.log("Person A has higher BMI than Person B ");
}else if(bmiA<bmiB){
    console.log("Person B has higher BMI than Person A ");
}else{
    console.log("Person A and Person B have the same BMI ");
}

// 9.Grade Calculator

// Data 1

let score;
score=85;

switch(true){
    case score >=90:
        console.log("Grade A");
        break;
    case score >=80:
        console.log("Grade B");
        break;
    case score >=70:
        console.log("Grade C");
        break;
    
    default:
        console.log("Grade D");
}

// Data 2

score=65;

switch(true){
    case score >=90:
        console.log("Grade A");
        break;
    case score >=80:
        console.log("Grade B");
        break;
    case score >=70:
        console.log("Grade C");
        break;
    
    default:
        console.log("Grade D");
}

// 10. Check Voting Eligibility

// Data 1

let age;
age=20;

if(age>=18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

// Data 2

age=16;

if(age>=18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

// 11.Check if a Triangle is Valid

// Data 1

let angle1;
angle1=60;

let angle2;
angle2=60;

let angle3;
angle3=60;

let sum=angle1+angle2+angle3;
if(sum==180){
    console.log("Valid Triangle ");
}else{
    console.log("Invalid Triangle ");
}

// Data 2

angle1=90;

angle2=45;

angle3=50;

sum=angle1+angle2+angle3;
if(sum==180){
    console.log("Valid Triangle ");
}else{
    console.log("Invalid Triangle ");
}