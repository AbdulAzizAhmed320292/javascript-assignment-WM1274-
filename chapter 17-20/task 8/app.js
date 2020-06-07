


var array = [1 , 2 , 3];

var largest = array[0];
document.write("array items " + array);


for(var i=0;i<array.length;i++){

    if (array[i]>largest){
        largest = array[i];
    }
}

document.write("<br>" + "largest number in array is "+ largest);