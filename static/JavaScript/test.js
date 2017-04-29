var monday = document.getElementById("mondayReceived").innerHTML;
var tuesday = document.getElementById("tuesdayReceived").innerHTML;
var wednesday = document.getElementById("wednesdayReceived").innerHTML;
var thursday = document.getElementById("thursdayReceived").innerHTML;
var friday = document.getElementById("fridayReceived").innerHTML;
var saturday = document.getElementById("saturdayReceived").innerHTML;
var sunday = document.getElementById("sundayReceived").innerHTML;

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


var firstMonday = new Date(); // pagaidām pirmdienā ir šodienas datums

while (firstMonday.getDay() !== 1) {
    firstMonday.setDate(firstMonday.getDate()-1);
} // tiek piešķirts pirmdienas datums



//var dateTuesday;
//var dateWednesday;
//var dateThursday;
//var dateFriday;
//var dateSaturday;
//var dateSunday; // tiek definētas visas pārējās dienas un piešķirti datumi konkrētajai nedēļai
//
//function setDates(){
//    dateTuesday = addDays(dateMonday, 1);
//    dateWednesday = addDays(dateMonday, 2);
//    dateThursday = addDays(dateMonday, 3);
//    dateFriday = addDays(dateMonday, 4);
//    dateSaturday = addDays(dateMonday, 5);
//    dateSunday = addDays(dateMonday, 6);
//}// tiek definētas visas pārējās dienas un piešķirti datumi konkrētajai nedēļai

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

console.log(document.getElementById("mondaySend").value);

//setValuesForForm();


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
    formatAllDates();

}


//var frm = $(formUp);
//
//frm.submit(function () {
//
//    $.ajax({
//        type: 'POST',
//        url: frm.attr('action'),
//        data: frm.serialize(),
//        success: function (data) {
//            console.log(data);
//            console.log("!!!");
//        },
//        error: function(data) {
//        }
//    });
//
//    return false;
//}); // kad uzspiež "submit", padotie dati tiek sūtīti uz datu bāzi, kur tie tiek apstrādāti
//





