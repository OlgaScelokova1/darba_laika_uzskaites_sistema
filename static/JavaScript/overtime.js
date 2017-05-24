$('.date').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
        language: "lv",
        daysOfWeekHighlighted: "0,6",
        todayHighlight: true,
});


if(document.getElementById("notAdmin")){
    $('.time').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        dynamic: true,
    });
}



$('#searchForm').on('submit', function() {
        var from = document.getElementById("from");
        var until = document.getElementById("until");
        if(!from.value){
            from.style.borderColor = "red";
            alert("Lūdzu, ievadiet datumu, ar kuru sākot vēlaties atlasīt datus!");
            return false;
        }
        else{
            from.style.borderColor = "#c7d8eb";
        } // tiek pārbaudīts, vai ir ievadīts datums, no kura lietotājs vēlas atlasīt datus
        if(!until.value){
            until.style.borderColor = "red";
            alert("Lūdzu, ievadiet datumu, līdz kuram vēlaties atlasīt datus!");
            return false;
        }
         else{
            until.style.borderColor = "#c7d8eb";
        } // tiek pārbaudīts, vai ir ievadīts datums, līdz kuram lietotājs vēlas atlasīt datus
        if(from.value>until.value){
            until.style.borderColor = "red";
            alert("Nepareizi ievadīts datums!");
            return false;
        }
        else{
            until.style.borderColor = "#c7d8eb";
        } // tiek pārbaudīts, vai datums no nav lielāks par datumu līdz
}); // formas validācija

var userName = document.getElementsByClassName("userName");
var oneForm = document.getElementsByClassName("oneForm");

$('#searchField').on('input', function() {
    var input = $(this).val();
    input = input.toString().toLowerCase()
    for (i=0; i<userName.length; i++){
        if (userName[i].innerHTML.toLowerCase().indexOf(input) >= 0) {
            oneForm[i].style.display = "table-row";
         }
        else {
            oneForm[i].style.display = "none";
        }
     }

}); // dinamisks meklētājs


if(document.getElementById("searchField")){

    var overtimeId = document.getElementsByClassName("id");
    var receivedId = document.getElementsByClassName("receivedId");
    var receivedReason = document.getElementsByClassName("receivedReason");
    var reason = document.getElementsByClassName("reason");
    var save = document.getElementsByClassName("Save");
    var overtimeStatus = document.getElementsByClassName("status");

    reason[0].style.display = "none";

    for (i=0; i<overtimeId.length; i++){
        for (k=0 ; k<receivedId.length ; k++){
            if (overtimeId[i].value == receivedId[k].innerHTML){
                if(receivedReason[k].innerHTML != "gaida"){
                    reason[i].style.display = "none";
                    save[i].style.display = "none";
                    if(receivedReason[k].innerHTML == "apstiprinats"){
                        overtimeStatus[i].innerHTML = "Apstiprināts";
                        overtimeStatus[i].style.color = "#00b300";
                    }
                    else if (receivedReason[k].innerHTML == "noraidits"){
                        overtimeStatus[i].innerHTML = "Noraidīts";
                        overtimeStatus[i].style.color = "#e62e00";
                    }
                }

            }
        }

    }

}

else {
    var statusOvertime = document.getElementsByClassName("statusOvertime");
    for ( i = 0 ; i < statusOvertime.length; i++){
        if(statusOvertime[i].innerHTML == "noraidits"){
            statusOvertime[i].innerHTML = "Noraidīts"
            statusOvertime[i].style.color = "#e62e00";
        }
        else if (statusOvertime[i].innerHTML == "apstiprinats"){
            statusOvertime[i].innerHTML = "Apstiprināts";
            statusOvertime[i].style.color = "#00b300";
        }
        else{
            statusOvertime[i].innerHTML = "Gaida administratora apstiprinājumu";
            statusOvertime[i].style.fontStyle = "italic";

        }
    }

}


$('#addForm').on('submit', function() {

    var from = document.getElementById("fromInput");
    var until = document.getElementById("untilInput");

    if(!from){
        alert("Lūdzu, ievadiet laiku, no cikiem strādāsiet!")
        return false;
    }

   if(!until){
        alert("Lūdzu, ievadiet laiku, līdz cikiem strādāsiet!")
        return false;
    }
    else

    if (from.value>until.value){
        alert("Nepareizi ievadīts laiks!")
        return false;
    } // formu pārbaude, ja ievadītais laiks no ir lielāks par laiku līdz, tiek izvadīts paziņojums


    var isValidFrom = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(from.value);
    var isValidUntil = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(until.value);

    if(!isValidFrom || !isValidUntil){
        alert("Laiks ievadīts nepareizā formātā!")
        return false;
    }
}); // formas validācija

$('#fromInput').on('input', function() {
        var from = document.getElementById("fromInput");
        var until = document.getElementById("untilInput");

        if(from.value>until.value){
            until.style.borderColor = "red";
        }
        else{
            until.style.borderColor = "#c7d8eb";
        }

});

$('#untilInput').on('input', function() {
        var from = document.getElementById("fromInput");
        var until = document.getElementById("untilInput");
        if(from.value>until.value){
            until.style.borderColor = "red";
        }
        else{
            until.style.borderColor = "#c7d8eb";
        }


});
