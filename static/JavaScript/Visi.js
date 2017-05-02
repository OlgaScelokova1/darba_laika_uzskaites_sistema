var givenDate = document.getElementById("givenDate").innerHTML;
var today = new Date(givenDate);
console.log(today);

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
console.log(formattedDay);


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



var all = document.getElementsByClassName("oneReason");
var willWorkWhen = document.getElementById("offWork");
var reason = document.getElementsByClassName("reason");
console.log(reason);
var workFrom = document.getElementsByClassName("atstradasNo");
var workUntil = document.getElementsByClassName("atstradasLidz");
var workDate = document.getElementsByClassName("atstradasKad");

var forInputWork = [];
var k = 0 ;
console.log(reason.length);

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

console.log(forInputWork);

var everyId = document.getElementsByClassName("userId");

function setReasons(){


    var box = document.getElementsByClassName("dayBox");
    console.log(box);
    // dabūju katru iemeslu ar id
    var allText = [];
    var everyIdtmp = [];

    for(i=0; i<everyId.length ; i++){
        everyIdtmp[i] = everyId[i].innerHTML;
    }
    console.log(everyIdtmp);

    for (i=0 ; i<all.length ; i++){
        allText[i] = all[i].innerHTML;
    }
    console.log(all);
    console.log(allText);


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

    console.log(id);
    console.log(id.length);
    console.log(everyIdtmp.length);
    var lidz = [];
    var no = [];
    var iemesls = [];
    var tmp = [];
    var start;
    var insert = document.getElementById("description");
    var offTime = document.getElementById("offTime");
    var offReasonDoc = document.getElementById('offReason');
    var offWork = document.getElementById('offWork');

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
                           offReasonDoc.innerHTML = "Slimība";
                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#ba1d79';
                               tmp[i][k].style.color = "#ffffff";
                               offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                               willWorkWhen.innerHTML = forInputWork[j];
                               tmp[i][k].title = insert.textContent;
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Lekcijas")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){
                           offReasonDoc.innerHTML = "Lekcijas";
                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#f15a24';
                               tmp[i][k].style.color = "#ffffff";
                               offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                               willWorkWhen.innerHTML = forInputWork[j];
                               tmp[i][k].title = insert.textContent;
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Darbs no majam")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){
                           offReasonDoc.innerHTML = "Darbs no mājām";
                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#29abe2';
                               tmp[i][k].style.color = "#ffffff";
                               offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                               willWorkWhen.innerHTML = "-";
                               tmp[i][k].title = insert.textContent;
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Mazaka slodze")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){
                           offReasonDoc.innerHTML = "Mazāka slodze";
                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = '#22b573';
                               tmp[i][k].style.color = "#ffffff";
                               offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                               willWorkWhen.innerHTML = "-";
                               tmp[i][k].title = insert.textContent;
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
                               offTime.innerHTML = no[j] + ":00" + "-" + lidz[j] + ":00";
                               willWorkWhen.innerHTML = forInputWork[j];
                               tmp[i][k].title = insert.textContent;
                               k++;
                           }
                       }
                    }
                }

            }
        }
    }



}

setReasons();

$(function(){
$('[data-toggle = "tooltip" ]').tooltip();
});

var everyFavorite = document.getElementsByClassName("everyFavorite");
var everyUserId = document.getElementsByClassName("everyUserId");
var star = document.getElementsByClassName("star1");

console.log(everyFavorite);
console.log(everyUserId);
console.log(star);


for (i=0; i< everyUserId.length; i++){
    for (k=0; k<everyFavorite.length ; k++){
        if (everyUserId[i].value == everyFavorite[k].innerHTML){
        star[i].style.color = "#f8e81c";
        }
    }
}


