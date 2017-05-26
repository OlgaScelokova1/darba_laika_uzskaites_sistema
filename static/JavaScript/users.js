$(document).ready(function() {

    var allUsername = document.getElementsByClassName("allUsername");


    $('#username').on('input', function() {
        var surname = document.getElementById("lastName").value;
            for( i=0 ; i < allUsername.length ; i++){
                if(username.value == allUsername[i].innerHTML){
                    username.style.borderColor = "red";
                }
                else if (username.style.borderColor == "red" && username.value != allUsername[i].innerHTML) {
                    username.style.borderColor = "#c7d8eb";
                }
            }



    });

    $('#addUserForm').on('submit', function() {
        var username = document.getElementById("username");
        for( i=0 ; i < allUsername.length ; i++){
            if(username.value == allUsername[i].innerHTML){
               alert("Lietotājs ar šādu lietotājvārdu jau eksistē")
               return false;
            }
        }

        if(username.value.length < 5){
            alert ("Lietotājvārdam jābūt 5-150 simboli");
            return false;
        }

        if(username.length>150){
            alert ("Lietotājvārds var satur 5-150 simbolus");
            return false;
        }

        if(!checkSymbol(username.value)){
            alert ("Lietotājvārds var saturēt tikai latīņu alfabēta burtus, ciparus un īpašos simbolus");
            return false;
        }

        var name = document.getElementById("firstName").value;
        var surname = document.getElementById("lastName").value;

        if(!name){
            alert ("Lūdzu, ievadiet vārdu");
            return false;
        }

        if(name.length>30){
            alert ("Vārds var saturēt līdz 30 simboliem");
            return false;
        }

        if(!surname){
            alert ("Lūdzu, ievadiet uzvārdu");
            return false;
        }

        if(surname.length>30){
            alert ("Uzvārds var saturēt līdz 30 simboliem");
            return false;
        }

        if(!checkLetters(name)){
            alert ("Vārds var saturēt tikai latviešu vai latīņu alfabēta burtus");
            return false;
        }
        if(!checkLetters(surname)){
            alert ("Uzvārds var saturēt tikai latviešu vai latīņu alfabēta burtus");
            return false;
        }

        password = document.getElementById("password");

        if($('#password').val().length<8 || $('#password').val().length>24 ){
            alert("Parolei jāsatur 8-24 simboli");
            return false;
        }

        if(!checkSymbol(password.value)){
            alert ("Parole var saturēt tikai latīņu alfabēta burtus, ciparus un īpašos simbolus");
            return false;
        }

        if ($('#password').val() != $('#password-again').val()){
            alert("Ievadītās paroles nesakrīt")
            return false;
        }


    }); // formas validācija


    function checkLetters(string){
        var correct = /^[Aa\ Āā\ Bb\ Cc\ Čč\ Dd\ Ee\ Ēē\ Ff\ Gg\ Ģģ\ Hh\ Ii\ Īī\ Jj\ Kk\ Ķķ\ Ll\ Ļļ\ Mm\ Nn\ Ņņ\ Oo\ Pp\ Rr\ Ss\ Šš\ Tt\ Uu\ Ūū\ Vv\ Zz\ Žž]+$/.test(string);
        return correct;
    }

    function checkSymbol (string){
        var correct = /^[Aa\ Bb\ Cc\ Dd\ Ee\ Ff\ Gg\ Hh\ Ii\ Jj\ Kk\ Ll\ Mm\ Nn\ Oo\ Pp\ Rr\ Ss\ Tt\ Uu\ Vv\ Zz\ 0-9\ @\ .\ +\ -\ _]+$/.test(string);
        return correct;
    }


//    $('.updateForm').on('submit', function() {
//        var thisUsername;
//        $('.username-update').on('input', function() {
//            thisUsername = this.value;
//
//        });
//
//
//        var username = document.getElementById("username-update");
//        alert(username.value);
//        alert(thisUsername);
//
//
//        for( i=0 ; i < allUsername.length ; i++){
//            if(username.value == allUsername[i].innerHTML){
//                if (thisUsername != allUsername[i] ){
//                    alert("Lietotājs ar šādu lietotājvārdu jau eksistē!")
//               return false;
//                }
//
//            }
//        }
//
//        var name = document.getElementById("first-name-update").value;
//        var surname = document.getElementById("last-name-update").value;
//
//        alert(name + "12" + username);
//
//        if(!name){
//            alert ("Lūdzu, ievadiet vārdu!");
//            return false;
//        }
//
//        if(!surname){
//            alert ("Lūdzu, ievadiet uzvārdu!")
//            return false;
//        }
//
//        if(!checkLetters(name)){
//            alert ("Vārdā atļauts lietot tikai burtus!")
//            return false;
//        }
//        if(!checkLetters(surname)){
//            alert ("Uzvārdā atļauts lietot tikai burtus!")
//            return false;
//        }
//
//    }); // formas validācija

var userName = document.getElementsByClassName("userFull");
var userBox = document.getElementsByClassName("images");

$('#searchField').on('input', function() {
    var input  = $(this).val();
    input = input.toString().toLowerCase();
    for (i=0; i<userName.length; i++){
        if (userName[i].innerHTML.toLowerCase().indexOf(input) >= 0) {
            userBox[i].style.display = "block";
         }
        else {
            userBox[i].style.display = "none";
            }
        }

});



});