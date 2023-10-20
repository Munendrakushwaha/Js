// USING NORMAL FUNCTION

// const datas =[
//     {name:"Ajay",Profession:"Software Engineer"},
//     {name:"Anuj",Profession:"Software Engineer"}
// ];

// function getDatas(){
//     setTimeout(()=>
//     {
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000)
// }

// function createdata(newdata){
//     setTimeout(()=>{
//         datas.push(newdata);
       
//     },2000)
// }

// getDatas();
// createdata({name:"Monu",Profession:"Software Engineer"},getDatas);



//  USING CALLBACKS


// const datas =[
//     {name:"Ajay",Profession:"Software Engineer"},
//     {name:"Anuj",Profession:"Software Engineer"}
// ];

// function getDatas(){
//     setTimeout(()=>
//     {
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000)
// }

// function createdata(newdata,callback){
//     setTimeout(()=>{
//         datas.push(newdata);
//         callback();
//     },2000)
// }

// // getDatas();
// createdata({name:"Monu",Profession:"Software Engineer"},getDatas);


// USING PROMISES


// const datas =[
//     {name:"Ajay",Profession:"Software Engineer"},
//     {name:"Anuj",Profession:"Software Engineer"}
// ];

// function getDatas(){
//     setTimeout(()=>
//     {
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000)
// }

// function createdata(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            datas.push(newdata);
//            let error=false;
//            if(!error)
//            {
//             resolve();
//            }
//            else
//            {
//             reject("error");
//            }
//         },2000)
//     })
// }

// // getDatas();
// createdata({name:"Monu",Profession:"Software Engineer"}).then(getDatas);

// USING ASYNC AND AWAIT


// const datas =[
//     {name:"Ajay",Profession:"Software Engineer"},
//     {name:"Anuj",Profession:"Software Engineer"}
// ];

// function getDatas(){
//     setTimeout(()=>
//     {
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },10)
// }

// function createdata(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(newdata);
//             resolve();
//         },2000)
//     })
// }

// async function caller()
// {
//     console.log(new Date().getTime());
//     const ans = await createdata({name:"Mohit",Profession:"Project Manager"});
//     console.log(new Date().getTime());
//     getDatas();
// }

// caller();





// Creation of promise
// Do an async task
// DB calls, cryptography, network

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     },1000)
// });

// promiseOne.then(function(response){
//     console.log("promise consumed");
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 is complete");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 consumed");
// })

// const promiseThree = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//       resolve({username:"Chai",email:"chai@example.com"})
//     },1000)
// });


// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "monu",password:"12345"})
//         }
//         else{
//             reject("error wrong");
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })


// const promiseFive = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "successive",password:"12345"})
//         }
//         else{
//             reject("Js went error wrong");
//         }
//     },1000)
// });

// async function consumePromiseFive()
// {
//     try{
//     const response = await promiseFive;
//     console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive();

// async function getAllUsers()
// {
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error)
//     {
//         console.log("E: ",error);
//     }
// }

// getAllUsers();


// fetch("https://jsonplaceholder.typicode.com/users").then(function(response)
// {
//     return response.json();
// }).then(function(response){
//     console.log(response);
// })
// .catch(function(error)
// {
//     console.log(error);
// })