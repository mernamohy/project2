function validate(){
var user = document.getElementById("user").value; 
var email = document.getElementById("email").value; 
var pass = document.getElementById("pass").value; 
var confirmPass = document.getElementById("confirm").value; 
var message = document.getElementById("error"); 
message.setAttribute("class","show");

if(user=="" && email=="" && pass=="" && confirmPass=="" && message==""){
    message.innerHTML="Enter Data In Form";
    return false;
}else if (user.lenght<5 || user>15){
    message.innerHTML="Enter Username 5-15 character";
    return false;
}else if (email.indexOf("@")==-1){
    message.innerHTML="Enter Valid E-mail";
    return false;
}else if (pass.lenght<8){
    message.innerHTML="Enter Strong Password";
    return false;
}else if (pass != confirmPass){
    message.innerHTML="Matching Password";
    return false;
}else{
    return true;
}
}