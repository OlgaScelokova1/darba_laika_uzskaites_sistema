if(document.getElementById("forAll")){
    document.getElementById("all").style.fontWeight="bold";
    document.getElementById("all").style.color="black";
}
else{
    document.getElementById("saved").style.fontWeight="bold";
    document.getElementById("saved").style.color="black";
}

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
} // tiek noformatēts datums tā, lai tas varētu tikt pasniegts formā un vēlāk izmantots priekš dienu pārslēgšanas

function formatDate(myDate) {
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
    return (day + "." + month + "." + year + ".");
} //funkcija, kas pārveido datumu pareizā formātā, lai ierakstītu dokumentā: dd.mm

var formattedDay = formatDate(today);

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
} // funkcija, kas padotajam datumam pievieno padoto skaitu dienu

document.getElementById("dateToLeft").value = formatDateForForm(addDays(givenDate, -1));
document.getElementById("dateToRight").value = formatDateForForm(addDays(givenDate, 1));
//formā tiek savadīti datumi: bultiņā pa kreisi diena atpakaļ, bultiņā pa labi diena uz priekšu

var day = today.getDay();
var days = ['SVĒTDIENA', 'PIRMDIENA', 'OTRDIENA', 'TREŠDIENA', 'CETURTDIENA', 'PIEKTDIENA', 'SESTDIENA'];

document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;
// tiek ierakstīta šodienas diena un datums dokumentā

var months =['JANVĀRIS','FEBRUĀRIS','MARTS','APRĪLIS','MAIJS','JŪNIJS','JŪLIJS','AUGUSTS','SEPTEMBRIS','OKTOBRIS','NOVEMBRIS','DECEMBRIS'];
//masīvā tiek sarakstīti visi mēneši

function setMonth() {
    var dateMonth = document.getElementById("today");
    var thisMonth = dateMonth.innerText.slice(-8, -6 );
    if(thisMonth<10){
        thisMonth=thisMonth.slice(1);
    }
    document.getElementById("Month").innerHTML = months[thisMonth-1]; // tiek ierakstīts mēnesis
}

if (document.getElementById("Month")){
    setMonth();
} //ja mobilajā skatā, tad tiek ierakstīts arī mēnesis

var all = document.getElementsByClassName("oneReason"); // masīvā tiek ievietoti visi iemesli

var willWorkWhen = document.getElementById("offWork");
var reason = document.getElementsByClassName("reason");
console.log(reason);
var workFrom = document.getElementsByClassName("atstradasNo");
var workUntil = document.getElementsByClassName("atstradasLidz");
var workDate = document.getElementsByClassName("atstradasKad");

var forInputWork = [];
var k = 0 ;


for (i = 0 ; i < reason.length ; ){
    if(reason[i].innerHTML == all[k].innerHTML ){
        forInputWork[k] = workDate[i].innerHTML + "  " + workFrom[i].innerHTML + "-" + workUntil[i].innerHTML;
        i++;
    }
    else {
        forInputWork[i] = 0;
        k++;
    }
}


var everyId = document.getElementsByClassName("userId");
var box = document.getElementsByClassName("dayBox");
// dabūju katru iemeslu ar id
var lidz = [];
var no = [];
var iemesls = [];
var tmp = [];
var start;

if(document.getElementById("description")){
        var insert = document.getElementById("description");
        var offTime = document.getElementById("offTime");
        var offReasonDoc = document.getElementById('offReason');
        var offWork = document.getElementById('offWork');
} // tiek iegūti paskaidrojumu elementi, kam tiks pievienotas vērtības

var allText = [];
    var everyIdtmp = [];

    for(i=0; i<everyId.length ; i++){
        everyIdtmp[i] = everyId[i].innerHTML;
    }

    for (i=0 ; i<all.length ; i++){
        allText[i] = all[i].innerHTML;
    }


    var id = [];
    for (i=0 ; i<all.length ; i++){
        if (allText[i].slice(3,4) == " "){
            id[i]=allText[i].slice(0,3);
        }
        else if (allText[i].slice(2,3) == " "){
            id[i]=allText[i].slice(0,2);
        }
        else {
            id[i]=allText[i].slice(0,1);
        }
    }


function setReasons(){

    for(i=0; i< everyIdtmp.length; i++){
        for(j=0; j<id.length ; j++){
            if (id[j] == everyIdtmp[i]){

                lidz[j] = allText[j].slice(allText[j].length - 8);
                no[j] = allText[j].slice(allText[j].length - 19);
                lidz[j] = lidz[j].slice(0,5);
                no[j] = no[j].slice(0,5);

                colorReason("Slimiba", "Slimība", no[j].slice(0,2), lidz[j].slice(0,2), no[j], lidz[j], "#ba1d79");
                colorReason("Lekcijas", "Lekcijas", no[j].slice(0,2), lidz[j].slice(0,2), no[j], lidz[j], "#f15a24");
                colorReason("Darbs no majam", "Darbs no mājām", no[j].slice(0,2), lidz[j].slice(0,2), no[j], lidz[j], "#29abe2");
                colorReason("Mazaka slodze", "Mazāka slodze", no[j].slice(0,2), lidz[j].slice(0,2), no[j], lidz[j], "#22b573");
                colorReason("Cits", "Cits", no[j].slice(0,2), lidz[j].slice(0,2), no[j], lidz[j], "#662d91");
            }
        }
    }



}

function colorReason(title1, title2, from1, until1, from2, until2, color){
    if (allText[j].includes(title1)){
    //pārbaude, vai šis iemesls satur konkrēto simbolu virkni
        tmp[i] = box[i].getElementsByTagName("li");
        // tiek iegūtas visas tabulas šūnas
        for(k=0 ; k<tmp[i].length ; k++){
           if (tmp[i][k].innerHTML.slice(0,2) == from1){
           //ja tabulas šūna atbilst laikam, no cikiem lietotājs nebūs, ieiet ciklā līdz laikam, līdz cikiem lietotājs nebūs

               while (tmp[i][k].innerHTML.slice(0,2) != until1){
                   tmp[i][k].style.backgroundColor = color;
                   tmp[i][k].style.color = "#ffffff";
                   // tiek uzstādīta padotā krāsa un balts fonts
                   if(document.getElementById("description")){
                       offReasonDoc.innerHTML = title2;
                       if(title1 == "Darbs no majam" || title1 == "Mazaka slodze"){
                            willWorkWhen.innerHTML = "-";
                       }
                       else {
                            willWorkWhen.innerHTML = forInputWork[j];
                       }
                       offTime.innerHTML = from2 + "-" + until2;
                       tmp[i][k].title = insert.textContent;
                       //tiek pievienota paskaidrojuma kastīte ar atbilstošajām vērtībām
                   }
                   k++;
               }
           }
        }
    }
}

var thisDate = new Date();
thisDate = formatDate(thisDate);
var documentDate = document.getElementById("today").innerHTML.slice(-11);


if(document.getElementById("description")){
    if (thisDate != documentDate){
        $(".dayBox").slideUp(1).delay(200).slideDown('fast');
    }
}


setReasons();

if(document.getElementById("description")){
    $(function(){
        $('[data-toggle = "tooltip" ]').tooltip();
    });
}

var everyFavorite = document.getElementsByClassName("everyFavorite");
var everyUserId = document.getElementsByClassName("everyUserId");
var star = document.getElementsByClassName("star1");



for (i=0; i< everyUserId.length; i++){
    for (k=0; k<everyFavorite.length ; k++){
        if (everyUserId[i].value == everyFavorite[k].innerHTML){
        star[i].style.color = "#f8e81c";
        }
    }
}

var userName = document.getElementsByClassName("userFull");
var userBox = document.getElementsByClassName("userBox");

$('#searchField').on('input', function() {
    var input  = $(this).val();
    input = input.toString().toLowerCase();
    for (i=0; i<userName.length; i++){
        if (userName[i].innerHTML.toLowerCase().indexOf(input) >= 0) {
            userBox[i].style.display = "block";
         }
        else {
            userBox[i].style.display = "none";

        }
        }

});

window.onresize = function() {
    toggle();
}

function toggle() {
    var userBox = document.getElementsByClassName("userBox");
    if ($(window).width()<760){
        document.getElementById("secondRow").style.display="none";
        document.getElementById("firstRow").style.marginLeft="200px";
        document.getElementById("firstRow").style.marginTop="-200px";
        document.getElementById("oneUser").style.marginTop="200px";
        for (i=0 ; i<userBox.length; i++){
            userBox[i].style.marginLeft = "150px";
        }
    }
    else if ($(window).width()<1000){


    }
    else if ($(window).width()<1200){
        for (i=0 ; i<userBox.length; i++){
            userBox[i].style.marginRight = "30px";
        }
    }
    else {
        document.getElementById("secondRow").style.display="block";
        document.getElementById("firstRow").style.marginLeft="10px";
        document.getElementById("firstRow").style.marginTop="10px";
        document.getElementById("oneUser").style.marginTop="0";
        for (i=0 ; i<userBox.length; i++){
            userBox[i].style.marginRight = "0";
            userBox[i].style.marginLeft = "0";
        }

    }
}

if(document.getElementById("secondRow")){
    toggle();
}

