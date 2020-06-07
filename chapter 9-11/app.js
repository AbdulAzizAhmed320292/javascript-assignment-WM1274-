
//task 1
//====================================


var city_name = prompt("enter city name :");




if(city_name = karachi){

    alert("welcome to the city of lights");

}

else{
    alert("any other city ");
}




//=========================================









//task 2
//=========================================



var number = +prompt("enter gender 1 for male and 2 for female");

if(number === 1){
    document.write("GOOD morning Sir" );
}

else if( number === 2 ){
    document.write("Good morning madam");
}
else{
    document.write("others");
}





//=================================================













//task 3
//================================================


var input  = +prompt("enter color : 1 for red and 2 for Green and 3for Yellow: ");
if(input === 1){
    document.write("Must Stop:");
}
else if(input === 2){
    document.write("Move Now");

}

else if(input === 3){
    document.write("ready to move:");

}




//=============================================















//task 4
//=================================================


var input = prompt("enter fuel in litres ");
var fuel = parseFloat(input);


if(fuel < 0.25 ){
    document.write("please refill fuel in your car: ");
}

else{
    document.write("ok !!!");
}



//===================================================











//task 5
//=======================================================




var a = 4;
if (++a === 5){ alert("given condition for variable a is true"); } 






var b = 82; 
if (b++ === 83){ alert("given condition for variable b is true"); } 

var c = 12; 
if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 

var materialCost = 20000; 
var laborCost = 2000;
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost){
       alert("The cost equals"); 
   } 

if (true){ alert("True"); 
} if (false){ alert("False"); } 




if("car" < "cat"){ alert("car is smaller than cat"); } 



//========================================================














//task 6
//==================================================




var subject1 = +prompt("enter subject1 marks");
var subject2 = +prompt("enter subject2 marks");
var subject3 = +prompt("enter subject3 marks");

var total_marks = +prompt( "enter total marks ");


var percentage = (((subject1+subject2+subject3)/total_marks)*100);



if(percentage >= 80 ){
    document.write("<br>" + "you got A+1 grade ");
}
else if(percentage>=70 ){
    document.write("<br>" + "you got A grade");

}


else if (percentage>=60 ){
    document.write("<br>" + "you got B grade ");

}


else{
    document.write("<br>" + "you are fail ");

}






document.write("<br>"+"MARK SHEET :");

document.write("<br>"+"Total MArks = "+total_marks);
document.write("<br>"+"Marks Obtained  = "+(subject3+subject1+subject2));
document.write("<br>"+"percentages = "+percentage);




//====================================================