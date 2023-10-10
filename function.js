//FUNCTIONS


// ARGUMENT OBJECT
// function display(name,name2,name3)
// {
//     arguments[0]="Mohit";
//     document.write(arguments[0]+arguments[1]+arguments[2]);
//     document.write("<br>"+arguments.length);
//     document.write(arguments.callee);
// }
//  display("Munendra");


// MANY ARGUMENTS
// function display(a,b)
// {
//     var sum=0;
//     for(let i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];
//     }
//     console.log(sum);
// }
// display(10,20,30,40,50);


// DEFAULT PARAMETER
// function display(name,name2="monu")
// {
//    console.log(name+" "+name2);
// }
// display("Munendra","mohit");

// function fun(a=[101,102])
// {
//     console.log(a[0]+a[1]);
// }
// fun();

//REST PARAMETER

// function fun(a,...args)
// {
   
//    let l = 0;
//    while(l<args.length)
//    {
//     console.log(args[l]);
//     l++;
//    }
// }
// fun(10,20,30,40,50);

 // FUNCTION EXPRESSION
//  const add = function show(a,b)
//  {
//     return a+b;
//  };
//  console.log(add(3,7));

//ANONYMOUS FUNCTION
// var add = function(a,b)
// {
//     return a+b;
// };
// console.log(add(7,9));

// PASSING ANONYMOUS FUNCTIONS AS ARGUMENT
// function display(myfun,a,b)
// {
//     return myfun(a,b);
// }

// const add=function(a,b)
// {
//     return a+b;
// }
// document.write(display(add,3,4));

// RETURNING ANONYMOUS FUNCTION 
// function display(a){
//     return function(b){
//         return a+b;
//     }
// }
// var af=display(10);
// document.write(af(20));

// ARROW FUNCTION 
// const add = (a,b)=>{
//     return a+b;
// }
// document.write(add(3,4));

// const add1 = a =>{
//     return a;
// }
// document.write(add1(3));

// const add2 = () =>{
//     return 4;
// }
// document.write(add2());


// IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
// (function(){document.write("Munendra Kushwaha")})();
// (function(a,b)
// {document.write(a+b)})
// (3,2);