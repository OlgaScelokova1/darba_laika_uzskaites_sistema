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



var formattedDateMonday;
var formattedDateTuesday;
var formattedDateWednesday;
var formattedDateThursday;
var formattedDateFriday;
var formattedDateSaturday;
var formattedDateSunday;

function formatAllDates(){
    formattedDateMonday = formatDate(monday);
    formattedDateTuesday = formatDate(tuesday);
    formattedDateWednesday = formatDate(wednesday);
    formattedDateThursday = formatDate(thursday);
    formattedDateFriday = formatDate(friday);
    formattedDateSaturday = formatDate(saturday);
    formattedDateSunday = formatDate(sunday);

}
formatAllDates();

console.log(formattedDateMonday);
console.log(formattedDateTuesday);
console.log(formattedDateWednesday);
console.log(formattedDateThursday);
console.log(formattedDateFriday);
console.log(formattedDateSaturday);
console.log(formattedDateSunday);

function writeDates(){
    document.getElementById("MondayDate").innerHTML = formattedDateMonday;
    document.getElementById("TuesdayDate").innerHTML = formattedDateTuesday;
    document.getElementById("WednesdayDate").innerHTML = formattedDateWednesday;
    document.getElementById("ThursdayDate").innerHTML = formattedDateThursday;
    document.getElementById("FridayDate").innerHTML = formattedDateFriday;
    document.getElementById("SaturdayDate").innerHTML = formattedDateSaturday;
    document.getElementById("SundayDate").innerHTML = formattedDateSunday;
}

writeDates();

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
} // funckija, kas pievieno dienas konkrētajai dienai

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

setValuesForForm();


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

var months =['JANVĀRIS','FEBRUĀRIS','MARTS','APRĪLIS','MAIJS','JŪNIJS','JŪLIJS','AUGUSTS','SEPTEMBRIS','OKTOBRIS','NOVEMBRIS','DECEMBRIS'];
//masīvā tiek sarakstīti visi mēneši

function setMonthAndWeek() {
    var weekStarts = document.getElementById("MondayDate");
    var thisMonth = weekStarts.innerText.slice(3);
    if(thisMonth<10){
        thisMonth=thisMonth.slice(1);
    }
    document.getElementById("Month").innerHTML = months[thisMonth-1]; // tiek ierakstīts mēnesis

    document.getElementById("WeekDate").innerHTML = getWeek(addDays(monday, -7)); // tiek ierakstīts nedēļas kārtas numurs

}

setMonthAndWeek();