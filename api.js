// GET API USING XMLREQUEST

const rqturl = "https://api.github.com/users/munendra-successive";
var xhr = new XMLHttpRequest();
//console.log(xhr.readyState);
xhr.open('GET',rqturl);
//console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4)
    {
        const data = this.responseText;
        // console.log(this.responseText);
        //console.log(typeof data);
        data_obj = JSON.parse(data);
        console.log(`${data_obj.login} \n ${data_obj.public_repos}`);
    }
}
xhr.send();
//console.log(xhr.readyState);

