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
