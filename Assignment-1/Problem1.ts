/////Problem 1



function sumArray(numbers: number[]): number{
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum;
}

const sums = sumArray([1,2,3,4]);
console.log(sums);
