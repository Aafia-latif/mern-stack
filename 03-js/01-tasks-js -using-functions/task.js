// 1.Calculate Average of Three Numbers
function calculateAverage(num1,num2,num3){
    return (num1+num2+num3)/3;
}

let numOne=20;
let numTwo=20;
let numThree=30;

console.log("Average of Three Numbers = ",calculateAverage(numOne,numTwo,numThree).toFixed(2));



//2. calculate speed
function calculateSpeed(distance,time){
    return (distance*1000)/(time*60*60);
}
let distanceInKm;
distanceInKm=150;

let timeInHours;
timeInHours=2;

console.log("speed====", calculateSpeed(distanceInKm,timeInHours).toFixed(2));

// second data
distanceInKm=100;
timeInHours=1.5;
console.log("speed=====", calculateSpeed(distanceInKm,timeInHours).toFixed(2));

// 3. Total Price of Multiple Items

function calculateTotalPrice(item1Price,item2Price,item3Price){
    return item1Price+item2Price+item3Price;
}

let price1;
price1=25;

let price2;
price2=35;

let price3;
price3=15;

console.log("Total Price : ",calculateTotalPrice(price1,price2,price3));

// second data
price1=50;
price2=20;
price3=30;
console.log("Total Price : ",calculateTotalPrice(price1,price2,price3));


// 4. Compare Average Heights

function averageHeightCompare(firstHeight,secondHeight){
    return (firstHeight+secondHeight)/2;
}

let height1;
height1=1.75;

let height2;
height2=1.80;

// console.log("Average height = ", (height1+height2)/2,"meters");
console.log("Average height = ", (averageHeightCompare(height1,height2)).toFixed(2),"meters");
// data 2
height1=1.65;
height2=1.70;
console.log("Average height = ", (averageHeightCompare(height1,height2)).toFixed(2),"meters");


//5. Find Time Taken to Cover Distance
function timeTaken(distance,speed){
    return distance/speed;
}

let Speed;
Speed=60;

let Distance;
Distance=120;

console.log("Time Taken = ", (timeTaken(Distance,Speed)).toFixed(2),"hours");

// Data 2
speed=80;
Distance=160;
console.log("Time Taken = ", (timeTaken(Distance,Speed)).toFixed(2),"hours");

// 6.Check if a Number is Positive or Negative

function checkNumber(number){
    if(number>0){
        return "Number is Positive "; 
    }
    return "Number is Negative"
}

let num;
num=5;
console.log(checkNumber(num));


// Data 2
num=-3;
console.log(checkNumber(num));
// if(num>0){
//     console.log("Number is Positive "); 
// }else {
//     console.log("Number is negative");
// }

// 7.Check if a Number is Even or Odd
function checkEvenOddNumber(number){
    if(number%2==0){
        return "Number is Even "; 
    }
    return "Number is Odd"
}

let num2;
num2=12;
console.log(checkEvenOddNumber(num2));

// data 2

num2=7;
console.log(checkEvenOddNumber(num2));

// if(num2%2==0){
//     console.log("Number is even ");
// }else {
//     console.log("Number is odd");
// }

// 8.Calculate and Compare Two BMIs

// Data 1
function calculateBMIs(mass,height){
    return mass/(height*height);
}

function compareBMIs(bmiA,bmiB){
    if(bmiA>bmiB){
        return"Person A has higher BMI than Person B ";
    }else if(bmiA<bmiB){
        return"Person B has higher BMI than Person A ";
    }else{
        return "Person A and Person B have the same BMI ";
    }
}

let massA;
massA=68;

let heightA;
heightA=1.75;

let massB;
massB=85;

let heightB;
heightB=1.80;

let bmiA= calculateBMIs(massA,heightA);
let bmiB= calculateBMIs(massB,heightB);

console.log(compareBMIs(bmiA,bmiB));
// console.log(compareBMIs(bmiA,bmiB));



// Data 2

massA=72;

heightA=1.60;

massB=72;

heightB=1.70;

bmiA= calculateBMIs(massA,heightA);
bmiB= calculateBMIs(massB,heightB);

console.log(compareBMIs(bmiA,bmiB));

// 9.Grade Calculator

function calculateGrade(marks){
    switch(true){
        case marks >=90:
            return"Grade A";
            // break;
        case marks >=80:
            return"Grade B";
            // break;
        case marks >=70:
            return"Grade C";
            // break;
        
        default:
            return"Grade D";
    }

}

// Data 1

let score;
score=85;

let result= calculateGrade(score);
console.log(result);

// Data 2

score=65;
result= calculateGrade(score);
console.log(result);

// 10. Check Voting Eligibility

function checkEligibleForVote(Age)
{
    if(age>=18){
        return"Eligible to vote";
    }
        return"Not eligible to vote";
}
// Data 1

let age;
age=20;
console.log(checkEligibleForVote(age));

// Data 2

age=16;
console.log(checkEligibleForVote(age));


// 11.Check if a Triangle is Valid

function checkTriangle(angleOne,angleTwo,angleThree){
    let sum=angleOne+angleTwo+angleThree;
    if(sum==180){
        return"Valid Triangle ";
    }
        return"Invalid Triangle ";
    
}

// Data 1

let angle1;
angle1=60;

let angle2;
angle2=60;

let angle3;
angle3=60;

console.log(checkTriangle(angle1,angle2,angle3));

// Data 2

angle1=90;

angle2=45;

angle3=50;

console.log(checkTriangle(angle1,angle2,angle3));
