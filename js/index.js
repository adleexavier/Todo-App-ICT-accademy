var director = function(){
    window.location.href = "main.html";
    console.log("hereeeeeeeeeeeeeeeeeeee");
    return false; 
    //  <form onsubmit="return submit_form()"> YOU CAN SEE THIS IN THE INDEX HTML PAGE
    // IF ONsubmit is false then.. it won't jump to the action parameter of the form( even though action parameter is not mentioned)
    // if onsubmit is true then submission of form happens and everything will be refreshed without causing a redirection
    // refer https://stackoverflow.com/questions/35037069/what-is-the-meaning-of-onsubmit-return-false-javascript-jquery
}

var validate = function(callback){
    var un = document.getElementById("Uname");
    var ps = document.getElementById("Pass");
    if (un.value != "admin" ||  ps.value != "12345")
    {
        alert("wrong password or usernam. Please try again")
    }
    else
    {
    return callback();   
    }
}
function submit_form(){
    return validate(director);

    
    
}
