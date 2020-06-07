

var array = [1 , 2 , 3];

var smallest = array[0];
document.write("array items " + array);


for(var i=0;i<array.length;i++){

    if (array[i]<smallest){
        smallest = array[i];
    }
}

document.write("<br>" + "smallest number in array is "+ smallest);