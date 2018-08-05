var childrenData = [];

var skiClicked1 = false;
var snowbClicked1 = false;

document.getElementById("buttonSki1").onmouseover = function() {mouseOverSki()};
document.getElementById("buttonSki1").onmouseout = function() {mouseOutSki()};
document.getElementById("buttonSnowb1").onmouseover = function() {mouseOverSnowb()};
document.getElementById("buttonSnowb1").onmouseout = function() {mouseOutSnowb()};
document.getElementById("buttonSki1").onclick = function() {skiButtonClick()};
document.getElementById("buttonSnowb1").onclick = function() {snowbButtonClick()};

function mouseOverSki() {
    document.getElementById("svgSki1").style.fill = "white";
}
function mouseOutSki() {
    if(!skiClicked1) {
        document.getElementById("svgSki1").style.fill = "black";
    }
}

function mouseOverSnowb() {
    document.getElementById("svgSnowb1").style.fill = "white";
}
function mouseOutSnowb() {
    if (!snowbClicked1) {
        document.getElementById("svgSnowb1").style.fill = "black";
    }
}
function skiButtonClick() {
    skiClicked1 = true;
    snowbClicked1 = false;
    document.getElementById("buttonSki1").classList.add('skiClicked');
    document.getElementById("buttonSnowb1").classList.remove('snowbClicked');
    document.getElementById("svgSki1").style.fill = "white";
    document.getElementById("svgSnowb1").style.fill = "black";
}
function snowbButtonClick() {
    skiClicked1 = false;
    snowbClicked1 = true;
    document.getElementById("buttonSnowb1").classList.add('snowbClicked');
    document.getElementById("buttonSki1").classList.remove('skiClicked');
    document.getElementById("svgSnowb1").style.fill = "white";
    document.getElementById("svgSki1").style.fill = "black";
}

// function onAddChild() {
//     console.log("Child added!");
// }