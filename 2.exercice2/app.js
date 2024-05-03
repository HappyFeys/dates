const myBirthday = new Date('1993-10-27');
let today = new Date()
let difference = today.getTime()-myBirthday.getTime()
console.log(Math.floor(difference.toString()/(1000*60*60*24)));

function getDifference(year, month, day) {
    let today = new Date()
    let date = new Date(`${year}-${month}-${day}`)
    let difference = today.getTime()-date.getTime()
    return Math.floor(difference.toString()/(1000*60*60*24))
}

console.log(getDifference(2024,1,1));