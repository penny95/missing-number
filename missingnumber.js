function missingNumber(numbers){
count=numbers[numbers.length-1];
var missing=new Array();
for(var i=1; i<=count; i++){
    if(numbers.indexOf(i)==-1){
        missing.push(i);
    }
}
return missing;
}

console.log(missingNumber([1, 2, 3, 5, 6, 7,9,17]));
