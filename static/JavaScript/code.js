$(document).ready(function() {

var today = new Date();
var thisWeek = getWeek(today);
var documentWeek = document.getElementById("WeekDate").innerHTML;

if (thisWeek != documentWeek){
    $(".OneDay").slideUp(1).delay(200).slideDown('fast');
}

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

var addMonday;
var addTuesday;
var addWednesday;
var addThursday;
var addFriday;
var addSaturday;
var addSunday;

function addDates (){
    addMonday = addDays(monday, 7);
    addTuesday = addDays(tuesday, 7);
    addWednesday = addDays(wednesday, 7);
    addThursday = addDays(thursday, 7);
    addFriday = addDays(friday, 7);
    addSaturday = addDays(saturday, 7);
    addSunday = addDays(sunday, 7);
}

var removeMonday;
var removeTuesday;
var removeWednesday;
var removeThursday;
var removeFriday;
var removeSaturday;
var removeSunday;

function removeDates(){
    removeMonday = addDays(monday, -7);
    removeTuesday = addDays(tuesday, -7);
    removeWednesday = addDays(wednesday, -7);
    removeThursday = addDays(thursday, -7);
    removeFriday = addDays(friday, -7);
    removeSaturday = addDays(saturday, -7);
    removeSunday = addDays(sunday, -7);
}


function setValuesForFormUp (){
    addDates();
    document.getElementById("mondaySend").value = addMonday;
    document.getElementById("tuesdaySend").value = addTuesday;
    document.getElementById("wednesdaySend").value = addWednesday;
    document.getElementById("thursdaySend").value = addThursday;
    document.getElementById("fridaySend").value = addFriday;
    document.getElementById("saturdaySend").value = addSaturday;
    document.getElementById("sundaySend").value = addSunday;
}

function setValuesForFormDown(){
    removeDates();
    document.getElementById("mondaySendDown").value = removeMonday;
    document.getElementById("tuesdaySendDown").value = removeTuesday;
    document.getElementById("wednesdaySendDown").value = removeWednesday;
    document.getElementById("thursdaySendDown").value = removeThursday;
    document.getElementById("fridaySendDown").value = removeFriday;
    document.getElementById("saturdaySendDown").value = removeSaturday;
    document.getElementById("sundaySendDown").value = removeSunday;
}


setValuesForFormUp();
setValuesForFormDown();


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

    document.getElementById("WeekDate").innerHTML = getWeek(monday); // tiek ierakstīts nedēļas kārtas numurs

}

setMonthAndWeek();

var dateMonday = new Date(); // pagaidām pirmdienā ir šodienas datums

while (dateMonday.getDay() !== 1) {
    dateMonday.setDate(dateMonday.getDate()-1);
} // tiek piešķirts pirmdienas datums

var box = document.getElementsByClassName("box2"); // pie box tiek ielikti visi elementi, kam klase box2


var Monday = document.getElementById("mondayBox");
var Tuesday = document.getElementById("tuesdayBox");
var Wednesday = document.getElementById("wednesdayBox");
var Thursday = document.getElementById("thursdayBox");
var Friday = document.getElementById("fridayBox");
var Saturday = document.getElementById("SaturdayList");
var Sunday = document.getElementById("SundayList");
// tiek iegūtas katras nedēļas laiku kastītes

var FillBox = document.getElementById("Fill");
//tiek definēta kastīte, kura tiek aizpildīta ar padodamajiem datiem
var deleteBox = document.getElementById("delete");

var date2 = []; // šajā masīvā tiks salikti visi datumi, kas ir attēlotajā nedēļā

function getDates(){
    var year = new Date(dateMonday).getFullYear(); // tiek iegūts gads, kurš ir pašlaik
    var datums;
    var menesis;

    var date1 = document.getElementsByClassName("Date"); //tiek iegūti visi datumi, kas ir attēloti, kā elementi

    for (i=0 ; i<date1.length; i++){
        datums = date1[i].innerText.slice(0,2);
        menesis = date1[i].innerText.slice(3);
        date2[i] = year + '-' + menesis + '-' + datums;
    } //parveidoju datuma formu no html un ielieku katru dienu masiva date2[]
} // ar šo funkciju masīvā date2[] tiek ierakstīti visi datumi, kas ir attēloti attiecīgajā nedēļā


getDates();


$(document).click(function(event){
    FillBox.style.display = "none";
    deleteBox.style.display =  "none";
}); // ja uzspiež jebkur lapā, kastīte tiek paslēpta

$(FillBox).click(function(event){
    event.stopPropagation();
}); // ja uzspiež uz kastītes, tā netiek paslēpt

if(FillBox){

    $(box).click(function(event){
            FillBox.style.display = "block";
            FillBox.style.position = "absolute";

            var now = $(this).attr('id');

            if (now.startsWith("M")){
                document.getElementById("InputDate").defaultValue = date2[0];
                $("#Mo" ).append($("#FillRow"));
            }
            else if (now.startsWith("Tu")){
                document.getElementById("InputDate").defaultValue = date2[1];
                $("#Tu" ).append($("#FillRow"));
            }
            else if (now.startsWith("We")){
                document.getElementById("InputDate").defaultValue = date2[2];
                $("#We" ).append($("#FillRow"));
            }
            else if (now.startsWith("Th")){
                document.getElementById("InputDate").defaultValue = date2[3];
                $("#Th" ).append($("#FillRow"));
            }
            else if (now.startsWith("F")){
                document.getElementById("InputDate").defaultValue = date2[4];
                $("#Fr" ).append($("#FillRow"));
            } // atkarībā no tā, kurā dienā atrodas laiks, uz kura lietotājs uzspiedis, tiek novietota aizpildāmā forma

            document.getElementById('InputFrom').defaultValue = now.slice(2,4) + ":00";
            document.getElementById('InputUntil').defaultValue = now.slice(5) + ":00";
            // tiek uzstādītas default vērtības atkarībā no tā, kādi laiki ir kastītē, uz kuru uzspiests

        event.stopPropagation();
    }); // kastītes novietojums un default vērtības

}
function getCookie(name) {
     var cookieValue = null;
     if (document.cookie && document.cookie !== '') {
         var cookies = document.cookie.split(';');
         for (var i = 0; i < cookies.length; i++) {
             var cookie = jQuery.trim(cookies[i]);
             // Does this cookie string begin with the name we want?
             if (cookie.substring(0, name.length + 1) === (name + '=')) {
                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                 break;
             }
         }
     }
     return cookieValue;
 } //drošībai

var frm = $(FillBox);

frm.submit(function () {

    $.ajax({
        type: 'POST',
        url: frm.attr('action'),
        data: frm.serialize(),
        success: function (data) {
         location.reload();
        },
        error: function(data) {
         location.reload();
        }
    });
    return false;
}); // kad uzspiež "submit", padotie dati tiek sūtīti uz datu bāzi, kur tie tiek apstrādāti


var today;

function getTodayDate(){
    today = new Date()
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    today = yyyy+'-'+mm+'-'+dd;

    if (today == date2[0]){
        Monday.style.border = "2px solid #259adb";
        document.getElementById("Monday").style.color = "#259adb";
        document.getElementById("Monday").style.fontWeight = "bold";
        document.getElementById("MondayDate").style.color = "#262626";
        document.getElementById("MondayDate").style.color = "#262626";
    }
    else if (today == date2[1]){
         Tuesday.style.border = "2px solid #259adb";
         document.getElementById("Tuesday").style.color = "#259adb";
         document.getElementById("Tuesday").style.fontWeight = "bold";
         document.getElementById("TuesdayDate").style.color = "#262626";
         document.getElementById("TuesdayDate").style.fontWeight = "bold";
    }
    else if (today == date2[2]){
         Wednesday.style.border = "2px solid #259adb";
         document.getElementById("Wednesday").style.color = "#259adb";
         document.getElementById("Wednesday").style.fontWeight = "bold";
         document.getElementById("WednesdayDate").style.color = "#262626";
         document.getElementById("WednesdayDate").style.fontWeight = "bold";
    }
    else if (today == date2[3]){
         Thursday.style.border = "2px solid #259adb";
         document.getElementById("Thursday").style.color = "#259adb";
         document.getElementById("Thursday").style.fontWeight = "bold";
         document.getElementById("ThursdayDate").style.color = "#262626";
         document.getElementById("ThursdayDate").style.fontWeight = "bold";
    }
    else if (today == date2[4]){
         Friday.style.border = "2px solid #259adb";
         document.getElementById("Friday").style.color = "#259adb";
         document.getElementById("Friday").style.fontWeight = "bold";
         document.getElementById("FridayDate").style.color = "#262626";
         document.getElementById("FridayDate").style.fontWeight = "bold";
    }
    else if (today == date2[5]){
         Saturday.style.border = "2px solid #259adb";
         document.getElementById("Saturday").style.color = "#259adb";
         document.getElementById("Saturday").style.fontWeight = "bold";
         document.getElementById("SaturdayDate").style.color = "#262626";
         document.getElementById("SaturdayDate").style.fontWeight = "bold";
    }
    else if (today == date2[6]){
         Sunday.style.border = "2px solid #259adb";
         document.getElementById("Sunday").style.color = "#259adb";
         document.getElementById("Sunday").style.fontWeight = "bold";
         document.getElementById("SundayDate").style.color = "#262626";
         document.getElementById("SundayDate").style.fontWeight = "bold";
    }
} // šodienai tiek piešķirts rāmos, citi burtu parametri

getTodayDate();

var laiks = [];
var m = 0;
var tmp = [];
var n = 0;  // masiva liksu visus id, kuri ir izkrasoti
var from = 0;
var Until = 0;
var dateWhen = 0;
var iemeslsList;
var OneDay;

for (k=0 ; k < 9 ; k++ ) {
        tmp[k] = box[k].innerText.slice(0,2);
} // visi darba laiki, kas ir defaultā, tiek salikti masīvā tmp


var insert = document.getElementById("description");
var offTime = document.getElementById("offTime");
var offReasonDoc = document.getElementById('offReason');
var offWork = document.getElementById('offWork');
var inputId = document.getElementById("workId");


function setSlimiba (){
    m=0;
    var slimiba = document.getElementById("iemeslsList").querySelectorAll("#slimiba");
    //tiek ielikti visi, kur ir slimība
    offReasonDoc.innerHTML = "Slimība";



    for ( p = 0 ; p<slimiba.length ; p++){
        if (slimiba[p].innerText == "True"){
            laiks[m] = iemeslsList[p].innerText.slice(0,31);
            laiks[m] = laiks[m].split(" ");
            m++;
        }
    } // saliek masiva pec kartas visus laikus, kad ir slimiba  (datums, no , līdz)


    m = 0;
    var sickDate = [];
    var sickFrom = [];
    var sickUntil = [];

    for (p = 0 ; p < laiks.length ; p++) {
        sickDate[p] = laiks[p][m];
        sickFrom[p] = laiks[p][m+1].slice(0,2);
        sickUntil[p] = laiks[p][m+3].slice(0,2);
    } // saliek pa masiviem datumus un laikus, kad slimo

    var from = 0;
    var Until = 0;
    var date = 0;

    m=0;

    for(a = 0 ; a < sickDate.length ; a++){
        date = sickDate[a];
        from = sickFrom[a];
        Until = sickUntil[a];
        for (j = 0; j < (date2.length - 2) ; j ++){
            if (date == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#ba1d79';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkSick[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkSick[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                if (OneDay[j].id.startsWith("Tu")){
                        for(k = 9; k < 18 ; ){
                            if (tmp[k-9] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#ba1d79';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkSick[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkSick[a]);
                                    n++;
                                    k++;

                                }
                            }
                            else k++;
                        }
                    }

                    if (OneDay[j].id.startsWith("We")){
                        for(k = 18; k < 27 ; ){
                            if (tmp[k-18] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#ba1d79';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkSick[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until,willWorkSick[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Th")){
                        for(k = 27; k < 36 ; ){
                            if (tmp[k-27] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#ba1d79';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkSick[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkSick[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Fr")){
                        for(k = 36; k < 45 ; ){
                            if (tmp[k-36] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#ba1d79';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkSick[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkSick[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }console.log(willWorkSick);
            }
        }
    }


}

function setLekcijas(){
   var lekcijas = document.getElementById("iemeslsList").querySelectorAll("#lekcijas");
    laiks = [];
    m = 0;
    offReasonDoc.innerHTML= "Lekcijas";

    for ( p = 0 ; p<lekcijas.length ; p++){
        if (lekcijas[p].innerText == "True"){
            laiks[m] = iemeslsList[p].innerText.slice(0,31);
            laiks[m] = laiks[m].split(" ");
            m++;
        }
    } // saliek masiva pec kartas visus laikus, kad ir lekcijas

    m = 0;
    var uniDate = [];
    var uniFrom = [];
    var uniUntil = [];
    for (p = 0 ; p < laiks.length ; p++) {
        uniDate[p] = laiks[p][m];
        uniFrom[p] = laiks[p][m+1].slice(0,2);
        uniUntil[p] = laiks[p][m+3].slice(0,2);
    } // saliek pa masiviem datumus un laikus, kad ir lekcijas


    from = 0;
    Until = 0;
    dateWhen = 0;

    m=0;

    for(a = 0 ; a < uniDate.length ; a++){
        dateWhen = uniDate[a];
        from = uniFrom[a];
        Until = uniUntil[a];

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (dateWhen == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#f15a24';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkUni[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkUni[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                if (OneDay[j].id.startsWith("Tu")){
                        for(k = 9; k < 18 ; ){
                            if (tmp[k-9] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#f15a24';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkUni[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until), willWorkUni[a];
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                    if (OneDay[j].id.startsWith("We")){
                        for(k = 18; k < 27 ; ){
                            if (tmp[k-18] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#f15a24';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkUni[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkUni[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Th")){
                        for(k = 27; k < 36 ; ){
                            if (tmp[k-27] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#f15a24';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkUni[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkUni[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Fr")){
                        for(k = 36; k < 45 ; ){
                            if (tmp[k-36] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#f15a24';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkUni[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkUni[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
            }
        } // lekciju laikus iekraso zala krasa
    }
}

function setHome(){


    var home = document.getElementById("iemeslsList").querySelectorAll("#noMajam");
    laiks = [];
    m = 0;
    offReasonDoc.innerHTML= "Darbs no mājām";

    for ( p = 0 ; p<home.length ; p++){
        if (home[p].innerText == "True"){
            laiks[m] = iemeslsList[p].innerText.slice(0,31);
            laiks[m] = laiks[m].split(" ");
            m++;
        }
    } // saliek masiva pec kartas visus laikus, kad ir darbs no majam


    m = 0;
    var homeDate = [];
    var homeFrom = [];
    var homeUntil = [];
    for (p = 0 ; p < laiks.length ; p++) {
        homeDate[p] = laiks[p][m];
        homeFrom[p] = laiks[p][m+1].slice(0,2);
        homeUntil[p] = laiks[p][m+3].slice(0,2);
    } // saliek pa masiviem datumus un laikus, kad ir darbs no majam


    from = 0;
    Until = 0;
    dateWhen = 0;

    m=0;

    for(a = 0 ; a < homeDate.length ; a++){
        dateWhen = homeDate[a];
        from = homeFrom[a];
        Until = homeUntil[a];

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (dateWhen == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#29abe2';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                if (OneDay[j].id.startsWith("Tu")){
                        for(k = 9; k < 18 ; ){
                            if (tmp[k-9] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#29abe2';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                    if (OneDay[j].id.startsWith("We")){
                        for(k = 18; k < 27 ; ){
                            if (tmp[k-18] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#29abe2';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Th")){
                        for(k = 27; k < 36 ; ){
                            if (tmp[k-27] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#29abe2';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Fr")){
                        for(k = 36; k < 45 ; ){
                            if (tmp[k-36] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#29abe2';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
            }
        }
    } // darba no majam laikus iekraso lilla krasa

}

function setSlodze(){
        var less = document.getElementById("iemeslsList").querySelectorAll("#slodze");
    laiks = [];
    m = 0;
    offReasonDoc.innerHTML= "Mazāka slodze";

    for ( p = 0 ; p<less.length ; p++){
        if (less[p].innerText == "True"){
            laiks[m] = iemeslsList[p].innerText.slice(0,31);
            laiks[m] = laiks[m].split(" ");
            m++;
        }
    } // saliek masiva pec kartas visus laikus, kad ir mazaka slodze


    m = 0;
    var lessDate = [];
    var lessFrom = [];
    var lessUntil = [];
    for (p = 0 ; p < laiks.length ; p++) {
        lessDate[p] = laiks[p][m];
        lessFrom[p] = laiks[p][m+1].slice(0,2);
        lessUntil[p] = laiks[p][m+3].slice(0,2);
    } // saliek pa masiviem datumus un laikus, kad ir mazaka slodze


    from = 0;
    Until = 0;
    date = 0;

    m=0;

    for(a = 0 ; a < lessDate.length ; a++){
        date = lessDate[a];
        from = lessFrom[a];
        Until = lessUntil[a];

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (date == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#22b573';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                if (OneDay[j].id.startsWith("Tu")){
                        for(k = 9; k < 18 ; ){
                            if (tmp[k-9] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#22b573';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                    if (OneDay[j].id.startsWith("We")){
                        for(k = 18; k < 27 ; ){
                            if (tmp[k-18] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#22b573';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Th")){
                        for(k = 27; k < 36 ; ){
                            if (tmp[k-27] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#22b573';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Fr")){
                        for(k = 36; k < 45 ; ){
                            if (tmp[k-36] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = '#22b573';
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    offWork.innerHTML = "-";
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
            }
        }
    } // mazaku slodzi iekraso oranza krasa

}

function setOther(){
    var other = document.getElementById("iemeslsList").querySelectorAll("#cits");
    laiks = [];
    m = 0;
    offReasonDoc.innerHTML= "Cits";

    for ( p = 0 ; p<other.length ; p++){
        if (other[p].innerText == "True"){
            laiks[m] = iemeslsList[p].innerText.slice(0,31);
            laiks[m] = laiks[m].split(" ");
            m++;
        }
    } // saliek masiva pec kartas visus laikus, kad ir cits iemesls


    m = 0;
    var otherDate = [];
    var otherFrom = [];
    var otherUntil = [];
    for (p = 0 ; p < laiks.length ; p++) {
        otherDate[p] = laiks[p][m];
        otherFrom[p] = laiks[p][m+1].slice(0,2);
        otherUntil[p] = laiks[p][m+3].slice(0,2);
    } // saliek pa masiviem datumus un laikus, kad ir cits iemesls


    from = 0;
    Until = 0;
    date = 0;

    m=0;

    for(a = 0 ; a < otherDate.length ; a++){
        date = otherDate[a];
        from = otherFrom[a];
        Until = otherUntil[a];

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (date == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = "#662d91";
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkOther[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkOther[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                if (OneDay[j].id.startsWith("Tu")){
                        for(k = 9; k < 18 ; ){
                            if (tmp[k-9] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = "#662d91";
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkOther[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkOther[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }

                    if (OneDay[j].id.startsWith("We")){
                        for(k = 18; k < 27 ; ){
                            if (tmp[k-18] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = "#662d91";
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkOther[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkOther[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Th")){
                        for(k = 27; k < 36 ; ){
                            if (tmp[k-27] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = "#662d91";
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkOther[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkOther[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
                    if (OneDay[j].id.startsWith("Fr")){
                        for(k = 36; k < 45 ; ){
                            if (tmp[k-36] == from){
                                for ( m = from ; m < Until ; m++) {
                                    box[k].style.backgroundColor = "#662d91";
                                    offTime.innerHTML = from + ":00" + "-" + Until + ":00";
                                    setOffWork(willWorkOther[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkOther[a]);
                                    n++;
                                    k++;
                                }
                            }
                            else k++;
                        }
                    }
            }
        }
    } // citu iemeslu iekraso zila krasa

}

var willWork = [];
var willWorkSick = [];
var willWorkUni = [];
var willWorkOther = [];


function setColors(){
    iemeslsList = document.getElementById("iemeslsList").getElementsByClassName("one");
    //ieliek masīvā atsevišķi visus iemeslus, vēlāk tiks izmantots, lai katru iemeslu atsevišķi ieliktu citā masīvā
    var workFrom = document.getElementsByClassName("atstradasNo");
    var workUntil = document.getElementsByClassName("atstradasLidz");
    var workDate = document.getElementsByClassName("atstradasKad");
    var willWorkReason = document.getElementsByClassName("atstradasKapec");
    var lessWork = document.getElementsByClassName("less");
    var k = 0 ;
    var j = 0;
    var s = 0;

    for (i = 0; i< willWorkReason.length; i++) {
        if (willWorkReason[i].innerHTML.startsWith('Slimiba')) {
            willWorkSick[k] = workDate[i].innerHTML + "  " + workFrom[i].innerHTML + "-" + workUntil[i].innerHTML;
            k++;
        }
        else if (willWorkReason[i].innerHTML.startsWith('Lekc')) {
            willWorkUni[j] = workDate[i].innerHTML + "  " + workFrom[i].innerHTML + "-" + workUntil[i].innerHTML;
            j++;
        }
        else if (willWorkReason[i].innerHTML.startsWith('Cits')) {
            willWorkOther[s] = workDate[i].innerHTML + "  " + workFrom[i].innerHTML + "-" + workUntil[i].innerHTML;
            s++;
        }
    }




    OneDay = document.getElementsByClassName("OneDay");
    // masīvā tiek ielikts katras dienas bloks ar visiem datiem
    setSlimiba();
    setLekcijas();
    setHome();
    setSlodze();
    setOther();




}


setColors();


function setOffWork(willWork){
    if(willWork){
        offWork.innerHTML = willWork;
    }
    else {
        offWork.innerHTML = "Nav norādīts";
    }

}


var dateForm = document.getElementById("dateForm");
var fromForm = document.getElementById("fromForm");
var untilForm = document.getElementById("untilForm");

function setDeleteForm(date, from, Until){
    dateForm.value = date;
    fromForm.value = from + ":00";
    untilForm.value = Until + ":00";
};


function setColoredBox(target, date, from, Until, willWork){
    target.style.color = "#ffffff";

    $(target).click(function(event){
        deleteBox.style.display = "block";
        deleteBox.style.position = "absolute";
        delete willWork;

        var now = $(this).attr('id');
        if (now.startsWith("M")){
            $("#Mo" ).append($("#delete"));
            setDeleteForm(date, from, Until);
            FillBox.style.display = "none";
        }
        else if (now.startsWith("Tu")){
            $("#Tu" ).append($("#delete"));
            setDeleteForm(date, from, Until);
            FillBox.style.display = "none";
        }
        else if (now.startsWith("We")){
            $("#We" ).append($("#delete"));
            setDeleteForm(date, from, Until);
            FillBox.style.display = "none";
        }
        else if (now.startsWith("Th")){
            $("#Th" ).append($("#delete"));
            setDeleteForm(date, from, Until);
            FillBox.style.display = "none";
        }
        else if (now.startsWith("F")){
            $("#Fr" ).append($("#delete"));
            setDeleteForm(date, from, Until);
            FillBox.style.display = "none";
         }
    });
}



var save = document.getElementById("Save");
var inputReason = document.getElementById("InputReason");


var sickInput = document.getElementById("Sick");
var lectureInput = document.getElementById("Lecture");
var workFromHomeInput = document.getElementById("WorkFromHome");
var workloadInput = document.getElementById("Workload");
var otherInput = document.getElementById("Other");



if(save){
if(save.disabled){
    save.style.backgroundColor = "grey";
}
}


$(function(){
$('[data-toggle = "tooltip" ]').tooltip();
});






});