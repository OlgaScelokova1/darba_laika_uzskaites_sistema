var inputFields = document.getElementsByTagName ("input");
var p = document.getElementsByTagName("p");

console.log(p);

console.log(inputFields);

if(inputFields[4]){

    inputFields[4].id = "btn";
    inputFields[4].value = "Saglabāt";

    for (i=0 ; i<4; i++){
        inputFields[i].className = "inputField";
    }



    var label = document.getElementsByTagName("label");

    console.log(label);

    label[0].innerHTML = "Lietotājvārds:";
    label[1].innerHTML = "Vārds:";
    label[2].innerHTML = "Uzvārds";

    var helpText = document.getElementsByClassName("helptext");

    helpText[0].innerHTML = "Obligāts lauks. 150 vai mazāk rakstzīmju. Izmantot tikai burtus, ciparus @/./+/-/_.";


}

else{
    inputFields[2].id = "btn";
    inputFields[2].value = "Saglabāt";
}

