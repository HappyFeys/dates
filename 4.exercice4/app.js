const displayHour = document.querySelector('#hour')
const jour = document.querySelector('#jour')
const date = document.querySelector('#date')
const year = document.querySelector('#year')
const displaySecond = document.querySelector('span')



function display() {
    let thisHour = new Date()
    let hour = thisHour.getHours()
    hour<10 ? hour='0'+hour : hour

    let minute = thisHour.getMinutes()
    minute<10 ? minute = '0'+minute : minute
    let seconde = thisHour.getSeconds()
    displayHour.innerText = `${hour}:${minute}:`
    seconde<10 ?  seconde = '0'+seconde : seconde
    displaySecond.innerText = seconde
}

function displayFullDate() {
    let thisHour = new Date()
    let day = thisHour.getDay()
    switch (day) {
        case 0:
            jour.innerText = "SUN"
            break;
        case 1:
            jour.innerText = "MON"
            break;
        case 2:
            jour.innerText = "TUE"
            break;
        case 3:
            jour.innerText = "WED"
            break;
        case 4:
            jour.innerText = "THU"
            break;
        case 5:
            jour.innerText = "FRI"
            break;
    
        default:
            jour.innerText = "SAT"
            break;
    }
    let annee = thisHour.getFullYear()
    year.innerText = annee

    let displayDate = thisHour.toLocaleDateString('fr-FR',{day: 'numeric', month:"short"})
    date.innerText = displayDate
}

const displayTime = document.querySelector("#displayTime")

let isClicked = false; //Je définis un boolean qui sera de base sur faux

displayTime.addEventListener('click', () => {
    isClicked = !isClicked; // Mon addEventListener va me toggle le boolean
});

setInterval(() => { //Ensuite, je définis un interval qui va se refresh toutes les secondes et qui va switch entre le format AM/PM en fonction de l'état du boolean
    if (isClicked) {
        let thisHour = new Date();
        console.log(thisHour.toLocaleString("en-US", {hour: '2-digit', minute:'2-digit',hour12:true}));
        displayHour.innerText = thisHour.toLocaleString("en-US", {hour: '2-digit', minute:'2-digit',hour12:true});
        displaySecond.innerText = "";
        displayFullDate();
        console.log(isClicked);
    } else {
        display();
        displayFullDate();
        console.log(isClicked);
    }
}, 1000);
