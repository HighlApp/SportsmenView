var childrenData = [{
    "lp" : 0,
    "faculty" : "",
    "skiClicked" : false,
    "snowbClicked" : false
}];

addListeners(0);

function addListeners(lp) {
    document.getElementById("buttonSki" + lp).addEventListener("click", function() {skiButtonClick(this)});
    document.getElementById("buttonSnowb" + lp).addEventListener("click", function() {snowbButtonClick(this)});
    document.getElementById("buttonSki" + lp).addEventListener("mouseover", function() {mouseOverSki(this)});
    document.getElementById("buttonSki" + lp).addEventListener("mouseout", function() {mouseOutSki(this)});
    document.getElementById("buttonSnowb" + lp).addEventListener("mouseover", function() {mouseOverSnowb(this)});
    document.getElementById("buttonSnowb" + lp).addEventListener("mouseout", function() {mouseOutSnowb(this)});
    document.getElementById("addChild" + lp).addEventListener("click", function() {onAddChild(this)});
}

function mouseOverSki(ele) {
    let currentLp = ele.dataset.lp;
    document.getElementById("svgSki" + currentLp).style.fill = "white";
}
function mouseOutSki(ele) {
    let currentLp = ele.dataset.lp;
    if(!childrenData[currentLp].skiClicked) {
        document.getElementById("svgSki" + currentLp).style.fill = "black";
    }
}

function mouseOverSnowb(ele) {
    let currentLp = ele.dataset.lp;
    document.getElementById("svgSnowb" + currentLp).style.fill = "white";
}
function mouseOutSnowb(ele) {
    let currentLp = ele.dataset.lp;
    if (!childrenData[currentLp].snowbClicked) {
        document.getElementById("svgSnowb" + currentLp).style.fill = "black";
    }
}

function skiButtonClick(ele) {
    var currentLp = ele.dataset.lp;
    console.log(currentLp);
    childrenData[currentLp].skiClicked = true;
    childrenData[currentLp].snowbClicked = false;
    childrenData[currentLp].faculty = 'ski';
    console.log(ele.getAttribute('id'));
    ele.classList.add('skiClicked');
    document.getElementById("buttonSnowb" + currentLp).classList.remove('snowbClicked');
    document.getElementById("svgSki" + currentLp).style.fill = "white";
    document.getElementById("svgSnowb" + currentLp).style.fill = "black";
}
function snowbButtonClick(ele) {
    let currentLp = ele.dataset.lp;
    console.log(currentLp);
    childrenData[currentLp].skiClicked = false;
    childrenData[currentLp].snowbClicked = true;
    childrenData[currentLp].faculty = 'snowboard';
    console.log(ele.getAttribute('id'));
    ele.classList.add('snowbClicked');
    document.getElementById("buttonSki" + currentLp).classList.remove('skiClicked');
    document.getElementById("svgSki" + currentLp).style.fill = "black";
    document.getElementById("svgSnowb" + currentLp).style.fill = "white";
}

function onAddChild() {
    let nextChild = {
        "lp" : childrenData.length,
        "faculty" : "",
        "skiClicked" : false,
        "snowbClicked" : false
    };
    childrenData.push(nextChild);
    createDOMElements(nextChild.lp);
    let buttonToDestroy = document.getElementById('addChild' + (nextChild.lp - 1));
    document.getElementById('addChildWrapper' + (nextChild.lp - 1)).removeChild(buttonToDestroy);
    addListeners(nextChild.lp);
    console.log("Child added!");
    console.log(childrenData);
}

function createDOMElements(lp) {
    const childrenData = document.getElementById('childrenData');
    const child = document.createElement('section');

    child.setAttribute('class', 'child');

    const childrenDataTyped = document.createElement('div');
    childrenDataTyped.setAttribute('class', 'childrenDataTyped');

    const parentBlock1 = document.createElement('section');
    parentBlock1.setAttribute('class', 'parentBlock1');

    const parentBlock2 = document.createElement('section');
    parentBlock2.setAttribute('class', 'parentBlock2');

    const facultySection = document.createElement('section');
    facultySection.setAttribute('class', 'facultySection');

    // =====FIELDS BEGIN====
    const divName = document.createElement('div');
    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'childName' + lp);
    labelName.textContent = "Imię";

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'childName' + lp);
    inputName.setAttribute('class', 'inputText');
    inputName.setAttribute('type', 'text');

    const divEmail = document.createElement('div');
    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'childEmail' + lp);
    labelEmail.textContent = "Adres email";
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('id', 'childEmail' + lp);
    inputEmail.setAttribute('class', 'inputText');
    inputEmail.setAttribute('type', 'text');

    const divSurname = document.createElement('div');
    const labelSurname = document.createElement('label');
    labelSurname.setAttribute('for', 'childSurname' + lp);
    labelSurname.textContent = "Nazwisko";
    const inputSurname = document.createElement('input');
    inputSurname.setAttribute('id', 'childSurname' + lp);
    inputSurname.setAttribute('class', 'inputText');
    inputSurname.setAttribute('type', 'text');

    const divAge = document.createElement('div');
    const labelAge = document.createElement('label');
    labelAge.setAttribute('for', 'childAge' + lp);
    labelAge.textContent = "Rok urodzenia";
    const inputAge = document.createElement('input');
    inputAge.setAttribute('id', 'childAge' + lp);
    inputAge.setAttribute('class', 'inputText');
    inputAge.setAttribute('type', 'text');

    const divChangeme1 = document.createElement('div');
    const labelChangeme1 = document.createElement('label');
    labelChangeme1.setAttribute('for', 'childChangeme1' + lp);
    labelChangeme1.textContent = "Telefon kontaktowy";
    const inputChangeme1 = document.createElement('input');
    inputChangeme1.setAttribute('id', 'childChangeme1' + lp);
    inputChangeme1.setAttribute('class', 'inputText');
    inputChangeme1.setAttribute('type', 'text');

    const divChangeme2 = document.createElement('div');
    const labelChangeme2 = document.createElement('label');
    labelChangeme2.setAttribute('for', 'childChangeme2' + lp);
    labelChangeme2.textContent = "Lata doświadczenia na nartach";
    const inputChangeme2 = document.createElement('input');
    inputChangeme2.setAttribute('id', 'childChangeme2' + lp);
    inputChangeme2.setAttribute('class', 'inputText');
    inputChangeme2.setAttribute('type', 'text');
    // =====FIELDS END====

    // =====DIV APPENDS BEGIN=====
    divName.appendChild(labelName);
    divName.appendChild(inputName);

    divSurname.appendChild(labelSurname);
    divSurname.appendChild(inputSurname);

    divAge.appendChild(labelAge);
    divAge.appendChild(inputAge);

    divEmail.appendChild(labelEmail);
    divEmail.appendChild(inputEmail);

    divChangeme1.appendChild(labelChangeme1);
    divChangeme1.appendChild(inputChangeme1);

    divChangeme2.appendChild(labelChangeme2);
    divChangeme2.appendChild(inputChangeme2);
    // =====DIV APPENDS END=====

    // =====BUTTON BEGIN=====
    const labelFaculty = document.createElement('label');
    labelFaculty.setAttribute('for', 'labelFaculty' + lp);
    labelFaculty.textContent = "Wybór dyscypliny";

    const divFaculty = document.createElement('div');
    divFaculty.setAttribute('class', 'facultyMenu');

    const buttonSki = document.createElement('button');
    buttonSki.setAttribute('id', 'buttonSki' + lp);
    buttonSki.setAttribute('class', 'buttonFacult');
    buttonSki.setAttribute('type', 'button');
    buttonSki.setAttribute('data-lp', lp);

    const buttonSnowb = document.createElement('button');
    buttonSnowb.setAttribute('id', 'buttonSnowb' + lp);
    buttonSnowb.setAttribute('class', 'buttonFacult buttPad');
    buttonSnowb.setAttribute('type', 'button');
    buttonSnowb.setAttribute('data-lp', lp);

    const svgSki = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgSki.setAttribute('id', 'svgSki' + lp);
    svgSki.setAttribute('class', 'svg-style skier');

    const useSki = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useSki.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#skier');

    const svgSnowb = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgSnowb.setAttribute('id', 'svgSnowb' + lp);
    svgSnowb.setAttribute('class', 'svg-style snowboarder');

    const useSnowb = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useSnowb.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#snowboarder');

    const vertLine = document.createElement('div');
    vertLine.setAttribute('class', 'vl');
    // =====BUTTON END=====

    // =====BUTTON APPENDS BEGIN=====
    svgSki.appendChild(useSki);
    svgSnowb.appendChild(useSnowb);

    buttonSki.appendChild(svgSki);
    buttonSnowb.appendChild(svgSnowb);

    divFaculty.appendChild(buttonSki);
    divFaculty.appendChild(vertLine);
    divFaculty.appendChild(buttonSnowb);

    facultySection.appendChild(labelFaculty);
    facultySection.appendChild(divFaculty);
    // =====BUTTON APPENDS END=====

    // =====BTN ADD CHILD BEGIN=====
    const addChildWrapper = document.createElement('div');
    addChildWrapper.setAttribute('class', 'addChildWrapper');
    addChildWrapper.setAttribute('id', 'addChildWrapper' + lp);

    const addChild = document.createElement('button');
    addChild.setAttribute('id', 'addChild' + lp);
    addChild.setAttribute('class', 'addChild');

    const anchor = document.createElement('a');
    anchor.setAttribute('href', '#scrollMarker' + lp);
    anchor.textContent = 'Dodaj kolejnego uczestnika';

    addChild.appendChild(anchor);
    addChildWrapper.appendChild(addChild);
    // =====BTN ADD CHILD END=====

    //OTHERS BEGIN
    const scrollMarker = document.createElement('div');
    scrollMarker.setAttribute('id', 'scrollMarker' + lp);
    //OTHERS END



    parentBlock1.appendChild(divName);
    parentBlock1.appendChild(divSurname);
    parentBlock1.appendChild(divAge);

    parentBlock2.appendChild(divEmail);
    parentBlock2.appendChild(divChangeme1);
    parentBlock2.appendChild(divChangeme2);

    childrenDataTyped.appendChild(parentBlock1);
    childrenDataTyped.appendChild(parentBlock2);

    child.appendChild(childrenDataTyped);
    child.appendChild(facultySection);
    child.appendChild(addChildWrapper);
    child.appendChild(scrollMarker);

    childrenData.appendChild(child);
}

