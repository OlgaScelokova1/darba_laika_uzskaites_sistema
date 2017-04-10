var today = new Date();
console.log(today);

var day = today.getDay();
var days = ['SVĒTDIENA', 'PIRMDIENA', 'OTRDIENA', 'TREŠDIENA', 'CETURTDIENA', 'PIEKTDIENA', 'SESTDIENA'];

function formatDate(myDate) {
    var tmp = myDate;
    var month = tmp.getMonth() + 1;
    var day = tmp.getDate();
    console.log(tmp);
    var year = tmp.getFullYear();
    console.log(year);
    if(day<10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }

    return (day + "." + month + "." + year + ".");
}

var formattedDay = formatDate(today);

document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

$('#Left').click(function(){
    today = addDays(today, -1);
    day = today.getDay();
    formattedDay = formatDate(today);

    document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;

});


$('#Right').click(function(){
    today = addDays(today, 1);
    day = today.getDay();
    formattedDay = formatDate(today);
    document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;

});