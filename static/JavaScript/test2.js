var givenDate = document.getElementById("givenDate").innerHTML;
var today = new Date(givenDate);
console.log(today);

function formatDate(myDate) {
    var tmp = myDate;
    var month = tmp.getMonth() + 1;
    var day = tmp.getDate();
    var year = tmp.getFullYear();
    if(day<10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }

    return (day + "." + month + "." + year + ".");
} //funkcija, kas pārveido datumu pareizā formātā : dd.mm



var formattedDay = formatDate(today);
console.log(formattedDay);


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

document.getElementById("dateToLeft").value = addDays(givenDate, -1);
document.getElementById("dateToRight").value = addDays (givenDate, 1);

var day = today.getDay();
var days = ['SVĒTDIENA', 'PIRMDIENA', 'OTRDIENA', 'TREŠDIENA', 'CETURTDIENA', 'PIEKTDIENA', 'SESTDIENA'];

document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;