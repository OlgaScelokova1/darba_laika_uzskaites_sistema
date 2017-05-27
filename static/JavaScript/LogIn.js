var showErrorUsername = document.getElementById("showErrorUsername");
var showErrorPassword = document.getElementById("showErrorPassword");

if(document.getElementById("usernameError").innerHTML){
    showErrorUsername.style.display = "inherit";
    showErrorUsername.style.color = "red";
    showErrorUsername.style.fontStyle = "italic";
}
else{
    showErrorUsername.style.display = "none";
}

if(document.getElementById("passwordError").innerHTML){
    showErrorPassword.style.display = "inherit";
    showErrorPassword.style.color = "red";
    showErrorPassword.style.fontStyle = "italic";
}
else{
    showErrorPassword.style.display = "none";
}