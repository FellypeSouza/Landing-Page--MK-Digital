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
},1000);

function faqAccordion(value) {
    const faq1 = document.getElementById("faq1");
    let resp1 = document.getElementById("resp1");

    const faq2 = document.getElementById("faq2");
    let resp2 = document.getElementById("resp2");

    const faq3 = document.getElementById("faq3");
    let resp3 = document.getElementById("resp3");

    if (value === '1') {
        if (resp1.style.display === 'none' || resp1.style.display === '') {
            resp1.style.display = 'block';
        }
        else{
            resp1.style.display = 'none';
        }
    }
    else if (value === '2') {
        if (resp2.style.display === 'none' || resp2.style.display === '') {
            resp2.style.display = 'block';
        }
        else{
            resp2.style.display = 'none';
        }
    }
    else if (value === '3') {
        if (resp3.style.display === 'none' || resp3.style.display === '') {
            resp3.style.display = 'block';
        }
        else{
            resp3.style.display = 'none';
        }
    }
    
}
