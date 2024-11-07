
{
    ///////Problem2


    
    const removeDuplicates = (number: number[]): number[]=>{
        return [...new Set(number)];
 }
 
 const result = removeDuplicates([1,1,2,3,3,4,5,5,6,6]);
 console.log(result)
 

}

