// OBJECT DECLARATION USING OBJECT LITERAL

// var person={};
// person.firstname="Mohit";
// person.lastname="Kushwaha";
// person.age=23;
// person.gender="male";
// person.fullname=function(){return person.firstname+person.lastname};
// person.details=function(){return this.firstname+" "+this.lastname+" "+this.age+" "+this.gender}
// document.write(person.fullname()+"<br>");
// document.write(person.details());


// var person={};
// person["firstname"]="Mohit";
// person['lastname']="Kushwaha";
// person['age']=23;
// person['gender']="male";
// person['fullname']=function(){return person.firstname+person.lastname};
// person['details']=function(){return this.firstname+" "+this.lastname+" "+this.age+" "+this.gender};
// document.write(person.fullname()+"<br>");
// document.write(person.details());

//DECLARATION AND INITIALIZATION OF OBJECT

// var person= { firstname:"Mohit",
//               lastname:"Kushwaha",
//               age:23,
//               gender: "male",
//               fullname:function(){ return this.firstname+this.lastname; }
//             };
// document.write(person.fullname());


// USING OBJECT CONSTRUCTOR

// var person=new Object();
// person['firstname']="Mohit";
// person['lastname']="Kushwaha";
// person['action']=function(){return "Hello I am Munendra";}
// document.write(person['lastname']);
// person.lang="Hindi";
// console.log(person);

//DELETE PROPERTIES 
// var person= { firstname:"Mohit",
//               lastname:"Kushwaha",
//               age:23,
//               gender: "male",
//               fullname:function(){ return this.firstname+this.lastname; }
//             };
//     delete person.firstname;
//     document.write(person.firstname+person.lastname);
//     console.log(person.firstname);

// FACTORY FUNCTION  ==  WHEN A FUNCTION RETURNS AN OBJECT IS KNOWN AS FACTORY FUNCTION WITHOUT USING NEW KEYWORD OR CLASSES
// function mobile(){
//     return {
//         model:'Galaxy',
//         price: function(){ return "Price Rs. 3000";}
//     };   
// }
// var samsung=mobile();
// document.write(samsung.model+" "+samsung.price());

// FACTORY FUNCTION WITH PARAMETER

// function mobile(model_no)
// {
//     return{
//     model:model_no,
//     price:function(){return "Price is Rs. 3000";}
//     };
// }

//  var samsung=mobile("Duos");
//  var lg=mobile("dont know");
//  console.log(samsung);
//  console.log(lg);

 // CONSTRUCTOR 

//  function Mobile()
//  {
//     this.model='3310';
//     this.price=function(){
//         document.write(this.model+" Price Rs. 3000");
//     }
 //}
//  var samsung=new Mobile();
//  samsung.price();

 // CONSTRUCTOR WITH PARAMETER

//  function Mobile(model_no)
//  {
//     this.model=model_no;
//     this.price=function(){
//         document.write(this.model+" Price Rs. 3000");
// }
//  }

//  var samsung=new Mobile("Nokia");
 //console.log(samsung.model);

 // CHECK EXIST PROPERTIES EXIST
 
//  // 1. USING TYPEOF
//  if(typeof samsung.model!=='undefined')
//  {
//     document.write("Available");
//  }
//  else{
//     document.write("Does not Exist");
//  }

 // 2. USING IN KEYWORD
//  if('model' in samsung)
//  {
//     document.write("Available");
//  } 
//  else{
//     document.write("Not Available");
//  }

// 3. hasOwnProperty()
// if(samsung.hasOwnProperty("model"))
// {
//     document.write("Available ");
// }
// else{
//     document.write("Not Available");
// }

// FOR IN LOOP
// for(var key in samsung)
// {
//     console.log(samsung[key]);
// }

// for(var key in samsung)
// {
//     if(typeof samsung[key]!=='function')
//     {
//         document.write(samsung[key]);
//         console.log(samsung[key]);
//     }
// }

//document.write(Object.keys(samsung));

// DEFINING A CLASS ES6
// class Customer{
     
//     constructor(name,age)
//     { 
//         this.name=name;
//         this.age=age;
//     }
//     show()
//     {
//         return this.name+this.age;
//     }
// }
// var cus=new Customer("Munendra Kumar Kushwaha", 23);
// console.log(cus.show());


// PROTOTYPE

// var mobile=function(model_no)
// {
//     // Instance Member
//     this.model=model_no;
//     this.price=3000;
// }
// var samsung=new mobile("Galaxy")
// console.log(samsung)
// // Prototype member
// mobile.prototype.color="Blue";
// console.log(mobile)

// // ITERATE INSTANCE MEMBER AND PROTOTYPE MEMBER
// //document.write(Object.keys(samsung));
// for(var key in samsung)
// {
//     document.write(key);
// }

// INHERITANCE

// function Mobile(){
//     this.a=10;
// }
// var m = new Mobile();
// Mobile.prototype.z=30;

// function samsung()
// {
//     Mobile.call(this);
//     this.b=20;
// }
// samsung.prototype=Object.create(Mobile.prototype);

// var s = new samsung();
// console.log(s.a, s.b);
// console.log(s.z);


// METHOD OVERRIDING
