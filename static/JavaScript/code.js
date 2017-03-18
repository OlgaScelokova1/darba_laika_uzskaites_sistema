var Monday = document.getElementById("MondayList").getElementsByClassName("box2");
var Tuesday = document.getElementById("TuesdayList").getElementsByClassName("box2");
var Wednesday = document.getElementById("WednesdayList").getElementsByClassName("box2");
var Thursday = document.getElementById("ThursdayList").getElementsByClassName("box2");
var Friday = document.getElementById("FridayList").getElementsByClassName("box2");

var AllBoxes = document.getElementsByClassName("box2");
var FillBox = document.getElementById("Fill");

var body = document.getElementsByTagName("body");


for (i=0 ; i<9 ; i++) {

    Monday[i].onclick = function () {
        this.style.backgroundColor = "#d6e2ea";
        FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        FillBox.style.left = "99px";
        FillBox.style.top = "430px";
    };

    Tuesday[i].onclick = function () {
        this.style.backgroundColor = "#d6e2ea";
        FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        FillBox.style.left = "253.5px";
        FillBox.style.top = "430px";
    };

    Wednesday[i].onclick = function () {
        this.style.backgroundColor = "#d6e2ea";
        FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        FillBox.style.left = "403.5px";
        FillBox.style.top = "430px";
    };

    Thursday[i].onclick = function () {
        this.style.backgroundColor = "#d6e2ea";
        FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        FillBox.style.left = "553.5px";
        FillBox.style.top = "430px";
    };

    Friday[i].onclick = function () {
        this.style.backgroundColor = "#d6e2ea";
        FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        FillBox.style.left = "703.5px";
        FillBox.style.top = "430px";
    };

//     window.onclick = function (){
//         if (FillBox.style.display == "block"){
//             FillBox.style.display = "none";
//         };
//         for (j = 0 ; j<45 ; j++){
//             if (AllBoxes[j].style.backgroundColor === "#d6e2ea"){
//                 AllBoxes[j].style.backgroundColor = "#a8b6c3";
//                 alert("test");
//             };
//          }
// }; meģinājumi kko izdomāt


}

















