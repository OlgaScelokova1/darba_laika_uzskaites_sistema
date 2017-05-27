$('.updateForm').on('submit', function() {
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

    if(!checkLetters(name)){
        alert ("Vārds var saturēt tikai latviešu vai latīņu alfabēta burtus");
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


    if(!checkLetters(surname)){
        alert ("Uzvārds var saturēt tikai latviešu vai latīņu alfabēta burtus");
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

$('.updatePassForm').on('submit', function() {
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