





var number = +prompt("enter a number for the multiplication table : "); 

if(number == 0x0A ){
    
 for(var i = 0 ; i <= 10 ; i++){
    document.write("<br>" + " 5 " + " x " + i + " = " + (number*i));

 }
}


else{
    
for(var i = 0 ; i <= 10 ; i++){
    document.write("<br>" + number + " x " + i + " = " + (number*i));

}
}


