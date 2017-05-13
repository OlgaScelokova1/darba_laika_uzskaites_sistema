var givenDate = document.getElementById("givenDate").innerHTML;
var today = new Date(givenDate);

function formatDateForForm(myDate){
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

    return (year + "-" + month + "-"  + day);
}

function formatDate(myDate) {
    var tmp = myDate;
    var month = tmp.getMonth() + 1;
    var day = tmp.getDate();
    if(day<10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }

    return (day + "." + month + ".");
} //funkcija, kas pārveido datumu pareizā formātā : dd.mm



var formattedDay = formatDate(today);
console.log(formattedDay);


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


document.getElementById("dateBackSend").value = formatDateForForm(addDays(givenDate, -1));
document.getElementById("dateForwardSend").value = formatDateForForm(addDays(givenDate, 1));

var dateSearch = document.getElementById("dateSearch")
if(dateSearch){
    dateSearch.value = formatDateForForm(today)
};

var day = today.getDay();
var days = ['SVĒTDIENA', 'PIRMDIENA', 'OTRDIENA', 'TREŠDIENA', 'CETURTDIENA', 'PIEKTDIENA', 'SESTDIENA'];

document.getElementById("day").innerHTML = days[day];
document.getElementById("date").innerHTML = formattedDay;