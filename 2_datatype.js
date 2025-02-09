"use strict";//treat all JS code an newer version

//primitive data type
let number=23434; //number =>2 to power 53
                //bigint special type when the number is very large beyond Javascript number range
let srting=`backtick`//squence of character enclosed in '',"" or ``(backtick)
let bool=true //boolean => true/false
let va=null // null meanings empty. Variables are assigned this value intentionally, null is a standalone value 
let state // undefined, variable is declared but no value is assigned 
//typeof is used to find out datatype of the variable
console.log(typeof va) //datatype of null is object
console.log(typeof state)//datatype of varibles which are declared but are not initialized is undefine

let mysymbol=Symbol();//Symbol() creates a unque datatype everytime they are called
                      //Even if two symbols have the same description, they are not equal 
const ac=Symbol('id');
console.log(ac);// ->Symbol(id)
const df=Symbol('id');
console.log(df);// ->Symbol(id)
console.log(ac==df);// ->false


/* Primitive datatype stores the data in stack 
        changes are done in the copy 

    Non primitive (Reference) data type stores in heap
        changes are done int the original value
 */


//Non primitive data type
let obj={   //object data type
    person:"XYZ",  // each property is separated by ,
    id:123         // properties can be assigned through Dot notation or Bracket notaion
}                  //console.log(obj.person); // Output: "XYZ"
                   //console.log(obj["id"]);  // Output: 123
let fruits=['apple','orange','plum'];//array