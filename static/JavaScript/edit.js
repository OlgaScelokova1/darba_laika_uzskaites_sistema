var inputFields = document.getElementsByTagName ("input");

console.log(inputFields);

inputFields[4].id = "btn"

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

var p = document.getElementsByTagName("p");

console.log(p);

//p[0].innerHTML = label[0].innerHTML + inputFields[1] + "<br /> " + helpText[0].innerHTML;