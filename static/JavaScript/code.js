(function() {




// var Monday = document.getElementById("MondayList").getElementsByClassName("box2");
// var Tuesday = document.getElementById("TuesdayList").getElementsByClassName("box2");
// var Wednesday = document.getElementById("WednesdayList").getElementsByClassName("box2");
// var Thursday = document.getElementById("ThursdayList").getElementsByClassName("box2");
// var Friday = document.getElementById("FridayList").getElementsByClassName("box2");

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

//
// $("#Fill").submit(function(){
//     $.post('views.py', $("#Fill").serialize(), function (data){
//
//     })
//
//     return false;
// });


// save.onclick = function (){
//     FillBox.style.display = "none";
//      $.ajax({
//              type: 'POST';
//              url: '.darba_laiks/views.py';
//
//          })
//
// };

$(document).click(function(event){
    FillBox.style.display = "none";
});

$('#Fill').click(function(event){
    event.stopPropagation();
});

$('.box2').click(function(event){
    FillBox.style.display = "block";
        FillBox.style.position = "absolute";
        // reason.value = "";
        var now = $(this).attr('id');
        console.log (now);
        if (now.startsWith("M")){
            alert ("You pressed on Monday");
        }
        else if (now.startsWith("Tu")){
            alert ("You pressed on Tuesday!");
        }
        else if (now.startsWith("We")){
            alert ("You pressed on Wednesday!");
        }
        else if (now.startsWith("Th")){
            alert ("You pressed on Thursday!");
        }
        else if (now.startsWith("F")){
            alert ("You pressed on Friday!");
        };
    event.stopPropagation();
});


console.log(reason);



})();