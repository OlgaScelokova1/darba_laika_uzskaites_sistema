var monday = document.getElementById("mondayReceived").innerHTML;
var tuesday = document.getElementById("tuesdayReceived").innerHTML;
var wednesday = document.getElementById("wednesdayReceived").innerHTML;
var thursday = document.getElementById("thursdayReceived").innerHTML;
var friday = document.getElementById("fridayReceived").innerHTML;
var saturday = document.getElementById("saturdayReceived").innerHTML;
var sunday = document.getElementById("sundayReceived").innerHTML;

function datesInDateFormat(){
    monday = new Date(monday);
    tuesday = new Date(tuesday);
    wednesday = new Date (wednesday);
    thursday = new Date (thursday);
    friday = new Date (friday);
    saturday = new Date (saturday);
    sunday = new Date (sunday);
}

datesInDateFormat();

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

    return (day + "." + month);
} //funkcija, kas pārveido datumu pareizā formātā : dd.mm

var firstMonday = new Date(); // pagaidām pirmdienā ir šodienas datums

while (firstMonday.getDay() !== 1) {
    firstMonday.setDate(firstMonday.getDate()-1);
} // tiek piešķirts pirmdienas datums

firstMonday = formatDate(firstMonday);

function formatDateRezerve(myDate) {
    var tmp = myDate
    var month = tmp.slice(5,7);
    var day = tmp.slice(8);

    return (day + "." + month);
} //funkcija, kas pārveido datumu pareizā formātā : dd.mm


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
} // funckija, kas pievieno dienas konkrētajai dienai


function getWeek(previousMonday, thisMonday) {
    var thisWeek = document.getElementById("WeekDate").innerHTML;
    var tmpPrevious = previousMonday.slice(0,4);
    var tmpThis = thisMonday.slice(0,4);
    console.log(tmpPrevious);
    console.log(tmpThis);
    if(tmpPrevious == tmpThis){
        return (Number(thisWeek) + 1);
    }
    else {
        return (1);
    }
} // funkcija, kas nosaka nedēļu atkarībā no padotā datuma



var formattedDateMonday;
var formattedDateTuesday;
var formattedDateWednesday;
var formattedDateThursday;
var formattedDateFriday;
var formattedDateSaturday;
var formattedDateSunday;

function formatAllDates(){
    var formattedDateMonday = formatDate(monday);
    var formattedDateTuesday = formatDate(tuesday);
    var formattedDateWednesday = formatDate(wednesday);
    var formattedDateThursday = formatDate(thursday);
    var formattedDateFriday = formatDate(friday);
    var formattedDateSaturday = formatDate(saturday);
    var formattedDateSunday = formatDate(sunday);
}
// visi datumi tiek pārveidoti nepieciešamajā formātā un ierakstīti dokumentā

function writeDates(){
    document.getElementById("MondayDate").innerHTML = formattedDateMonday;
    document.getElementById("TuesdayDate").innerHTML = formattedDateTuesday;
    document.getElementById("WednesdayDate").innerHTML = formattedDateWednesday;
    document.getElementById("ThursdayDate").innerHTML = formattedDateThursday;
    document.getElementById("FridayDate").innerHTML = formattedDateFriday;
    document.getElementById("SaturdayDate").innerHTML = formattedDateSaturday;
    document.getElementById("SundayDate").innerHTML = formattedDateSunday;
}


function setValuesForForm (){
    addDates();
    document.getElementById("mondaySend").value = monday;
    document.getElementById("tuesdaySend").value = tuesday;
    document.getElementById("wednesdaySend").value = wednesday;
    document.getElementById("thursdaySend").value = thursday;
    document.getElementById("fridaySend").value = friday;
    document.getElementById("saturdaySend").value = saturday;
    document.getElementById("sundaySend").value = sunday;

    document.getElementById("mondaySendDown").value = monday;
    document.getElementById("tuesdaySendDown").value = tuesday;
    document.getElementById("wednesdaySendDown").value = wednesday;
    document.getElementById("thursdaySendDown").value = thursday;
    document.getElementById("fridaySendDown").value = friday;
    document.getElementById("saturdaySendDown").value = saturday;
    document.getElementById("sundaySendDown").value = sunday;
}


function addDates (){
    monday = addDays(monday, 7);
    tuesday = addDays(tuesday, 7);
    wednesday = addDays(wednesday, 7);
    thursday = addDays(thursday, 7);
    friday = addDays(friday, 7);
    saturday = addDays(saturday, 7);
    sunday = addDays(sunday, 7);
}


console.log(monday);
console.log(tuesday);
console.log(wednesday);
console.log(thursday);
console.log(friday);
console.log(saturday);
console.log(sunday);






//$('#Up').click(function(){
//
//    setDatesForEveryDay();
//
//
//    setValuesForForm();
//    setMonthAndWeek()
//    setDatesAfterClick(); // piešķir nedēļu attiecīgi pēc padotajiem datiem
//    formatAllDates(); // datumu formāts
//    getTodayDate(); // ja atkal uziet uz šodienas, tiek piešķirti nepieciešamie parametri
//    getDates();
//    setColors();
//    document.getElementById("MondayDate").innerHTML = document.getElementById("mondayReceived").innerHTML;
//
//
//});



//$('#Down').click(function(){
//    dateMonday = addDays(dateTuesday, -8);
//    dateTuesday = addDays(dateTuesday, -7);
//    dateWednesday = addDays(dateWednesday, -7);
//    dateThursday = addDays(dateThursday, -7);
//    dateFriday = addDays(dateFriday, -7);
//    dateSaturday = addDays(dateSaturday, -7);
//    dateSunday = addDays(dateSunday, -7);
//    // tiek piešķirti visi datumi iepriekšējai nedēļai
//
//    formatAllDates();
//    setMonthAndWeek();
//    getTodayDate(); // ja atkal uziet uz šodienas, tiek piešķirti nepieciešamie parametri
//});



var months =['JANVĀRIS','FEBRUĀRIS','MARTS','APRĪLIS','MAIJS','JŪNIJS','JŪLIJS','AUGUSTS','SEPTEMBRIS','OKTOBRIS','NOVEMBRIS','DECEMBRIS'];
//masīvā tiek sarakstīti visi mēneši

function setMonthAndWeek() {
    var weekStarts = document.getElementById("MondayDate");
    var thisMonth = weekStarts.innerText.slice(3);
    if(thisMonth<10){
        thisMonth=thisMonth.slice(1);
    }
    document.getElementById("Month").innerHTML = months[thisMonth-1]; // tiek ierakstīts mēnesis

//    document.getElementById("WeekDate").innerHTML = getWeek(monday, addDays(monday, 7)); // tiek ierakstīts nedēļas kārtas numurs

}

setMonthAndWeek();

function setDatesAfterClickUp (){
    monday = document.getElementById("mondaySend").value;
    tuesday = document.getElementById("tuesdaySend").value;
    wednesday = document.getElementById("wednesdaySend").value;
    thursday = document.getElementById("thursdaySend").value;
    friday = document.getElementById("fridaySend").value;
    saturday = document.getElementById("saturdaySend").value;
    sunday = document.getElementById("sundaySend").value;
}

//document.getElementById('Up').click= function() {
//    setValuesForForm();
//};


function dates (){
    setValuesForForm();

    setDatesAfterClickUp();
    datesInDateFormat();
    formatAllDates();
    setMonthAndWeek();

    writeDates();

}


console.log(formatDate(monday));
console.log(firstMonday);

if(firstMonday == formatDate(monday)){
    addDates();
    setValuesForForm();

}
else {
    dates();
}
//dates();




