/*  console.log(2+2);   addition
    console.log(2-2);  for subtraction
    console.log(2*2);  for multiplication
    console.log(2**2); exponentiation
    console.log(2/2);   division returns the questiont
    console.log(2%2);   modulus division returns the remainder*/


let str1="abc";
let str2="def";
console.log(str1+str2); // concatination of string


//number + string
console.log("1"+2);// ->12
console.log(1+'2');// ->12

console.log("1"+2+2);//->122
console.log(1+2+"2");//->32 , here it was first treated as number resulting in adding 1&2 and then concanting it with string

console.log(+true);//->1




/*comparision operators
    ==      equal to 
    ===     strictly equal to, checks the value as well as datatype
    !=,!==  not equal to, strictly not equal to
    >,<     greater than , less than
    >=,<=   greater tha equal to , less than equal to     
     */

console.log("2">1); // -> true

console.log(null>0);// ->false
console.log(null==0);// ->false
console.log(null>=0);// ->true
        /*this happens because the euality check(==) and comparisons(<=,>=) work differently
          comparisons convert null to a number, treating it as 0
          thats why null>=0 is true  but  null>0 is false*/



