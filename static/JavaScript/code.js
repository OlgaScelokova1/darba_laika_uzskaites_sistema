(function() {




var Monday = document.getElementById("mondayBox");
var Tuesday = document.getElementById("tuesdayBox");
var Wednesday = document.getElementById("wednesdayBox");
var Thursday = document.getElementById("thursdayBox");
var Friday = document.getElementById("fridayBox");
var Saturday = document.getElementById("SsaturdayList");
var Sunday = document.getElementById("SundayList");

var FillBox = document.getElementById("Fill");

var reason = document.getElementById("InputReason");

var year = new Date().getFullYear();
var datums = 0 ;
var menesis = 0;

var date1 = document.getElementsByClassName("Date");
var date2 = [0];

for (i=0 ; i<date1.length; i++){
    datums = date1[i].innerText.slice(0,2);
    menesis = date1[i].innerText.slice(4,6);
    date2[i] = year + '-' + menesis + '-' + datums;
} //parveidoju datuma formu no html un ielieku katru dienu masiva date2[]


$(document).click(function(event){
    FillBox.style.display = "none";
});

$('#Fill').click(function(event){
    event.stopPropagation();
});

$('.box2').click(function(event){
        FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        // reason.value = "";
        var now = $(this).attr('id');
        // console.log (now);
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
        }
        document.getElementById('InputFrom').defaultValue = now.slice(2,4) + ":00";
        document.getElementById('InputUntill').defaultValue = now.slice(5) + ":00";
    event.stopPropagation();
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
 }

var frm = $('#Fill');

    frm.submit(function () {

        $.ajax({
            type: 'POST',
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data) {
                console.log(data);
            },
            error: function(data) {
                console.log(data);
            }
        });

        console.log($("#Reason").val());
        frm.cleanData();
        return false;
    });


var today = new Date();
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

console.log(today);

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



// var nebusList = [document.getElementById("nebusList").getElementsByClassName("one") , document.getElementById("nebus").getElementsByTagName("li")];
// var iemesls = [document.getElementById("iemeslsList").getElementsByClassName("one"), document.getElementById("iemesls").getElementsByTagName("li")];
// var atstradaList = [document.getElementById("atstradaList").getElementsByClassName("one") , document.getElementById("atstrada").getElementsByTagName("li")];
//
// // var nebus = document.getElementById("atstrada").getElementsByTagName("li");
var iemeslsList = document.getElementById("iemeslsList").getElementsByClassName("one");
// // var atstrada = document.getElementById("atstrada").getElementsByTagName("li");




var OneDay = document.getElementsByClassName("OneDay");






var slimiba = document.getElementById("iemeslsList").querySelectorAll("#slimiba");
var laiks = [0];

var m = 0;
var box = document.getElementsByClassName("box2");


var tmp = [0];
var coloredId = [0];
var n = 0;  // masiva liksu visus id, kuri ir izkrasoti



for (k=0 ; k < 9 ; k++ ) {
    tmp[k] = box[k].innerText.slice(0,2);
} // darba laiki masiva


for ( p = 0 ; p<slimiba.length ; p++){
    if (slimiba[p].innerText == "True"){
        laiks[m] = iemeslsList[p].innerText.slice(0,31);
        laiks[m] = laiks[m].split(" ");
        m++;
    }
} // saliek masiva pec kartas visus laikus, kad ir slimiba

m = 0;
var sickDate = [0];
var sickFrom = [0];
var sickUntill = [0];

for (p = 0 ; p < laiks.length ; p++) {
    sickDate[p] = laiks[p][m];
    sickFrom[p] = laiks[p][m+1].slice(0,2);
    sickUntill[p] = laiks[p][m+3].slice(0,2);
} // saliek pa masiviem datumus un laikus, kad slimo

var from = 0;
var untill = 0;
var date = 0;

m=0;

for(a = 0 ; a < sickDate.length ; a++){
    date = sickDate[a];
    from = sickFrom[a];
    untill = sickUntill[a];

    for (j = 0; j < (date2.length - 2) ; j ++){
        if (date == date2[j]){

            if (OneDay[j].id.startsWith("Mo")){
                    for(k = 0; k < 9 ; ){
                        if (tmp[k] == from){
                            for ( m = from ; m < untill ;m++) {
                                box[k].style.backgroundColor = 'red';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'red';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'red';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'red';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'red';
                                coloredId[n] = box[k];
                                n++;
                                k++;
                            }
                        }
                        else k++;
                    }
                }
        }
    }
}// slimibas laikus iekraso sarkana krasa



var lekcijas = document.getElementById("iemeslsList").querySelectorAll("#lekcijas");
laiks = [];
m = 0;
for ( p = 0 ; p<lekcijas.length ; p++){
    if (lekcijas[p].innerText == "True"){
        laiks[m] = iemeslsList[p].innerText.slice(0,31);
        laiks[m] = laiks[m].split(" ");
        m++;
    }
} // saliek masiva pec kartas visus laikus, kad ir lekcijas

m = 0;
var uniDate = [0];
var uniFrom = [0];
var uniUntill = [0];
for (p = 0 ; p < laiks.length ; p++) {
    uniDate[p] = laiks[p][m];
    uniFrom[p] = laiks[p][m+1].slice(0,2);
    uniUntill[p] = laiks[p][m+3].slice(0,2);
} // saliek pa masiviem datumus un laikus, kad ir lekcijas


from = 0;
untill = 0;
date = 0;

m=0;

for(a = 0 ; a < uniDate.length ; a++){
    date = uniDate[a];
    from = uniFrom[a];
    untill = uniUntill[a];

    for (j = 0; j < (date2.length - 2) ; j ++){
        if (date == date2[j]){

            if (OneDay[j].id.startsWith("Mo")){
                    for(k = 0; k < 9 ; ){
                        if (tmp[k] == from){
                            for ( m = from ; m < untill ;m++) {
                                box[k].style.backgroundColor = 'green';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'green';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'green';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'green';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'green';
                                coloredId[n] = box[k];
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


var home = document.getElementById("iemeslsList").querySelectorAll("#noMajam");
laiks = [];
m = 0;

for ( p = 0 ; p<home.length ; p++){
    if (home[p].innerText == "True"){
        laiks[m] = iemeslsList[p].innerText.slice(0,31);
        laiks[m] = laiks[m].split(" ");
        m++;
    }
} // saliek masiva pec kartas visus laikus, kad ir darbs no majam


m = 0;
var homeDate = [0];
var homeFrom = [0];
var homeUntill = [0];
for (p = 0 ; p < laiks.length ; p++) {
    homeDate[p] = laiks[p][m];
    homeFrom[p] = laiks[p][m+1].slice(0,2);
    homeUntill[p] = laiks[p][m+3].slice(0,2);
} // saliek pa masiviem datumus un laikus, kad ir darbs no majam


from = 0;
untill = 0;
date = 0;

m=0;

for(a = 0 ; a < homeDate.length ; a++){
    date = homeDate[a];
    from = homeFrom[a];
    untill = homeUntill[a];

    for (j = 0; j < (date2.length - 2) ; j ++){
        if (date == date2[j]){

            if (OneDay[j].id.startsWith("Mo")){
                    for(k = 0; k < 9 ; ){
                        if (tmp[k] == from){
                            for ( m = from ; m < untill ;m++) {
                                box[k].style.backgroundColor = 'purple';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'purple';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'purple';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'purple';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'purple';
                                coloredId[n] = box[k];
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



var less = document.getElementById("iemeslsList").querySelectorAll("#slodze");
laiks = [];
m = 0;

for ( p = 0 ; p<less.length ; p++){
    if (less[p].innerText == "True"){
        laiks[m] = iemeslsList[p].innerText.slice(0,31);
        laiks[m] = laiks[m].split(" ");
        m++;
    }
} // saliek masiva pec kartas visus laikus, kad ir mazaka slodze


m = 0;
var lessDate = [0];
var lessFrom = [0];
var lessUntill = [0];
for (p = 0 ; p < laiks.length ; p++) {
    lessDate[p] = laiks[p][m];
    lessFrom[p] = laiks[p][m+1].slice(0,2);
    lessUntill[p] = laiks[p][m+3].slice(0,2);
} // saliek pa masiviem datumus un laikus, kad ir mazaka slodze


from = 0;
untill = 0;
date = 0;

m=0;

for(a = 0 ; a < lessDate.length ; a++){
    date = lessDate[a];
    from = lessFrom[a];
    untill = lessUntill[a];

    for (j = 0; j < (date2.length - 2) ; j ++){
        if (date == date2[j]){

            if (OneDay[j].id.startsWith("Mo")){
                    for(k = 0; k < 9 ; ){
                        if (tmp[k] == from){
                            for ( m = from ; m < untill ;m++) {
                                box[k].style.backgroundColor = 'orange';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'orange';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'orange';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'orange';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'orange';
                                coloredId[n] = box[k];
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


var other = document.getElementById("iemeslsList").querySelectorAll("#cits");
laiks = [];
m = 0;

for ( p = 0 ; p<other.length ; p++){
    if (other[p].innerText == "True"){
        laiks[m] = iemeslsList[p].innerText.slice(0,31);
        laiks[m] = laiks[m].split(" ");
        m++;
    }
} // saliek masiva pec kartas visus laikus, kad ir cits iemesls


m = 0;
var otherDate = [0];
var otherFrom = [0];
var otherUntill = [0];
for (p = 0 ; p < laiks.length ; p++) {
    otherDate[p] = laiks[p][m];
    otherFrom[p] = laiks[p][m+1].slice(0,2);
    otherUntill[p] = laiks[p][m+3].slice(0,2);
} // saliek pa masiviem datumus un laikus, kad ir cits iemesls


from = 0;
untill = 0;
date = 0;

m=0;

for(a = 0 ; a < otherDate.length ; a++){
    date = otherDate[a];
    from = otherFrom[a];
    untill = otherUntill[a];

    for (j = 0; j < (date2.length - 2) ; j ++){
        if (date == date2[j]){

            if (OneDay[j].id.startsWith("Mo")){
                    for(k = 0; k < 9 ; ){
                        if (tmp[k] == from){
                            for ( m = from ; m < untill ;m++) {
                                box[k].style.backgroundColor = 'blue';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'blue';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'blue';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'blue';
                                coloredId[n] = box[k];
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
                            for ( m = from ; m < untill ; m++) {
                                box[k].style.backgroundColor = 'blue';
                                coloredId[n] = box[k];
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






console.log(iemeslsList);
console.log(coloredId);

laiks = [];
m = 0;
for ( p = 0 ; p<iemeslsList.length ; p++){
        laiks[m] = iemeslsList[p].innerText.slice();
        // laiks[m] = laiks[m].split(" ");
        laiks[m] = laiks[m].split("\n");
        m++;
} // saliek masiva pec kartas visus laikus, kad nebus


    console.log(laiks);

var offDate = [];
var offFrom = [];
var offUntill = [];
var offReason = [];
m=0;




for (p = 0 ; p < laiks.length ; p++) {
    offDate[p] = laiks[p][m].slice(0,10);
    offFrom[p] = laiks[p][m].slice(11,13);
    offUntill[p] = laiks[p][m].slice(22,24);
    if(laiks[p][1]=="True"){
        offReason[p] = "Slimība";
    }
    else if (laiks[p][2]=="True"){
        offReason[p] = "Atvaļinājums";
    }
    else if (laiks[p][3]=="True"){
        offReason[p] = "Lekcijas";
    }
    else if (laiks[p][4]=="True"){
        offReason[p] = "Darbs no mājām";
    }
    else if (laiks[p][5]=="True"){
        offReason[p] = "Mazāka slodze";
    }
    else if (laiks[p][6]=="True"){
        offReason[p] = "Cits";
    }

} // saliek pa masiviem datumus un laikus, un iemeslus, kad nestrada

console.log(offDate);
console.log(offFrom);
console.log(offUntill);
console.log(offReason);
console.log(coloredId);
console.log(date2);
tmp = [0];
var tmpDate =[];
var tmpFrom = [];


for (k=0 ; k < coloredId.length ; k++ ){

    var now = coloredId[k].id;
    if (now.startsWith("M")){
        tmpDate[k] = date2[0];
    }
    else if (now.startsWith("Tu")){
        tmpDate[k] = date2[1];
    }
    else if (now.startsWith("We")){
        tmpDate[k] = date2[2];
    }
    else if (now.startsWith("Th")){
        tmpDate[k] = date2[3];
    }
    else if (now.startsWith("F")){
        tmpDate[k] = date2[4];
    }
    tmpFrom[k] = now.slice(2,4)
}
console.log(tmpDate);
console.log(tmpFrom);

var offTime = document.getElementById('offTime');
var offReasonDoc = document.getElementById('offReason');
var offWork = document.getElementById('offWork');
var insert = document.getElementById("description");



// for (i = 0 ; i < coloredId.length ; i++){
//     $(coloredId[i] ).mouseover(function() {
//         console.log(this);
//        $( '#description' ).show();
//         for (k=0 ; k < tmpDate.length ; k++){
//             for(p=0 ; p<offDate.length ; p++) {
//                 console.log(tmpDate[k] + "salidzina ar" + offDate[p]);
//                 if (tmpDate[k] == offDate[k] && tmpFrom[k] == offFrom[p]) {
//                     offTime.innerHTML = offFrom[p];
//                     offReasonDoc.innerHTML = offReason[p];
//                     offWork.innerHTML = 'To do';
//
//
//                 }
//             }
//
//
//         }
//
//
//
//     });
// }

























})();