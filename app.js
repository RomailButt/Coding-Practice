
//  Call Back

// function add(callback){

//     console.log("Addition of two numbers");
//    callback();

// }

// function afterTask(){
    
//         console.log("This is a callback function");
    
//     }

// add(afterTask);


//  Promises In JavaScript

// const myPromise=new Promise((resolve,reject)=>{

//     let success=true;
//     setTimeout(()=>{
//         if(success){
//             resolve("Promise is resolved");
//         }else{
//             reject("Promise is rejected");
//         }
//     },3000);

// });

// console.log(myPromise);

// myPromise.then(()=>{
//     console.log("Success: ");
// console.log(myPromise);

// }).catch(()=>{
//     console.log("Error: ");
// console.log(myPromise);

// })


//  async and await in JavaScript


// const fetchData=()=>{

//     let success=true;
//     return new Promise((ressolve,reject)=>{
//         setTimeout(()=>{
//             if(success){

//                 ressolve("Data fetched successfully");
//             }
//             else{
//                 reject("Data not fetched");
//             }

//         },3000);
//     })}

// async function getData(){
//     try{
//         const data=await fetchData();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// getData()

// console.log("This is a async function");

//  Swap two numbers without using third variable

// let a=10
// let b=20


// a=a -b  //10-20=-10
// b=a+b    //-10+20=10
// a=b-a    //10 -(-10)=20

// console.log("a ===>",a);
// console.log("b ===>",b);


// [a,b]=[b,a]
// console.log("a ===>",a);
// console.log("b ===>",b);


// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a);  // 10
// console.log(b);  // 5


// let a=10;
// let b=20;
// let temp


// temp=a;
// a=b;
// b=temp;

// console.log("a ===>",a);    //20    

// spread operator
// const a=[1,3,4,5]
// const b=[2,4,5,6]
// const c=[...a,...b] 

// console.log(c,"c");


// function sum(...arr) {
//      ab;
//     ab=10
//     console.log(arr);
//     return arr
// }

// const arr = [1, 2, 3, 5, 6,4,5];
// const s = sum(arr);

// console.log(s);

// console.log(ab,"ab")

// const arr = [2, 3, 2, 4, 3, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     let count = 1;
//     if (arr[i] !== null) { // Check if the element has already been counted
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//                 arr[j] = null; // Mark as counted
//             }
//         }
//         console.log(arr[i] + " appears " + count + " times");
//     }
// }

// const arr = [1, 2, 3, 4, 5, 6];

// let targetSum=7

// for (var i = 0 ; i<arr.length ; i ++){
//     for( var j = i + 1 ; j < arr.length ; j ++){
//         if(arr[i] + arr[j]===targetSum){
//             console.log(arr[i],arr[j])
//         }
            
//     }
    
    
// }
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// const intersectionSortArr=[]


// for (var i = 0 ; i<arr1.length; i ++){
//     for (var j =0 ; j< arr2.length; j ++){
        
//         if( arr1[i]===arr2[j]){
//             intersectionSortArr.push(arr1[i])      
//         }
//     }
// }

// console.log(intersectionSortArr)

// let arr=[5, 4, 3, 2, 1]


// let arr2=[];

// for(var i = arr.length-1 ; i>=0 ; i --){
    
//     arr2.push(arr[i])
    
    

// }
// console.log(arr2)

// let arr=[5, 4, 3, 2, 1]


// for (var i =0 ; i<Math.floor(arr.length/2) ; i++){
    
//     let temp=arr[i];
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }

// console.log(arr)


// const arr = [1, 2, 4, 5, 6]; 
// const n = 6;
// const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
// console.log(totalSum)
// let arrSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
// }
// console.log(arrSum)
// const missingNumber = totalSum - arrSum;
// console.log(missingNumber);



// const arr = [1, 2, 4, 5, 6];
// const n = 6;

// let numberSet = new Set(arr);
// console.log(numberSet.has(1))
// // Check which number is missing
// for (let i = 1; i <= n; i++) {
//     if (!numberSet.has(i)) {
//         console.log(i); // Output: 3 (missing number)
//         break;
//     }
// }


// const str = "aabcccd";
// let count = {};

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (count[char]) {
//         count[char] += 1;
//     } else {
//         count[char] = 1;
//     }
// }

// let keys=Object.keys(count)

// for (var i =0 ; i<keys.length; i ++) {
   
//     console.log(`${keys[i]} appears ${count[ keys[i]]} times`);
// }



// const obj={
//     "name":"Maaz",
//     "company":"matz",
//     "location":"karachi"
// }

// for(let index in obj){
//     console.log(obj[index])
// }


// function elementFinder(str){
//     const arr=str.split('')
//     let count=0
//     // console.log(arr)
//     for( var i = 0 ; i < arr.length ; i++){
//         for(j = i+1; j < arr.length ; j++){
//             if(arr[i]===arr[j]){
//                 return arr[j-1]
//             }
//         }
//     }
// }

// console.log(elementFinder("majasaz"))

// function elementFinder(str) {
//     const arr = str.split('');
//     const frequency = {};

//     for (let i = 0; i < arr.length; i++) {
//         let char = arr[i];

     
//         if (frequency[char]) {
//             frequency[char] += 1;
//         } else {
//             frequency[char] = 1;
//         }

       
//         if (frequency[char] === 2) {
//             return arr[i-1];
//         }
//     }

//     return null;
// }

// console.log(elementFinder("majzasaz"));


// function sumOfEven(arr){
//     var sum =0

//     for(var i = 0 ; i < arr.length ; i++){
//         if(arr[i]%2==0){
//             sum += arr[i]
//         }
//     }
//     return sum

// }



// let arr=[1,2,3,4,5]
// console.log(sumOfEven(arr))


// function isAnagram(str1,str2){

//     let char=new Set(str1)
//     console.log(char)
//     // let arr = Array.from(char)
//     console.log([...char])
//     // console.log(arr)

//     // let c=char.ke
//     // console.log(c)
// }


// console.log(isAnagram("listen","netsil"))


// let str="arham"

// let obj=new Set(str)

// let arr=Array.from(obj)

// console.log(arr)



// let arr=[1,2,3,4,5,6]
// let str="sdfasfdaf"
// let arr=new Set(str)

// let obj={
//     name:"maaz",
//     company:"matz",
//     location:"karachi"
// }
// let arr2=[]
// let obj1=Object.values(obj)
// console.log(obj1)
// obj1.forEach((e,i)=>{
//     // console.log(e)

//     arr2.push(e)
// })

// console.log(arr2)

// ['3','24','5','43','56','8'].forEach((item)=>{
// console.log(item);

// })


// const arry=[
//     {
//         name:"maaz"
//     },
//     {
//         name:"maaz"
//     },
//     {
//         name:"maaz1"

//     },
//     {
//         name:"maaz2"

//     }
// ]

// const obj=new Set(arry)

// console.log(obj)


// const arr2={
//     [

//     ],
//     [

//     ]
// }



// function uniqueString(str){


//     let frequency={}
//     for (var i = 0 ; i < str.length; i++){
//         // console.log(str[i])
//         // let duplicate=false
//         let char=str[i]

//         if(frequency[char]){
//             return "no unique"
//         }
//         else{
//             frequency[char]=1
//         }

        
        
        
        
//     }
//     return "unique"


// }


// let str="dtter"
// console.log(uniqueString(str))


// function isUniqueString(str) {
//     // Convert the string to an array, sort it, and join it back to a string
//     const sortedStr = str.split('').sort().join('');

//     // Check for adjacent duplicates
//     for (let i = 0; i < sortedStr.length - 1; i++) {
//         if (sortedStr[i] === sortedStr[i + 1]) {
//             return "not unique";
//         }
//     }

//     return "unique";
// }

// // Testing the function
// console.log(isUniqueString("asda")); // Output: "not unique"
// console.log(isUniqueString("adge")); // Output: "unique"
// function isUniqueString(str) {
//     const sortedStr = str.split('').sort().join('');

//     for (let i = 0; i < sortedStr.length - 1; i++) {
//         if (sortedStr[i] === sortedStr[i + 1]) {
//             return "not unique";
//         }
//     }

//     return "unique";
// }

// console.log(isUniqueString("asda")); // Output: "not unique"
// console.log(isUniqueString("adge")); // Output: "unique"


// let str="maaz"

// let str1=str.split('')

// // console.log(str1)
// let data=str1.map((e,i)=>{


//     return e
// }

// )

// console.log(data.join(''))

// function getUniqueCharacters(str) {
//     const frequency = {};
//     let uniqueChars = "";

//     // Count frequency of each character and build unique character string
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (!frequency[char]) {
//             frequency[char]=1
//             uniqueChars+=char

//         }
//     }

//     // Return the unique characters as a string
//     return uniqueChars;
// }



// // Testing the function
// console.log(getUniqueCharacters("asda")); // Output: "not unique"



// function getUniqueCharacters(str) {
//     const frequency = {};
//     let uniqueArray = [];

    
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (!frequency[char]) {
//             frequency[char] = 1;
//             uniqueArray.push(char);
//         }
//     }

    

//     return uniqueArray;
// }

// // Testing the function
// console.log(getUniqueCharacters(['a','s','d','a'])); // Output: ["a", "s", "d"]
// // console.log(getUniqueCharacters("adge"));




// function LargestNum(arr){
//     let max=arr[0]

//     // console.log(max)
//     for(var i = 0 ; i < arr.length; i ++){
//        if(max<arr[i]){
//         max=arr[i]
//     }
// }
// return max

// }

// let arr=[1,3,5,7,3]

// console.log(LargestNum(arr))
// console.log(arr)



// function SecondLargestNum(arr){
//     let max=arr[0]

//     // console.log(max)
//     for(var i = 0 ; i < arr.length; i ++){
//        if(max<arr[i]){
//         max=arr[i-1]
//     }
// }
// return max

// }

// let arr=[1,3,8,7,3]

// console.log(SecondLargestNum(arr))




// function largestWorld(str){

//     let largestWorlds=''
//     let arr=str.split(' ')
//     for(var i = 0 ; i< arr.length; i++){
        
//         if(arr[i].length>largestWorlds.length){
//             largestWorlds= arr[i]
//         }
//     }
//     return largestWorlds

// }


// let str="hello howaeew are youdfsdf"


// console.log(largestWorld(str))

// function sortedArray(arr){


//     for( var i =0 ; i < arr.length; i++){
//         for(var j = i+1 ; j < arr.length-1 ; j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }

// let arr=[2,4,3,10,4,56]



// console.log(sortedArray(arr))


// let a=10
// let b=20


// a=b
// b=a

// console.log(a,b)


// function isPalindrome(str){

//     var arr=str.split('')
//     // console.log(arr)

//     for(var i = 0 ; i < Math.floor(arr.length/2) ; i++){
//         let temp= arr[i]
//         arr[i]=arr[arr.length -1 -i]
//         arr[arr.length -1 -i]=temp
//     }
//     return arr.join('')
// }

// var str="madam"


// console.log(isPalindrome(str))

// function isPalindrome(str){

//     // var arr=str.split('')
//     // console.log(arr)

//     let reverse =''
//     for(var i = str.length -1 ; i >=0 ; i--){
//         reverse +=str[i]
//     }
//     console.log(reverse)
//     return reverse==str
// }

// var str="madam"


// console.log(isPalindrome(str))





// var arr2;
// function uniqueArray(arr){
//     // console.log(arr);
//     arr2=[]
//     for(var i = 0 ; i < arr.length ; i ++){
//         if(!arr2.includes(arr[i])){
//             arr2.push(arr[i])
//         }
//     }
//     return arr2;
    

// }
// var arr=[1,4,5,7,3,3,8,9]

// console.log(uniqueArray(arr))
// console.log(arr2)


// var arr2;
// function uniqueArray(arr){
//     // console.log(arr);
//     arr2=[]
//     for (var i = 0; i < arr.length; i++) {
    
//         let isDuplicate=false
//         for (var j = 0; j < arr2.length; j++) {
//             // console.log(arr[i]===arr2[j])
//             if (arr[i] === arr2[j]) {
//                 isDuplicate=true
//                 break;

//             }
          
//         }
//         // console.log(isDuplicate,"isDup")
//         if(!isDuplicate){
//             arr2.push(arr[i])
//             // console.log(arr2)
//         }

        
//     }
//     return arr2
    

// }
// var arr=[1,4,5,7,3,3,8,9]

// console.log(uniqueArray(arr))
// console.log(arr2)

// var str1;
// function firstNonCharacter(str){
//     str1=''
//     for(var i = 0 ; i < str.length; i++){
//         let unique = true;
//         for (j = 0 ; j < str.length; j++){
//             if( str[i]===str[j] && i !==j){
//                  unique=false;
//                  break;
//             }
//         }

//         if(unique){
//             str1=str[i]
//             // console.log(str1)
//             return str1
//         }
//     }

//     return null
// }

// console.log(str1)
// console.log(firstNonCharacter("jwseisj"))



let frequency;
function firstNonCharacter(str){
    frequency={}
    let arr=str.split('')
    for(var i = 0 ; i < arr.length; i++){
        let char=arr[i]
        if(!frequency[char]){
            frequency[char]=1
        }
        else{
            frequency[char]++
        }
        
        
    }
    console.log(frequency)
    for (var i = 0; i< str.length; i++){
        if(frequency[str[i]]===1){
            return str[i]
        }
    }
    
    return frequency
}

console.log(frequency)
console.log(firstNonCharacter("jwsweis"))
