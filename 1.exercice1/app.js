const body = document.querySelector("body")

const section = document.createElement("section")
body.appendChild(section)
const p = document.createElement("p")
section.appendChild(p)

//Anchorage :  UTC -9
//Reykjavik (Iceland) : UTC 0
//Saint-Petersburg (Russia) : UTC +3
// BXL : UTC +1

setInterval(()=>{
    let dateBxl = new Date()
    let dateAnchorage = new Date(dateBxl.getTime()-(1000*60*60*9));
    let dateReyljavik = new Date(dateBxl.getTime()-(1000*60*60*1));
    let dateStPeterburg = new Date(dateBxl.getTime()+(1000*60*60*3));
    p.innerText=`Bxl(BE) : ${dateBxl.toISOString()}
    Anchorage(USA) : ${dateAnchorage.toISOString()}
    Reykjavik(Iceland) : ${dateReyljavik.toISOString()}
    Saint-Peterburg(Russia) : ${dateStPeterburg.toISOString()}`
    
},1000)