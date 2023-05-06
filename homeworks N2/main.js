// Arithmetic Operators on numbers
/* 
Problem 1: 

create a variable and assign value 5
and add following statements (original variable should change on every step):
1. add 2
2. substract 6
3. multiply by 30
4. divide by 2
5. modulo 5
6. exponent by 3
*/

let = 5;
console.log(5 + 2);
console.log(5 - 6);
console.log(5 * 30);
console.log(5 / 2);
console.log(5 % 5);
console.log( 5 ** 3);

let = 5;
console.log(5 + 2);
console.log(7 - 6);
console.log(1 * 30);
console.log(30 / 2);
console.log(15 % 5);
console.log( 0 ** 3);




/*
Problem 2:

repeat same steps but using assignment operators
*/


/* Comparison Operators */
/*
Problem 3:

Compare following statements and log them in console:
1. does 0.1 + 0.2 equals to 0.3?
2. does true (as a boolean) equals to "true"?
3. does 1 + 7 not equals to 8?
4. is 10 in power 5 greater than 9 in power 6?
5. is 17 divided 6 less than or equal to 4?
*/


let = 0.1 + 0.2 
let = 1 + 7 
let = 10 ** 5 
let = 9 ** 6
let = 17 / 6


console.log(0.1 + 0.2) 
console.log(0.1 + 0.2 === 0.3)
console.log(1 + 7 != 8)
console.log(10 ** 5 > 9 ** 6 )
console.log(17 / 6 <= 4)

/*
Problem 4:

create 3 vraiable name, age and price 
price should be 35
assign other values to them by using prompt
program should do the following:
1. if user is underage it should say so and price should be free (0)
2. if user's name is "James" and age is 25 then it should give them discount by 20%
3. any other case price should stay the same
4. log user's name, age and how much should they pay
*/


let age = 17
let price = 35
let userName = "james"
let jamesAge =25

if (age < 18) {
    console.log ('price zero' );
}
if ( userName = "james" && jamesAge === 25 ) {
    console.log('discount 20% ')
}

else {
    console.log ('you may enter')
}
