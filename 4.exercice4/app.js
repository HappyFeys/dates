const displayHour = document.querySelector('#hour')
const jour = document.querySelector('#jour')
const date = document.querySelector('#date')
const year = document.querySelector('#year')
const displaySecond = document.querySelector('span')

setInterval(()=>{
    display()
    displayFullDate()
},1000)

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

    let displayDate = thisHour.toLocaleDateString('fr-FR',{day: 'numeric', month:"short", hour12:false})
    date.innerText = displayDate
}

const displayTime = document.querySelector("#displayTime")

displayTime.addEventListener('click',()=>{
    setInterval(()=> {
        let thisHour = new Date()
        let amPm;
    let hour = thisHour.getHours()
    hour>12? amPm='PM': amPm='AM'
    hour = hour % 12;
    hour = hour ? hour : 12;

    let minute = thisHour.getMinutes()
    minute<10? minute = '0'+minute : minute
    displayHour.innerText = `${hour}:${minute}:`
    displaySecond.innerText = amPm
    },1000)
})