let date =new Date()

let future = new Date(date.getTime()+(1000*60*60*80000))

function getFuture(hour) {
    let date = new Date()
    let future = new Date(date.getTime()+(1000*60*60*hour))
    return future
}
console.log(date);
console.log(getFuture(2));
const body= document.querySelector('body')
const section = document.createElement('section')
body.appendChild(section)

const input = document.createElement('input')
section.appendChild(input)
const span = document.createElement('span')
section.appendChild(span)

input.addEventListener('keyup', (hour)=>{
    span.innerText= getFuture(hour.key)
})
