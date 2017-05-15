$(document).ready(function() {

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
var days = ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena'];

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


var date1 = document.getElementById("date").innerHTML;

function getDates(){
    var year = new Date(givenDate).getFullYear(); // tiek iegūts gads, kurš ir pašlaik
    var datums;
    var menesis;

    datums = date1.slice(0,2);
    menesis = date1.slice(3,5);
    date1 = year + '-' + menesis + '-' + datums;
    //parveidoju datuma formu no html un ielieku date1;
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




var allReasonsListDoc = document.getElementsByClassName("allReasons"); // mainīgajā tiek glabāti pilnīgi visi atzīmētie dati
var reasonDoc = document.getElementsByClassName('reason'); // mainīgajā tiek glabāti tie dati, kuriem ir atzīmēts, kad tiks atstrādāti

//var fromDoc = document.getElementsByClassName('atstradasNo');
//var untilDoc = document.getElementsByClassName('atstradasLidz');
//var workDateDoc = document.getElementsByClassName('atstradasKad');
var wontWorkDateDoc = document.getElementsByClassName('work');

console.log(allReasonsListDoc);
console.log(reasonDoc);

var wontWorkDate = [];
var reason = [];
var wontWork = [];
var from = [];
var until = [];
var workDate = [];
var reasonList = [];

for (i=0 ; i < wontWorkDateDoc.length; i++){
    reason[i] = allReasonsListDoc[i].innerHTML;
    reason[i] = reason[i].substr(0, reason[i].indexOf(' ')); //šajā mainīgajā ierakstīti visi iemesli pēc kārtas
    wontWork[i] = removeZeros(allReasonsListDoc[i].innerHTML.slice(-19)); // šajā mainīgajā ierakstīti laiki, kad lietotājs nebūs
    wontWorkDate[i] = wontWorkDateDoc[i].innerHTML.slice(0, 10); // šajā mainīgajā ierakstīti datumi, kad nebūs
}

//for (i = 0; i<fromDoc.length ; i++){
//    from[i] = fromDoc[i].innerHTML; //šajā masīvā būs laiki, kad atstrādās NO
//    until[i] = untilDoc[i].innerHTML; //šajā masīvā būs laiki, kad atstrādās LIDZ
//    workDate[i] = workDateDoc[i].innerHTML; //šajā masīvā būs laiki, kad atstrādās DATUMS
//}
//
function removeZeros (givenTime){
    var givenFrom = givenTime.slice(0, 5);
    var givenUntil = givenTime.slice(11, 16);
    return (givenFrom + "-" + givenUntil);
} // ar šo funkciju tiks noņemtas visas liekās nulles, kas tiek padotas laikiem no-līdz


var writeWillWork = [];

//function setWillWork(){
//    for (i=0; i<allReasonsListDoc.length ; i ++){
//        for (k=0 ; k<reasonDoc.length ; k++){
//            if(allReasonsListDoc[i].innerHTML == reasonDoc[k].innerHTML){
//                writeWillWork[i] = workDate[k] + "  " + from[k] + "-" + until[k];
//            } // ja konkrētajam iemeslam būs norādīts, kad tas tiks atstrādāts - tas tiks ierakstīts masīvā
//
//        }
//        if(!writeWillWork[i]){
//            writeWillWork[i] = "Nav norādīts"; // ja konkrētajam iemeslam nebūs norādīts, kad tas tiks atstrādāts
//        }
//
//    }
//}
//
//setWillWork();




thisDay = formatDateForForm(addDays(givenDate, 0)); // mainīgajā tiks ievietots šodienas datums tieši tādā formātā, kādā tas ir workDate
console.log(thisDay);

var insert = document.getElementById("description");
var offTime = document.getElementById("offTime");
var offReasonDoc = document.getElementById('offReason');
var offWork = document.getElementById('offWork');


var p = 0;

var tmp = [];

for (k=0 ; k < 9 ; k++ ) {
        tmp[k] = box[k].innerText.slice(0,2);
} // visi darba laiki, kas ir defaultā, tiek salikti masīvā tmp

console.log(tmp);

function setColors (){
    for (k = 0; k<reason.length ;k++){
        if (thisDay == wontWorkDate[k]){
            var wontFrom = wontWork[k].slice (0,2);
            var wontUntil = wontWork[k].slice (6,8);

            for(i = 0; i < 9 ; ){
                if (tmp[i] == wontFrom){
                    for ( m = wontFrom ; m < wontUntil ;m++) {
                        box[i].style.color = "#ffffff";
                        if(reason[k] == "Slimiba"){
                            box[i].style.backgroundColor = '#ba1d79';
//                            offReason.innerHTML = "Slimība";
//                            offWork = writeWillWork[k];
                            setColoredBox(box[i], wontFrom, wontUntil);
                        }
                        else if (reason[k] == "Lekcijas"){
                            box[i].style.backgroundColor = '#f15a24';
//                            offReason.innerHTML = "Lekcijas";
//                            offWork = writeWillWork[k];
                            setColoredBox(box[i], wontFrom, wontUntil);
                        }
                        else if (reason[k] == "Darbs"){
                            box[i].style.backgroundColor = '#29abe2';
//                            offReason.innerHTML = "Darbs no mājām";
//                            offWork = "-";
                            setColoredBox(box[i], wontFrom, wontUntil);
                        }
                        else if (reason[k] == "Mazaka"){
                            box[i].style.backgroundColor = '#22b573';
//                            offReason.innerHTML = "Mazāka slodze";
//                            offWork = "-";
                            setColoredBox(box[i], wontFrom, wontUntil);
                        }
                        else if (reason[k] == "Cits"){
                            box[i].style.backgroundColor = '#662d91';
//                            offReason.innerHTML = "Cits";
//                            offWork = writeWillWork[k];
                            setColoredBox(box[i], wontFrom, wontUntil);
                        }




                        i++;
                    }
                }
                else i++;
            }


        }
    }
}

setColors();

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


var dateForm = document.getElementById("dateForm");
var fromForm = document.getElementById("fromForm");
var untilForm = document.getElementById("untilForm");


function setColoredBox(target, from, until){
    target.style.color = "#ffffff";

    $(target).click(function(event){
        deleteBox.style.display = "block";
        deleteBox.style.position = "absolute";
        delete willWork;

        var now = $(this).attr('id');
            $("#Mo" ).append($("#delete"));
            dateForm.value = thisDay;
            fromForm.value = from + ":00";
            untilForm.value = until + ":00";
            FillBox.style.display = "none";

    });
}


})


