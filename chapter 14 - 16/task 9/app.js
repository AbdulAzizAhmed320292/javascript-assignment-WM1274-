


var colors = [ "red " , "green " , "blue"];

var add_at_beginning = prompt("enter the color at the beginning");

colors.unshift(add_at_beginning);

for(var i =0 ;i < colors.length;i++){
document.write(colors[i]);
}


document.write("<br>");
document.write("<br>");
document.write("<br>");

var add_at_end = prompt("enter the color at the end");

colors.push(add_at_end);

for(var i =0 ;i < colors.length;i++){
document.write(colors[i]);
}

document.write("<br>");
document.write("<br>");
document.write("<br>");



var add_at_beginning1 = prompt("enter first one colors at the beginning:");
var add_at_beginning2 = prompt("enter another at the beginning:");
colors.unshift(add_at_beginning1);
colors.unshift(add_at_beginning2);


for(var i =0 ;i < colors.length;i++){
document.write(colors[i]);
}



document.write("<br>");
document.write("<br>");
document.write("<br>");




colors.shift();

for(var i =0 ;i < colors.length;i++){
    document.write(colors[i]);
    }
    
    
    
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    
    


 colors.pop();
 
 
 
for(var i =0 ;i < colors.length;i++){
    document.write(colors[i]);
    }
    
    
    
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    
    





// time consuming::