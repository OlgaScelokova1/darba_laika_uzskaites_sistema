(function() {




var Monday = document.getElementById("MondayList").getElementsByClassName("box2");
var Tuesday = document.getElementById("TuesdayList").getElementsByClassName("box2");
var Wednesday = document.getElementById("WednesdayList").getElementsByClassName("box2");
var Thursday = document.getElementById("ThursdayList").getElementsByClassName("box2");
var Friday = document.getElementById("FridayList").getElementsByClassName("box2");

var FillBox = document.getElementById("Fill");

var reason = document.getElementById("InputReason");

var box = document.getElementsByClassName("box2");

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


var save = document.getElementById("Save");

var sick = document.getElementById("Sick");
var vacation = document.getElementById("Vacation");

save.onclick = function (){
    FillBox.style.display = "none";

};

$(document).click(function(event) {
    FillBox.style.display = "none";
});

$('#Fill').click(function(event){
    event.stopPropagation();
});

$('.box2').click(function(event){
    FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        // FillBox.style.left = "703.5px";
        // FillBox.style.top = "430px";
        reason.value = "";
    event.stopPropagation();
});





})();