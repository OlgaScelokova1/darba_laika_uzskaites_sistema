$(document).ready(function() {

    var allUsername = document.getElementsByClassName("allUsername");


    $('#username').on('input', function() {
            var username = document.getElementById("username");
            for( i=0 ; i < allUsername.length ; i++){
                if(username.value == allUsername[i].innerHTML){
                    username.style.borderColor = "red";
                    console.log("1");
                }
                else if (username.style.borderColor == "red" && username.value != allUsername[i].innerHTML) {
                    username.style.borderColor = "#c7d8eb";
                    console.log("2");
                }
            }


    });

    $('#addUserForm').on('submit', function() {
        var username = document.getElementById("username");
        for( i=0 ; i < allUsername.length ; i++){
            if(username.value == allUsername[i].innerHTML){
               alert("Lietotājs ar šādu lietotājvārdu jau eksistē!")
               return false;
            }
        }

        var name = document.getElementById("firstName").value;
        var surname = document.getElementById("lastName").value;

        if(!name){
            alert ("Lūdzu, ievadiet vārdu!")
            return false;
        }

        if(!surname){
            alert ("Lūdzu, ievadiet uzvārdu!")
            return false;
        }

        if(!checkLetters(name)){
            alert ("Vārdā atļauts lietot tikai burtus!")
            return false;
        }
        if(!checkLetters(surname)){
            alert ("Uzvārdā atļauts lietot tikai burtus!")
            return false;
        }

        if($('#password').val().length<8 || $('#password').val().length>24 ){
            alert("Paroles garumam jābūt 8-24 simboli!")
            return false;
        }

        if ($('#password').val() != $('#password-again').val()){
            alert("Ievadītās paroles nesakrīt!")
            return false;
        }

    }); // formas validācija


    function checkLetters(string){
        var correct = /^[Aa\ Āā\ Bb\ Cc\ Čč\ Dd\ Ee\ Ēē\ Ff\ Gg\ Ģģ\ Hh\ Ii\ Īī\ Jj\ Kk\ Ķķ\ Ll\ Ļļ\ Mm\ Nn\ Ņņ\ Oo\ Pp\ Rr\ Ss\ Šš\ Tt\ Uu\ Ūū\ Vv\ Zz\ Žž]+$/.test(string);
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





});