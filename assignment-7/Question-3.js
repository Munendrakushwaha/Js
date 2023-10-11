// function fetchData(callback){
//     setTimeout(() =>{
//         callback(null,"Data Fetched successfully");
//     },1000)
// }
// function callback(str,msg)
// {
//     console.log(str,msg);
// }
// fetchData(callback);

function fetchData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Fetched successfully")
            //reject("Failed")
        },1000)
       
    })
}

fetchData().then(response => { console.log(response);}).catch(error=>{console.log(error);})