// Nav
const navList = document.getElementById("navbarId");
const navButton = document.getElementById('hamburguerId')
const navInformation = document.getElementById('contentsId');
const closeNav = document.querySelector('#closeNav');
const navFooter = document.getElementById("navfooterId")

// Número de pessoas
const peoples = document.getElementById('number')
const peoples2 = document.getElementById('number2')
const peoples3 = document.getElementById('number3')
const peoples4 = document.getElementById('number4')
const peoples5 = document.getElementById('number5')
const peoples6 = document.getElementById('number6')
const peoples7 = document.getElementById('number7')
const peoples8 = document.getElementById('number8')


// Eventos: Nav
navButton.addEventListener("click", () => {
    navInformation.style.display = "flex";
    navList.style.display = "flex";
    navFooter.style.display = "flex"

    navInformation.style.transition = "all 0.5s";
    navList.style.transition = "all 0.5s";
    navFooter.style.transition = "all 0.5s";
});

closeNav.addEventListener("click", () => {
    navInformation.style.display = "none";
    navList.style.display = "none";
    navFooter.style.display = "none"
});


// Eventos: Número de pessoas
function peoplesOnBus(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
peoples.innerHTML = `${(peoplesOnBus(1, 50))} / 50`;

function peoplesOnBus2(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
peoples2.innerHTML = `${(peoplesOnBus2(1, 50))} / 50`;

function peoplesOnBus3(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
peoples3.innerHTML = `${(peoplesOnBus3(1, 50))} / 50`;

function peoplesOnBus4(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
peoples4.innerHTML = `${(peoplesOnBus4(1, 50))} / 50`;

function peoplesOnBus5(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
peoples5.innerHTML = `${(peoplesOnBus(1, 50))} / 50`;

function peoplesOnBus6(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
peoples6.innerHTML = `${(peoplesOnBus(1, 50))} / 50`;

function peoplesOnBus7(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
peoples7.innerHTML = `${(peoplesOnBus(1, 50))} / 50`;

function peoplesOnBus8(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
peoples8.innerHTML = `${(peoplesOnBus8(1, 50))} / 50`;

//Pegando valores do array de objetos
const localName = document.getElementById('userName')
const nameNav = document.getElementById('name-nav')
const getPerson = localStorage.getItem("data");
const personObj = JSON.parse(getPerson)

localName.innerHTML = `${personObj.name}`
nameNav.innerHTML = `Olá ${personObj.name}!`