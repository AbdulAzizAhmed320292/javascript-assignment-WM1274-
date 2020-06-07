


var number = +prompt("enter a number for its multiplication table:");
var limit = +prompt("enter limit of the table ");

for(var i=1;i <=limit;i++ ){

    document.write("<br>" + number + " "+ " x "+ i+ " = "+ (number*i));
}