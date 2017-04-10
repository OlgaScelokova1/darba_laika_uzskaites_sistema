
var username = document.getElementById("id_username");
var password = document.getElementById("id_password");

username.defaultValue = "Enter Username";
password.defaultValue = "Enter Password";

username.style.color = "#a8b6c3";
password.style.color = "#a8b6c3";

username.onclick = function (){
    username.style.color = "black";
    if (username.value == "Enter Username") username.value = "";
};

password.onclick = function (event){
    event.stopPropagation();
    password.style.color = "black";
    if (password.value == "Enter Password") password.value = "";
};

$(document).click = function(){
    if (password.value == "") {
        password.value = "Enter Password";
        password.style.color = "#a8b6c3";
    }
    if (username.value == "") {
        username.value = "Enter Username";
        username.style.color = "#a8b6c3";
    }
};