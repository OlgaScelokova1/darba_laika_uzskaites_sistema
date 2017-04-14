var today = new Date();
console.log(today);

var day = today.getDay();
var days = ['SVĒTDIENA', 'PIRMDIENA', 'OTRDIENA', 'TREŠDIENA', 'CETURTDIENA', 'PIEKTDIENA', 'SESTDIENA'];

function formatDate(myDate) {
    var tmp = myDate;
    var month = tmp.getMonth() + 1;
    var day = tmp.getDate();
    console.log(tmp);
    var year = tmp.getFullYear();
    console.log(year);
    if(day<10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }

    return (day + "." + month + "." + year + ".");
}

var formattedDay = formatDate(today);

document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

$('#Left').click(function(){
    today = addDays(today, -1);
    day = today.getDay();
    formattedDay = formatDate(today);

    document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;

});


$('#Right').click(function(){
    today = addDays(today, 1);
    day = today.getDay();
    formattedDay = formatDate(today);
    document.getElementById("today").innerHTML = days[day] + ", " + formattedDay;

});




function setReasons(){
    var everyId = document.getElementsByClassName("userId");
    var all = document.getElementsByClassName("oneReason");
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
                               k++;
                           }
                       }
                    }
                }

                if (allText[j].includes("Cits")){
                    tmp[i] = box[i].getElementsByTagName("li");
                    for(k=0 ; k<tmp[i].length ; k++){
                       if (tmp[i][k].innerHTML.slice(0,2) == no[j]){
                           while (tmp[i][k].innerHTML.slice(0,2) != lidz[j]){
                               tmp[i][k].style.backgroundColor = "#662d91";
                               tmp[i][k].style.color = "#ffffff";
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