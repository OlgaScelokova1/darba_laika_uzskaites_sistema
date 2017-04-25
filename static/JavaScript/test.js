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


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
} // funckija, kas pievieno dienas konkrētajai dienai


function getWeek(date) {
   date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
} // funkcija, kas nosaka nedēļu atkarībā no padotā datuma



var dateMonday = new Date(); // pagaidām pirmdienā ir šodienas datums
var firstMonday;

while (dateMonday.getDay() !== 1) {
    dateMonday.setDate(dateMonday.getDate()-1);
    firstMonday = dateMonday;
} // tiek piešķirts pirmdienas datums

console.log(firstMonday);
console.log(dateMonday);

var dateTuesday;
var dateWednesday;
var dateThursday;
var dateFriday;
var dateSaturday;
var dateSunday; // tiek definētas visas pārējās dienas un piešķirti datumi konkrētajai nedēļai

function setDates(){
    dateTuesday = addDays(dateMonday, 1);
    dateWednesday = addDays(dateMonday, 2);
    dateThursday = addDays(dateMonday, 3);
    dateFriday = addDays(dateMonday, 4);
    dateSaturday = addDays(dateMonday, 5);
    dateSunday = addDays(dateMonday, 6);
}// tiek definētas visas pārējās dienas un piešķirti datumi konkrētajai nedēļai

setDates();

var formattedDateMonday;
var formattedDateTuesday;
var formattedDateWednesday;
var formattedDateThursday;
var formattedDateFriday;
var formattedDateSaturday;
var formattedDateSunday;

function formatAllDates(){
    var formattedDateMonday = formatDate(dateMonday);
    var formattedDateTuesday = formatDate(dateTuesday);
    var formattedDateWednesday = formatDate(dateWednesday);
    var formattedDateThursday = formatDate(dateThursday);
    var formattedDateFriday = formatDate(dateFriday);
    var formattedDateSaturday = formatDate(dateSaturday);
    var formattedDateSunday = formatDate(dateSunday);
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

formatAllDates();

function setValuesForForm (){
    document.getElementById("mondaySend").value = dateMonday;
    document.getElementById("tuesdaySend").value = dateTuesday;
    document.getElementById("wednesdaySend").value = dateWednesday;
    document.getElementById("thursdaySend").value = dateThursday;
    document.getElementById("fridaySend").value = dateFriday;
    document.getElementById("saturdaySend").value = dateSaturday;
    document.getElementById("sundaySend").value = dateSunday;

    document.getElementById("mondaySendDown").value = dateMonday;
    document.getElementById("tuesdaySendDown").value = dateTuesday;
    document.getElementById("wednesdaySendDown").value = dateWednesday;
    document.getElementById("thursdaySendDown").value = dateThursday;
    document.getElementById("fridaySendDown").value = dateFriday;
    document.getElementById("saturdaySendDown").value = dateSaturday;
    document.getElementById("sundaySendDown").value = dateSunday;
}

setValuesForForm();

function addDates (){
    dateMonday = addDays(dateTuesday, 6);
    dateTuesday = addDays(dateTuesday, 7);
    dateWednesday = addDays(dateWednesday, 7);
    dateThursday = addDays(dateThursday, 7);
    dateFriday = addDays(dateFriday, 7);
    dateSaturday = addDays(dateSaturday, 7);
    dateSunday = addDays(dateSunday, 7);
}



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

    document.getElementById("WeekDate").innerHTML = getWeek(dateMonday); // tiek ierakstīts nedēļas kārtas numurs

}

setMonthAndWeek();

function setDatesAfterClick (){
    dateMonday = document.getElementById("mondayReceived").innerHTML;
    dateTuesday = document.getElementById("tuesdayReceived").innerHTML;
    dateWednesday = document.getElementById("wednesdayReceived").innerHTML;
    dateThursday = document.getElementById("thursdayReceived").innerHTML;
    dateFriday = document.getElementById("fridayReceived").innerHTML;
    dateSaturday = document.getElementById("saturdayReceived").innerHTML;
    dateSunday = document.getElementById("sundayReceived").innerHTML;
}

document.getElementById('Up').submit = function() {
    addDates();
};



function changeDatesUp (){
    if (firstMonday == dateMonday){
        setDates();
        console.log("!");
    }
    else {
        setDatesAfterClick ();
    }
    addDates();
    formatAllDates();
    writeDates;
//    setMonthAndWeek();

}

changeDatesUp();