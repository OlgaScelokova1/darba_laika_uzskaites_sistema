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
    var year = tmp.getFullYear();
    if(day<10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }

    return (day + "." + month + "." + year + ".");
} //funkcija, kas pārveido datumu pareizā formātā : dd.mm



var formattedDay = formatDate(today);


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


document.getElementById("dateToLeft").value = formatDateForForm(addDays(givenDate, -1));
document.getElementById("dateToRight").value = formatDateForForm(addDays(givenDate, 1));

var dateSearch = document.getElementById("dateSearch")
if(dateSearch){
    dateSearch.value = formatDateForForm(today)
};

var day = today.getDay();
var days = ['SVĒTDIENA', 'PIRMDIENA', 'OTRDIENA', 'TREŠDIENA', 'CETURTDIENA', 'PIEKTDIENA', 'SESTDIENA'];

document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;

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



var all = document.getElementsByClassName("oneReason");
var willWorkWhen = document.getElementById("offWork");
var reason = document.getElementsByClassName("reason");
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

function setReasons(){


    var box = document.getElementsByClassName("dayBox");
    // dabūju katru iemeslu ar id
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
    }

    for(i=0; i< everyIdtmp.length; i++){
        for(j=0; j<id.length ; j++){
            if (id[j] == everyIdtmp[i]){
                lidz[j] = allText[j].slice(allText[j].length - 8);
                no[j] = allText[j].slice(allText[j].length - 19);
                lidz[j] = lidz[j].slice(0,2);
                no[j] = no[j].slice(0,2);


                if (allText[j].includes("Slimiba")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){

                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#ba1d79';
                               tmp[i][k].style.color = "#ffffff";
                               if(document.getElementById("description")){
                                   offReasonDoc.innerHTML = "Slimība";
                                   offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                                   willWorkWhen.innerHTML = forInputWork[j];
                                   tmp[i][k].title = insert.textContent;
                               }
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Lekcijas")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){

                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#f15a24';
                               tmp[i][k].style.color = "#ffffff";
                               if(document.getElementById("description")){
                                   offReasonDoc.innerHTML = "Lekcijas";
                                   offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                                   willWorkWhen.innerHTML = forInputWork[j];
                                   tmp[i][k].title = insert.textContent;
                               }
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Darbs no majam")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){

                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#29abe2';
                               tmp[i][k].style.color = "#ffffff";
                               if(document.getElementById("description")){
                                   offReasonDoc.innerHTML = "Darbs no mājām";
                                   offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                                   willWorkWhen.innerHTML = "-";
                                   tmp[i][k].title = insert.textContent;
                               }
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Mazaka slodze")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){

                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#22b573';
                               tmp[i][k].style.color = "#ffffff";
                               if(document.getElementById("description")){
                                   offReasonDoc.innerHTML = "Mazāka slodze";
                                   offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                                   willWorkWhen.innerHTML = "-";
                                   tmp[i][k].title = insert.textContent;
                               }
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Cits")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){
                           offReasonDoc.innerHTML = "Cits";
                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = "#662d91";
                               tmp[i][k].style.color = "#ffffff";
                               if(document.getElementById("description")){
                                   offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                                   willWorkWhen.innerHTML = forInputWork[j];
                                   tmp[i][k].title = insert.textContent;
                               }
                               k++;
                           }
                       }
                    }
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
var userBox = document.getElementsByClassName("dayBox");

$('#searchField').on('input', function() {
    var input_value = $(this).val();
    for (i=0; i<userName.length; i++){
        if (userName[i].innerHTML.toLowerCase().indexOf(input_value) >= 0) {
            userBox[i].style.display = "block";
            userBox[i].style.cssFloat = "left";

         }
        else {
            userBox[i].style.display = "none";

        }
        }

});



console.log($(window).width());

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
        document.getElementById("secondRow").style.display="flex";
        document.getElementById("firstRow").style.marginLeft="10px";
        document.getElementById("firstRow").style.marginTop="10px";
        document.getElementById("oneUser").style.marginTop="0";
        for (i=0 ; i<userBox.length; i++){
            userBox[i].style.marginRight = "0";
            userBox[i].style.marginLeft = "0";
        }

    }
}

toggle();


