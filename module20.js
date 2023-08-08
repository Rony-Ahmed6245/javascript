
// 2//----------------------------------
// function isEven(number){
//         const reminder = number % 2 ;
//     if(reminder === 0 ){
//         return true ;
//     }
//     else{
//         return false;
//     }
// }

// const number = 780121;
// const isEvenNum = isEven(number) ;
// // console.log(isEvenNum);

// const num3 = 8782;
// const isnum = isEven(num3)
// // console.log(isnum)
// // -----------------------------------

// 3//-----------------------------------

// function getArraySum(numbers){
//     let sum = 0;
//     for(let i = 0 ; i < numbers.length; i++){
//        const index = i ;
//        const elements = numbers[index];
//        sum = sum + elements ;
//     }
//     return sum / numbers.length;

// }

// const myNumber = [34, 39, 24 , 23, 75,  64, 36, 94, 54];
// const number1 = getArraySum(myNumber);
// console.log(number1)

// // function friendsAgeSum(age){
// //         let sum = 0 ;
// //         for(let i = 0 ; i <age.length; i++){
// //             const elements = age[i];
// //             sum = sum + elements;
// //         }
// //         return sum ;
// // }
// // const friendsAge = [12, 23, 12, 42, 34, 83, 34, 45];
// // const totalFriendsAge = friendsAgeSum(friendsAge);
// // console.log(totalFriendsAge)

// // 4//----------------------------------------------


// // function getOddNumberOfAnArry(prise){
// //     let oddArry = [];
// //         for(let i = 0 ; i < prise.length; i++){
// //             const index = i ;
// //             const elements = prise[index];
// //             if (elements % 2 !== 0){
// //                 oddArry.push(elements);
// //             }
// //         }
// //         return oddArry ;
// // }

// // const prise = [343, 234, 87, 98, 99, 433, 78, 089, 92, 93, 46, 78];
// // const oddnumArry = getOddNumberOfAnArry(prise);
// // console.log(oddnumArry);


// // const oddArrys = getArraySum(oddnumArry);
// // console.log(oddArrys);






// const holdingNumber =[12, 78, 78 ,656, 65, 87, 565, 089, 66];
// const smallNumber = Math.min(...holdingNumber);
// console.log(smallNumber);


// function culculateRectangkeArea(){
//     if (length <= 0  || height <= 0){
//         console.log("error")
//     }
//     const area = length * height ;
//     return area ;
// }

// const length = 0 ;
// const height = 0 ;

// const result =  culculateRectangkeArea(length, height);
// console.log(result)


// function findSmallestNumber(arr) {
//     let smallest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//     if ( arr[i] < smallest) {
//         smallest = arr[i];
//     }
//     }
//     return smallest;
//     }

//     const arr = [66, 76, 78, 56, 57, 85, 64];
//     const result = findSmallestNumber(arr);
//     console.log(result)


// function factorial(number){
//     let result = 1 ;
//  for(let i = number ; i >= i; i--){
//     result = result * i;
//  }
//  return result ;
// }
const num = 2;
const results = factorial(num);
console.log(results);