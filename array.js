

// USING ARRAY LITERAL

// var arr=[];
// arr[0]='monu';
// arr[1]='mohit';
// arr[34]='munendra';
// document.write(arr);

// var arr=["monu","Munendra",1];
// console.log(arr);
// document.write(arr);
// document.write(typeof(arr));


// USING ARRAY CONSTRUCTOR

// var arr = new Array(3);
// var arr1=new Array("Monu","Munendra",2,3,4);
//delete arr1[0];
//document.write(arr1, arr1.length);

// FOR EACH LOOP
// arr1.forEach(function(value,index){
//     document.write(index);
// })


// CONCAT()
// var ar=["Monu","Munendra",1,2,3];
// var ar2=["Mohit",5,6];
// console.log(ar.concat(ar2,["Hello",7]));


// JOIN() -- return string
var ar=["Monu","Munendra",1,2,3];
//console.log(ar.join(" "));

// REVERSE() -- make change in existing array
//ar.reverse();
//console.log(ar);

// SLICE() -- RETURN  NEW ARRAY
// var newarr=ar.slice(2,4);
// console.log(newarr);
// console.log(ar.slice(-3,-1));

// toString()  -- automatically invoked when we print the array
//console.log(ar.toString());

// Array.isArray() -- to check whether a passed argument is an array or not
// let str="My name is munendra";
// console.log(Array.isArray(ar));

// Splice()  --  Inplace remove existing elements or adding new elements
//ar.splice(2,1,"hi");
// ar.splice(2);
// console.log(ar);

// indexOf() -- find the index of given element -> return -1 not found 
console.log(ar);
// console.log(ar.indexOf(11));

// fill() -- Inplace
// ar.fill("Mahesh",1,4);
// console.log(ar);

// unshift method -- add elements at beginning and change length of the array and returns it
// console.log(ar.unshift("Hello Dear"));
// console.log(ar);

// push()-- add one or more element at end of array and return new length of array
// console.log(ar.push(99,90));
// console.log(ar);

// shift() -- remove first element of array and return it
// console.log(ar.shift());
// console.log(ar);

// pop() -- removes last element of array and return it
// console.log(ar.pop());
// console.log(ar);

