
const num1 = 59;
const num2 = 57 ;
const num3 = 53;
const num4 = 100;
// if(num1 > num2 && num1 > num3){
//     console.log(num1, "this number us largest");
// }
// else if( num2 > num1 && num2 > num3){
//     console.log(num2,"this number is largest")
// }
// else{
//     console.log(num3, 'this number is largest')
// }

// const largestNumber = Math.max(num1, num2, num3);
// console.log(largestNumber);

// function largestNumber(num1, num2, num3){
//         if(num1 > num2 && num1 > num3){
//         return num1 ;
//     }
//     else if( num2 > num1 && num2 > num3){
//         return num2 ;
//     }
//     else{
//         return num3 ;
//     }
// }

// const results = largestNumber(num1, num2, num3);
// console.log(results)


// function largestNumber(num1, num2, num3, num4){
//     const result = Math.max(num1, num2, num3, num4);
//     return result ;
// }

// const results = largestNumber(num1, num2, num3, num4);
// console.log(results)


function largestNumber(prise){
    let largest = prise[0] ;
    for(let i = 0 ; i <= prise.length ; i ++ ){
        const index = i ;
        const elements = prise[index];

        if(elements > largest ){
            largest = elements ;
        }
    }
    return largest ;
}



const prise = [23, 45, 978, 53, 93, 22, 89, 67, 97, 67, 86, 56];
const result = largestNumber(prise)
console.log(result)