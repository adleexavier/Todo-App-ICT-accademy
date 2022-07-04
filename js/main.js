// AJAX

var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange =()=>{
    if(xhttp.readyState == 4 && xhttp.status ==200 ){
        var data = JSON.parse(xhttp.responseText);
        let inht= '';
        for(i=0;i<data.length;i++){
            inht+=` <li style ="color:yellow;"><input type = checkbox class = cbox >${data[i].title}</li>`            
        }
        document.getElementById("dropit").innerHTML=inht;      
    }
} 


xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

var counter= 0;

const alertCheck=()=>{
    return new Promise((resolve,reject)=>{
        if(counter===5){ resolve(counter);}
        else if(counter>5) {reject();}
    })
}

const promiseCheck=()=>{
    alertCheck()
    .then((x)=>{
        alert("You have completed "+x+" todos!");
    })
    .catch(()=>{
        alert("time over");
    })
}



$("#dropit").on('change','.cbox',()=>{
if($(".cbox").prop("checked")==true){
    counter++;
    console.log(counter);
}
else{
    counter--;
}
promiseCheck();

})
    
 