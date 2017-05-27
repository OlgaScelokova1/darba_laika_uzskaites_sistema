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

        if(username.value.length>150){
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

    var inputUsername;
    var inputName;
    var inputSurname;
    var changeUsername = false;
    var changeName = false;
    var changeSurname = false;

    $(".username-update").on('input', function() {
            inputUsername = $(this).val();
            changeUsername = true;
    })

    $(".first-name-update").on('input', function() {
            inputName = $(this).val();
            changeName = true;
    })

    $(".last-name-update").on('input', function() {
            inputSurname = $(this).val();
            changeSurname = true;
    })


    $('.updateForm').on('submit', function() {
        var nowUsername = $(this).attr('id');
        if(changeUsername){
            for( i=0 ; i < allUsername.length ; i++){
                if(inputUsername == allUsername[i].innerHTML){
                    if(inputUsername != nowUsername){
                        alert("Lietotājs ar šādu lietotājvārdu jau eksistē!")
                        return false;
                     }
                }
            }

            if(inputUsername.length < 5){
                alert ("Lietotājvārdam jābūt 5-150 simboli");
                return false;
            }

            if(inputUsername.length>150){
                alert ("Lietotājvārds var satur 5-150 simbolus");
                return false;
            }

            if(!checkSymbol(inputUsername)){
                alert ("Lietotājvārds var saturēt tikai latīņu alfabēta burtus, ciparus un īpašos simbolus");
                return false;
            }
        }

        if (changeName){
            if(!inputName){
                alert ("Lūdzu, ievadiet vārdu");
                return false;
            }

            if(inputName.length>30){
                alert ("Vārds var saturēt līdz 30 simboliem");
                return false;
            }

            if(!checkLetters(inputName)){
                alert ("Vārds var saturēt tikai latviešu vai latīņu alfabēta burtus")
                return false;
            }

        }

        if (changeSurname){
            if(!inputSurname){
                alert ("Lūdzu, ievadiet uzvārdu")
                return false;
            }

            if(inputSurname.length>30){
                alert ("Uzvārds var saturēt līdz 30 simboliem");
                return false;
            }

            if(!checkLetters(inputSurname)){
                alert ("Uzvārds var saturēt tikai latviešu vai latīņu alfabēta burtus")
                return false;
            }
        }

        changeUsername = false;
        changeName = false;
        changeSurname = false;

    }); // formas validācija

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

var update = document.getElementsByClassName("update");

//$(update).click(function(event){
//            console.log( "1");
//
//            var now = $(this).attr('id');
//
//
//
//        event.stopPropagation();
//}); // kastītes novietojums un default vērtības



});