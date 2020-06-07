
//task 1
//===================================

var no1 = +prompt("enter first number :");
var no2 = +prompt("enter second number :");



document.write(" sum of " + no1 + " and " + no2 +  " is " + (no1+no2) );

//==============================================








//task 2
//===============================================



var no1 = +prompt("enter first number :");
var no2 = +prompt("enter second number :");


document.write( "<br>" + " sum of " + no1 + " and " + no2 +  " is " + (no1+no2) );
document.write("<br>"+" subtraction of " + no1 + " and " + no2 +  " is " + (no1-no2) );
document.write("<br>"+" division  of " + no1 + " and " + no2 +  " is " + (no1/no2) );
document.write( "<br>"+" multiplication  of " + no1 + " and " + no2 +  " is " + (no1*no2) );
document.write( "<br>"+" modulus  of " + no1 + " and " + no2 +  " is " + (no1%no2) );





//=====================================================









//task 3
//=====================================================




var variable;
document.write("Value after variable declaration is " + variable);
variable = 5;
document.write("<br>" + "Initial value: " + variable);
variable++;
document.write("<br>" + "Value after increment is:" + variable);
variable = variable + 7;
document.write("<br> " + "value after addition is " + variable);
variable--;
document.write("<br> "+"value after decrement is " + variable);
variable = variable % 3;
document.write("<br> " + "The remainder is " + variable);





//===================================================








//task 4
//======================================================




var ticket_price = +prompt("enter the price of a movie ticket: ");


document.write("cost of buying 5 movie ticket is "+ (ticket_price*5));





//================================================








//task 5
//=======================================



document.write("Table of 4: ");

for(var i = 1 ; i <= 10; i++){
     document.write("<br>"+ "4 x " + i + " = " + (4 * i ));
}





//========================================================











//task 6
//==========================================================



//first one
var celcius_temp = +prompt("enter the celcius temperature to be converted");
document.write("<br>"+ "temp in fahrenheught is " + ((celcius_temp*(9/5))+32));
   


//second one

var fahren_temp = +prompt("enter the fahrenh temperature to be converted");

document.write("<br>"+ "temp in celcius is " + ((fahren_temp-32)*(5/9)));












//==================================================







//task 7
//========================================================




var price_of_item_1 = +prompt("enter the price of item one");
var price_of_item_2 = +prompt("enter the price of item two");
var Ordered_quantity_of_item_1 = +prompt("enter the order quality of item one");
var Ordered_quantity_of_item_2 = +prompt("enter the order quality of item one");
var shipping_charges = +prompt("enter the shipping charges of item one");



document.write("<br>" + "price of item 1 is "+ price_of_item_1);
document.write("<br>" + "Quantity of  item 1 is "+ Ordered_quantity_of_item_1);
document.write("<br>" + "price of item 2 is "+ price_of_item_2);
document.write("<br>" + "Quantity of item 2 is "+ Ordered_quantity_of_item_2);
document.write("<br>" + "Shipping Charges  "+ shipping_charges);



document.write("<br>" + "Total cost of your order is  "+ ((price_of_item_1 * Ordered_quantity_of_item_1)+(price_of_item_2*Ordered_quantity_of_item_2)+(shipping_charges*2)));







//===============================================









//task 8
//=================================================



var total_marks = 850 ; 
var obtained_marks = +prompt("enter your obtained marks out of 850");
var percentage = (obtained_marks/total_marks)*100;
document.write("<br>"+ " total marks are "+ total_marks);
document.write("<br>"+ "obtained marks are "+ obtained_marks);
document.write("<br>"+"percentage of student is " + percentage);




//=================================================








//task 9
//===============================================


var US$ = 10 ; 
var riyal = 25;
document.write("total currency in pkr is" + ((10*104)+(25*28)));





//==========================================











//task 10
//============================================


var number = 5;
number = number + 5;
number = number * 10;
number = number / 2 ;
var number2 = 5 ;
document.write("calculation in a single expression " + "<br>" + (number2+5) + "<br>" +(number2*10)+ "<br> "+ (number2/2) ); 



//=============================================












//task 11
//=============================================


var current_year = +prompt("enter current year");
var birth_year = + prompt("enter birth year : ");
var your_possible_age1 = current_year - birth_year;
document.write("your age is "+your_possible_age1);




//==========================================













//task 12
//================================================





const PI =3.14;
var radius = +prompt("enter the radius of a circle");

document.write("the circumference of a circle is"+ (2 *PI*radius ));
document.write("<br>"+"area of a circle is "+ (PI *radius * radius));





//===============================================









//task 13
//=====================================================




var fav_snack = prompt("Enter your favourite snack : ");
document.write("favporite snack = " + fav_snack);

var current_age = +prompt("enter your current age : ");
document.write("current age = " + current_age );

var estimated_maximam_age = +prompt("enter your estimated maximam age: ");
document.write("Estimated maximum age = "+estimated_maximam_age);

var amount_of_snacks_per_day = +prompt("enter amount of snacks per day");
document.write("amount of snacks per day = "+amount_of_snacks_per_day);



document.write("You will need NNNN to last you until the ripe old age of "+estimated_maximam_age);



//=======================================================