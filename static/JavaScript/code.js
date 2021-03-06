$(document).ready(function() {

var today = new Date();
var thisWeek = getWeek(today); // tiek iegūta šī nedēļa
var documentWeek = document.getElementById("WeekDate").innerHTML;

if (thisWeek != documentWeek){
    $(".OneDay").slideUp(1).delay(200).slideDown('fast');
} // ja nav šī nedēļa, tad, pāršķirot nedēļu, efekts

var monday = document.getElementById("mondayReceived").innerHTML;
var tuesday = document.getElementById("tuesdayReceived").innerHTML;
var wednesday = document.getElementById("wednesdayReceived").innerHTML;
var thursday = document.getElementById("thursdayReceived").innerHTML;
var friday = document.getElementById("fridayReceived").innerHTML;
var saturday = document.getElementById("saturdayReceived").innerHTML;
var sunday = document.getElementById("sundayReceived").innerHTML;
//tiek ierakstīti mainīgajos visi nedēļas datumi, kas tiek saņemti


function datesInDateFormat(){
    monday = new Date(monday);
    tuesday = new Date(tuesday);
    wednesday = new Date (wednesday);
    thursday = new Date (thursday);
    friday = new Date (friday);
    saturday = new Date (saturday);
    sunday = new Date (sunday);
} // visi datumi tiek pārveidoti par datumiem

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
} // funkcija, kas citos mainīgajos ievieto noformētus nedēļas datumus

formatAllDates();

function writeDates(){
    document.getElementById("MondayDate").innerHTML = formattedDateMonday;
    document.getElementById("TuesdayDate").innerHTML = formattedDateTuesday;
    document.getElementById("WednesdayDate").innerHTML = formattedDateWednesday;
    document.getElementById("ThursdayDate").innerHTML = formattedDateThursday;
    document.getElementById("FridayDate").innerHTML = formattedDateFriday;
    document.getElementById("SaturdayDate").innerHTML = formattedDateSaturday;
    document.getElementById("SundayDate").innerHTML = formattedDateSunday;
} // funkcija, kas ieraksta datumus html

writeDates();

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
} // funckija, kas pievieno dienas padotajai dienai

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
} // funkcija, kas pievieno dienas priekš nākamās nedēļas

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
} // funkcija, kas atņem dienas priekš iepriekšējās nedēļas


function setValuesForFormUp (){
    addDates();
    document.getElementById("mondaySend").value = addMonday;
    document.getElementById("tuesdaySend").value = addTuesday;
    document.getElementById("wednesdaySend").value = addWednesday;
    document.getElementById("thursdaySend").value = addThursday;
    document.getElementById("fridaySend").value = addFriday;
    document.getElementById("saturdaySend").value = addSaturday;
    document.getElementById("sundaySend").value = addSunday;
}   // funkcija, kas ievieto formā (pogā uz augšu) vērtības priekš nākamās nedēļas

function setValuesForFormDown(){
    removeDates();
    document.getElementById("mondaySendDown").value = removeMonday;
    document.getElementById("tuesdaySendDown").value = removeTuesday;
    document.getElementById("wednesdaySendDown").value = removeWednesday;
    document.getElementById("thursdaySendDown").value = removeThursday;
    document.getElementById("fridaySendDown").value = removeFriday;
    document.getElementById("saturdaySendDown").value = removeSaturday;
    document.getElementById("sundaySendDown").value = removeSunday;
} // funkcija, kas ievieto formā (pogā uz leju) vērtības priekš iepriekšējās nedēļas

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

}// ar šo funkciju dokumenā tiek ierakstīts mēnesis un nedēļa pēc kārtas

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

if(FillBox){
    $(document).click(function(event){
        FillBox.style.display = "none";
        deleteBox.style.display =  "none";
    }); // ja uzspiež jebkur lapā, kastīte tiek paslēpta

    $(FillBox).click(function(event){
        event.stopPropagation();
    }); // ja uzspiež uz kastītes, tā netiek paslēpt

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

$(document).on('click', 'li.ui-menu-item', function(e) {
    e.stopPropagation();
});

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
    var date1 = document.getElementById("InputDate");
    var from1 = document.getElementById("InputFrom");
    var until1 = document.getElementById("InputUntil");
    var date2 = document.getElementById("AfterDate");
    var from2 = document.getElementById("AfterFrom");
    var until2 = document.getElementById("AfterUntil");
    var reason = document.getElementById("InputReason");

    if(!date1.value){
        alert("Lūdzu, ievadiet kavējuma datumu!")
        return false;
    }

    if(!from1.value){
        alert("Lūdzu, ievadiet laiku, kad nestrādāsiet!")
        return false;
    }

    if(!until1.value){
        alert("Lūdzu, ievadiet laiku, kad nestrādāsiet!")
        return false;
    }

    if (from1.value>until1.value){
        alert("Nepareizi ievadīts laiks")
        return false;
    } // formu pārbaude, ja ievadītais laiks no ir lielāks par laiku līdz, tiek izvadīts paziņojums

    if (from2.value>until2.value){
        alert("Nepareizi ievadīts laiks")
        return false;
    } // formu pārbaude, ja ievadītais laiks no ir lielāks par laiku līdz, tiek izvadīts paziņojums

    if(reason.value == "Slimiba" || reason.value == "Lekcijas" || reason.value == "Cits"){
        if(!date2.value || !from2.value || !until2.value){
            alert("Lūdzu, ievadiet laiku, kad tiks atstrādāts!")
            return false;
        }
        var isValidFrom2 = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(from2.value);
        var isValidUntil2 = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(until2.value);
        if(!isValidFrom2 || !isValidUntil2){
            alert("Nepareizi ievadīts laiks")
            return false;
        }
    } // formu pārbaude, ja ievadīti iemesli, kas jāatstrādā, tiek pieprasīts ievadīt atstrādāšanas laikus

    var isValidFrom1 = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(from1.value);
    var isValidUntil1 = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(until1.value);


    if(!isValidFrom1 || !isValidUntil1){
        alert("Nepareizi ievadīts laiks")
            return false;
    }


//     $.ajax({
//         type: 'POST',
//         url: frm.attr('action'),
//         data: frm.serialize(),
//         success: function (data) {
//          location.reload();
//         },
//         error: function(data) {
//          location.reload();
//         }
//     });
//     return false;
}); // kad uzspiež "submit", padotie dati tiek sūtīti uz datu bāzi, kur tie tiek apstrādāti


var today;
var forResize; // šis mainīgais tiks izmantots vēlāk, kad tiks mainīts ekrāna lielums

var dayLists = document.getElementsByClassName("OneDay");


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
    //tiek iegūts šodienas datums formātā, kādā ir date2[] masīvā datumi

    var mondayTime = document.getElementById("Monday");
    var mondayDate = document.getElementById("MondayDate");
    var tuesdayTime = document.getElementById("Tuesday");
    var tuesdayDate = document.getElementById("TuesdayDate");
    var wednesdayTime = document.getElementById("Wednesday");
    var wednesdayDate = document.getElementById("WednesdayDate");
    var thursdayTime = document.getElementById("Thursday");
    var thursdayDate = document.getElementById("ThursdayDate");
    var fridayTime = document.getElementById("Friday");
    var fridayDate = document.getElementById("FridayDate");
    var saturdayTime = document.getElementById("Saturday");
    var saturdayDate = document.getElementById("SaturdayDate");
    var sundayTime = document.getElementById("Sunday");
    var sundayDate = document.getElementById("SundayDate");
    // tiek salikti mainīgajos visi elementi, kas var tikt mainīti


    if (today == date2[0]){
        setSpecificDay(Monday, mondayTime, mondayDate);
        forResize = dayLists[0];
    } //ja šodien ir attēlotās nedēļas pirmdiena, tad pirmdiena tiks izcelta
    else if (today == date2[1]){
         setSpecificDay(Tuesday, tuesdayTime, tuesdayDate);
         forResize = dayLists[1];
    } //ja šodien ir attēlotās nedēļas otrdiena, tad otrdiena tiks izcelta
    else if (today == date2[2]){
        setSpecificDay(Wednesday, wednesdayTime, wednesdayDate);
        forResize = dayLists[2];
    } //ja šodien ir attēlotās nedēļas trešdiena, tad trešdiena tiks izcelta
    else if (today == date2[3]){
         setSpecificDay(Thursday, thursdayTime, thursdayDate);
         forResize = dayLists[3];
    }//ja šodien ir attēlotās nedēļas ceturtdiena, tad ceturtdiena tiks izcelta
    else if (today == date2[4]){
         setSpecificDay(Friday, fridayTime, fridayDate);
         forResize = dayLists[4];
    }//ja šodien ir attēlotās nedēļas piektdiena, tad piektdiena tiks izcelta
    else if (today == date2[5]){
         setSpecificDay(Saturday, saturdayTime, saturdayDate);
    }//ja šodien ir attēlotās nedēļas sestdiena, tad sestdiena tiks izcelta
    else if (today == date2[6]){
         setSpecificDay(Sunday, sundayTime, sundayDate);
    }//ja šodien ir attēlotās nedēļas svētdiena, tad svētdiena tiks izcelta
} // šodienai tiek piešķirts rāmos, citi burtu parametri

function setSpecificDay(day, dayTime, date){
    day.style.border = "2px solid #259adb";
    dayTime.style.color = "#259adb";
    dayTime.style.fontWeight = "bold";
    date.style.color = "#262626";
    date.style.fontWeight = "bold";
} // ar šo funkciju tiek noteikti parametri, kas tiek mainīti attiecīgajai dienai


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
    //description kastītē ierakstīts iemesls

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
        sickFrom[p] = laiks[p][m+1].slice(0,5);
        sickUntil[p] = laiks[p][m+3].slice(0,5);
    } // saliek pa masiviem datumus un laikus, kad slimo

    var from = 0;
    var Until = 0;
    var date = 0;

    m=0;

    for(a = 0 ; a < sickDate.length ; a++){
        date = sickDate[a];
        from = sickFrom[a].slice(0,2);
        Until = sickUntil[a].slice(0,2);
        for (j = 0; j < (date2.length - 2) ; j ++){
            if (date == date2[j]){
                //ja datums, kad slimo, sakrīt ar datumu,kas ir attiecīgajai dienai
                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                //ja atrasts darba laiks, kas sakrīt ar laiku no, tiek izpildīts cikls
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#ba1d79';
                                    offTime.innerHTML = sickFrom[a] + "-" + sickUntil[a] ;
                                    setOffWork(willWorkSick[a]);
                                    box[k].title = insert.textContent;
                                    setColoredBox(box[k], laiks[a][0], from, Until, willWorkSick[a]);
                                    n++;
                                    k++;
                                    //tiek piešķirts stils attiecīgajam laukam līdz brīdim, kas sasniegts laiks, līdz cikiem nebūs
                                    // tiek piešķirtas vērtības description kastītei
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
                                    offTime.innerHTML = sickFrom[a] + "-" + sickUntil[a];
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
                                    offTime.innerHTML = sickFrom[a] + "-" + sickUntil[a];
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
                                    offTime.innerHTML = sickFrom[a] + "-" + sickUntil[a];
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
                                    offTime.innerHTML = sickFrom[a] + "-" + sickUntil[a];
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
        uniFrom[p] = laiks[p][m+1].slice(0,5);
        uniUntil[p] = laiks[p][m+3].slice(0,5);
    } // saliek pa masiviem datumus un laikus, kad ir lekcijas


    from = 0;
    Until = 0;
    dateWhen = 0;

    m=0;

    for(a = 0 ; a < uniDate.length ; a++){
        dateWhen = uniDate[a];
        from = uniFrom[a].slice(0,2);
        Until = uniUntil[a].slice(0,2);

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (dateWhen == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#f15a24';
                                    offTime.innerHTML = uniFrom[a] + "-" + uniUntil[a];
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
                                    offTime.innerHTML = uniFrom[a] + "-" + uniUntil[a];
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
                                    offTime.innerHTML = uniFrom[a] + "-" + uniUntil[a];
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
                                    offTime.innerHTML = uniFrom[a] + "-" + uniUntil[a];
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
                                    offTime.innerHTML = uniFrom[a] + "-" + uniUntil[a];
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
        homeFrom[p] = laiks[p][m+1].slice(0,5);
        homeUntil[p] = laiks[p][m+3].slice(0,5);
    } // saliek pa masiviem datumus un laikus, kad ir darbs no majam


    from = 0;
    Until = 0;
    dateWhen = 0;

    m=0;

    for(a = 0 ; a < homeDate.length ; a++){
        dateWhen = homeDate[a];
        from = homeFrom[a].slice(0,2);
        Until = homeUntil[a].slice(0,2);

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (dateWhen == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#29abe2';
                                    offTime.innerHTML = homeFrom[a] + "-" + homeUntil[a];
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
                                    offTime.innerHTML = homeFrom[a] + "-" + homeUntil[a];
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
                                    offTime.innerHTML = homeFrom[a] + "-" + homeUntil[a];
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
                                    offTime.innerHTML = homeFrom[a] + "-" + homeUntil[a];
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
                                    offTime.innerHTML = homeFrom[a] + "-" + homeUntil[a];
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
        lessFrom[p] = laiks[p][m+1].slice(0,5);
        lessUntil[p] = laiks[p][m+3].slice(0,5);
    } // saliek pa masiviem datumus un laikus, kad ir mazaka slodze


    from = 0;
    Until = 0;
    date = 0;

    m=0;

    for(a = 0 ; a < lessDate.length ; a++){
        date = lessDate[a];
        from = lessFrom[a].slice(0,2);
        Until = lessUntil[a].slice(0,2);

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (date == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = '#22b573';
                                    offTime.innerHTML = lessFrom[a] + "-" + lessUntil[a];
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
                                    offTime.innerHTML = lessFrom[a] + "-" + lessUntil[a];
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
                                    offTime.innerHTML = lessFrom[a] + "-" + lessUntil[a];
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
                                    offTime.innerHTML = lessFrom[a] + "-" + lessUntil[a];
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
                                    offTime.innerHTML = from + ":00" + "-" + lessUntil[a];
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
        otherFrom[p] = laiks[p][m+1].slice(0,5);
        otherUntil[p] = laiks[p][m+3].slice(0,5);
    } // saliek pa masiviem datumus un laikus, kad ir cits iemesls


    from = 0;
    Until = 0;
    date = 0;

    m=0;

    for(a = 0 ; a < otherDate.length ; a++){
        date = otherDate[a];
        from = otherFrom[a].slice(0,2);
        Until = otherUntil[a].slice(0,2);

        for (j = 0; j < (date2.length - 2) ; j ++){
            if (date == date2[j]){

                if (OneDay[j].id.startsWith("Mo")){
                        for(k = 0; k < 9 ; ){
                            if (tmp[k] == from){
                                for ( m = from ; m < Until ;m++) {
                                    box[k].style.backgroundColor = "#662d91";
                                    offTime.innerHTML = otherFrom[a] + "-" + otherUntil[a];
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
                                    offTime.innerHTML = otherFrom[a] + "-" + otherUntil[a];
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
                                    offTime.innerHTML = otherFrom[a] + "-" + otherUntil[a];
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
                                    offTime.innerHTML = otherFrom[a] + "-" + otherUntil[a];
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
                                    offTime.innerHTML = otherFrom[a] + "-" + otherUntil[a];
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
        } // tiek izveidoti masīvi ar atstrādāšanas laikiem priekš description kastītes
}

    OneDay = document.getElementsByClassName("OneDay");
    // masīvā tiek ielikts katras dienas bloks ar visiem datiem
    setSlimiba();
    setLekcijas();
    setHome();
    setSlodze();
    setOther();

} // ar šo funkciju tiek iekrāsoti visi lauki.

setColors();

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
    //tiek padota kastīte, tai tiek piešķirta cita fonta krāsa
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
         } // uzspiežot uz šīs kastītes, tagad tiks atvērta dzēst poga un netiks attēlota kavējumu aizpildāmā forma
    });
}

function setOffWork(willWork){
    offWork.innerHTML = willWork;
}

var save = document.getElementById("Save");
var inputReason = document.getElementById("InputReason");

var sickInput = document.getElementById("Sick");
var lectureInput = document.getElementById("Lecture");
var workFromHomeInput = document.getElementById("WorkFromHome");
var workloadInput = document.getElementById("Workload");
var otherInput = document.getElementById("Other");

$(function(){
$('[data-toggle = "tooltip" ]').tooltip();
});

if(FillBox){
    $('.DateField').datepicker({
            autoclose: true,
            format: 'yyyy-mm-dd',
            language: "lv",
            daysOfWeekHighlighted: "0,6",
            todayHighlight: true,
    });

    $('.timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        dynamic: true,
    });
} // tiek piešķirts datepicker un timepicker priekš kavēkjumu atzīmēšanas kastītes laukiem


$('#InputUntil').on('input', function() {
        var from = document.getElementById("InputFrom");
        var until = document.getElementById("InputUntil");
        if(from.value>until.value){
            until.style.borderColor = "red";
        }
        else{
            until.style.borderColor = "#c7d8eb";
        }
}); // ja vērtība līdz ir mazāka par vērtību no, līdz parādās sarkans rāmis

$('#InputFrom').on('input', function() {
        var from = document.getElementById("InputFrom");
        var until = document.getElementById("InputUntil");
        if(from.value>until.value){
            until.style.borderColor = "red";
        }
        else{
            until.style.borderColor = "#c7d8eb";
        }
}); // ja vērtība līdz ir mazāka par vērtību no, līdz parādās sarkans rāmis


$('#AfterUntil').on('input', function() {
        var from = document.getElementById("AfterFrom");
        var until = document.getElementById("AfterUntil");
        if(from.value>until.value){
            until.style.borderColor = "red";
        }
        else{
            until.style.borderColor = "#c7d8eb";
        }
}); // ja vērtība līdz ir mazāka par vērtību no, līdz parādās sarkans rāmis


$('#AfterFrom').on('input', function() {
        var from = document.getElementById("AfterFrom");
        var until = document.getElementById("AfterUntil");
        if(from.value>until.value){
            until.style.borderColor = "red";
        }
        else{
            until.style.borderColor = "#c7d8eb";
        }
}); // ja vērtība līdz ir mazāka par vērtību no, līdz parādās sarkans rāmis

window.onresize = function() {
    toggle();
}

function toggle() {
    if ($(window).width()<768){

            if(forResize){
                for (i=0; i<dayLists.length; i++){
                    if(dayLists[i]!=forResize){
                        dayLists[i].style.display = "none";
                    }
                }
                forResize.style.marginTop="-50px";
            }
            else{
                for(i=1; i<dayLists.length; i++){
                    dayLists[i].style.display = "none";
                }
                dayLists[0].style.marginTop="-50px";

            }
            document.getElementById("Month").style.marginTop="-200px";
            document.getElementById("weekChange").style.marginLeft="50px";

    } // ja ekrāna platums ir mazāks par 768, tiek attēlota tikai konkrētā diena, ja konkrētā diena ir brīvdiena, tiek attēlota pirmdiena

    else if ($(window).width()<995){
            if(forResize){
                for (i=0; i<dayLists.length; i++){
                    if(dayLists[i]!=forResize){
                        dayLists[i].style.display = "none";
                    }
                }
                forResize.style.marginTop="0";
            }
            else{
                for(i=1; i<dayLists.length; i++){
                    dayLists[i].style.display = "none";
                }
                dayLists[0].style.marginTop="0";

            }
            document.getElementById("Month").style.marginTop="0";

    }// ja ekrāna platums ir mazāks par 995, tiek attēlota tikai konkrētā diena, ja konkrētā diena ir brīvdiena, tiek attēlota pirmdiena

    else if ($(window).width()<1200){
        document.getElementById("HolidayList").style.display="none";
        document.getElementById("Month").style.marginTop="0";
        for(i=0; i<5; i++){
            dayLists[i].style.display = "block";
        }
        if(forResize){
            forResize.style.marginTop="0";
        }
        else{
            dayLists[0].style.marginTop="0";
        }
    } // ja ekrāna platums ir mazāks par 1200, netiek attēlotas brīvdienas

    else {
        for(i=0; i<dayLists.length; i++){
            dayLists[i].style.display = "block";
        }
        document.getElementById("Month").style.marginTop="0";
        if(forResize){
            forResize.style.marginTop="0";
        }
        else{
            dayLists[0].style.marginTop="0";
        }
    } // citādāk tiek attēlots viss
}

toggle();

});