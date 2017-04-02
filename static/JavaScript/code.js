(function() {




// var Monday = document.getElementById("MondayList").getElementsByClassName("box2");
// var Tuesday = document.getElementById("TuesdayList").getElementsByClassName("box2");
// var Wednesday = document.getElementById("WednesdayList").getElementsByClassName("box2");
// var Thursday = document.getElementById("ThursdayList").getElementsByClassName("box2");
// var Friday = document.getElementById("FridayList").getElementsByClassName("box2");

var FillBox = document.getElementById("Fill");

var reason = document.getElementById("InputReason");



// for (i=0 ; i<9 ; i++) {
//
//     Monday[i].onFocus = function () {
//         FillBox.style.display = "block";
//         FillBox.style.position = "absolute";
//         FillBox.style.left = "99px";
//         FillBox.style.top = "430px";
//         reason.value = "";
//     };
//
//     Tuesday[i].onclick = function () {
//         FillBox.style.display = "block";
//         FillBox.style.position = "absolute";
//         FillBox.style.left = "253.5px";
//         FillBox.style.top = "430px";
//         reason.value = "";
//     };
//
//     Wednesday[i].onclick = function () {
//         FillBox.style.display = "block";
//         FillBox.style.position = "absolute";
//         FillBox.style.left = "403.5px";
//         FillBox.style.top = "430px";
//         reason.value = "";
//     };
//
//     Thursday[i].onclick = function () {
//         FillBox.style.display = "block";
//         FillBox.style.position = "absolute";
//         FillBox.style.left = "553.5px";
//         FillBox.style.top = "430px";
//         reason.value = "";
//     };
//
//     Friday[i].onclick = function () {
//         FillBox.style.display = "block";
//         FillBox.style.position = "absolute";
//         FillBox.style.left = "703.5px";
//         FillBox.style.top = "430px";
//         reason.value = "";
//     };
// }


// $("#Fill").submit(function(){
//     $.post('views.py', $("#Fill").serialize(), function (data){
//
//     })
//
//     return false;
// });

// $('#Fill').on('submit', function (event){
//     event.preventDefault();
//     console.log("form submitted!");
//     alert("!");
//     // create_post();
// });
//
// function create_post() {
//     console.log("create post is working!");
//     console.log($('#post-text').val())
// };


// save.onclick = function (){
//     FillBox.style.display = "none";
//      $.ajax({
//              type: 'POST';
//              url: '.darba_laiks/views.py';
//
//          })
//
// };

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
            // alert ("You pressed on Monday");
        }
        else if (now.startsWith("Tu")){
            // alert ("You pressed on Tuesday!");
        }
        else if (now.startsWith("We")){
            // alert ("You pressed on Wednesday!");
        }
        else if (now.startsWith("Th")){
            // alert ("You pressed on Thursday!");
        }
        else if (now.startsWith("F")){
            // alert ("You pressed on Friday!");
        }
    event.stopPropagation();
});



// $(document).submit('submit', '#Fill', function(e){
//     e.preventDefault();
//   $.ajax({
//        type: 'POST',
//        url: 'darba_laiks/',
//
//        data : { no : $('#InputFrom').val() },
//
//
//        success: function(){
//
//       }
//    });
//  });


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
 };

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



// var nebusList = [document.getElementById("nebusList").getElementsByClassName("one") , document.getElementById("nebus").getElementsByTagName("li")];
// var iemesls = [document.getElementById("iemeslsList").getElementsByClassName("one"), document.getElementById("iemesls").getElementsByTagName("li")];
// var atstradaList = [document.getElementById("atstradaList").getElementsByClassName("one") , document.getElementById("atstrada").getElementsByTagName("li")];
//
// // var nebus = document.getElementById("atstrada").getElementsByTagName("li");
var iemeslsList = document.getElementById("iemeslsList").getElementsByClassName("one");
// // var atstrada = document.getElementById("atstrada").getElementsByTagName("li");


var date1 = document.getElementsByClassName("Date");
var date2 = [0];

var OneDay = document.getElementsByClassName("OneDay");

var year = new Date().getFullYear();
var datums = 0 ;
var menesis = 0;

for (i=0 ; i<date1.length; i++){
    datums = date1[i].innerText.slice(0,2);
    menesis = date1[i].innerText.slice(4,6);
    date2[i] = year + '-' + menesis + '-' + datums;
} //parveidoju datuma formu no html un ielieku katru dienu masiva date2[]


var slimiba = document.getElementById("iemeslsList").querySelectorAll("#slimiba");
var laiks = [0];

var m = 0;
var box = document.getElementsByClassName("box2");


var tmp = [0];


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
                                k++;
                            }
                        }
                        else k++;
                    }
                }
        }
    }
} // citu iemeslu iekraso zila krasa

























})();