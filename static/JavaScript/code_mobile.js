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

var months =['JANVĀRIS','FEBRUĀRIS','MARTS','APRĪLIS','MAIJS','JŪNIJS','JŪLIJS','AUGUSTS','SEPTEMBRIS','OKTOBRIS','NOVEMBRIS','DECEMBRIS'];
//masīvā tiek sarakstīti visi mēneši


function setMonth() {
    var dateMonth = document.getElementById("date");
    var thisMonth = dateMonth.innerText.slice(3);
    if(thisMonth<10){
        thisMonth=thisMonth.slice(1);
    }
    document.getElementById("Month").innerHTML = months[thisMonth-1]; // tiek ierakstīts mēnesis
}

setMonth();


var date1 = document.getElementById("date");

function getDates(){
    var year = new Date(givenDate).getFullYear(); // tiek iegūts gads, kurš ir pašlaik
    var datums;
    var menesis;

    for (i=0 ; i<date1.length; i++){
        datums = date1[i].innerText.slice(0,2);
        menesis = date1[i].innerText.slice(3);
        date1 = year + '-' + menesis + '-' + datums;
    } //parveidoju datuma formu no html un ielieku date1;
}


getDates();

var FillBox = document.getElementById("Fill");
//tiek definēta kastīte, kura tiek aizpildīta ar padodamajiem datiem
var deleteBox = document.getElementById("delete");
var box = document.getElementsByClassName("box2"); // pie box tiek ielikti visi elementi, kam klase box2

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

    document.getElementById("InputDate").defaultValue = date1;
    $("#Mo" ).append($("#FillRow"));

    document.getElementById('InputFrom').defaultValue = now.slice(0,2) + ":00";
    document.getElementById('InputUntil').defaultValue = now.slice(3) + ":00";
    // tiek uzstādītas default vērtības atkarībā no tā, kādi laiki ir kastītē, uz kuru uzspiests

event.stopPropagation();
}); // kastītes novietojums un default vērtības


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
