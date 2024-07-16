let counter = document.getElementById("counter");
let counterMin = document.getElementById("counterMin");
let counterSec = document.getElementById("counterSec");
counterMin.innerHTML = 23;
counterSec.innerHTML = 59;
counter.innerHTML = counterMin.innerHTML + ":" + counterSec.innerHTML;

setInterval(()=>{
    counterSec.innerHTML = counterSec.innerHTML - 1;

    if (counterSec.innerHTML == 0 && counterMin.innerHTML >0) {
        counterMin.innerHTML = counterMin.innerHTML - 1;
        counterSec.innerHTML = counterSec.innerHTML + 59;
        if (counterMin.innerHTML == 0) {
            let offer = document.getElementById("offer");
            counter.remove()
            offer.innerHTML = "Oferta Expirada!"
        }
    }

    counter.innerHTML = counterMin.innerHTML + ":" + counterSec.innerHTML;
},1000)
