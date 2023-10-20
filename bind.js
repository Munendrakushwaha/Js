// apply, call, bind
// call => 
let userDetails={
    name:"Monu",
    age:23,
    designation:"trainee",
    printDetails:function(){
        console.log(this+" "+this.name+" "+this.age+" "+this.designation);
    }
}

let userDetails2={
    name:"Mohit",
    age:25,
    designation:"Engineer",
    printDetails:function(){
        console.log(this+" "+this.name+" "+this.age+" "+this.designation);
    }
}
// userDetails.printDetails();
// userDetails.printDetails.call(userDetails2);// fucntion borrow
// var  printDetails=function(){
//     console.log(this+" "+this.name+" "+this.age+" "+this.designation);
// }

// var  printDetails=function(state,country){
//     console.log(this+" "+this.name+" "+this.age+" "+this.designation+" "+state+" "+country);
// }
// printDetails.call(userDetails);
// printDetails.call(userDetails2);

// printDetails.call(userDetails,"Uttar Pradesh","India");
// printDetails.call(userDetails2,"Noida","Sri lanka");


// apply => argument as an arraylist

var  printDetails=function(state,country){
    console.log(this.name+" "+this.age+" "+this.designation+" "+state+" "+country);
}

// printDetails.apply(userDetails,["uttar pradesh","India"])

// bind => stores copy in a variable and call it later

const newfun = printDetails.bind(userDetails,"Uttar Pradesh","India");
newfun();