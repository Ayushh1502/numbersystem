const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  
let primearray = [];
for(i=0;i<numbers.length;i++){
    let count = 0;
    for(j=1;j<= numbers[i];j++){
        if(numbers[i]%j==0){
            count++
        }
    }
    if(count<=2){
        console.log(numbers[i],"is a prime number")
        primearray.push([ numbers[i]]);
    }
}

// find maximum

let max = primearray[0];
for(i=1;i<primearray.length;i++){
    if(primearray[i]>max){
        max = primearray[i];
    }
}
console.log(max,"is the maximum number in the Prime Array")

// find minimum

let min = primearray[0];

for(i=1;i<primearray.length;i++){
    if(primearray[i] < min){
        min = primearray[i];
    }
}
console.log(min,"is the minimum number in the prime array");

let sum = 0;

for(i=0;i<primearray.length;i++){
    sum = sum + primearray[i];
}
console.log(sum,"is the total of the prime array")