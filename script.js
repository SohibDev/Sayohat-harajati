let general = document.querySelector(`#general`);
let amount = document.querySelector(`#amount`);

const oneDollar = 9433.34;
const oneEuro = 10354.03;

let ticket = oneDollar * 500;
let hotel = oneDollar * 250;
let others = oneEuro * 120;

let price = ticket + hotel + others;

general.innerHTML = `Sayohatning umumiy xarajati: ${price} `;

budjet = prompt(`summani kiriting`);

if (budjet >= price) {
    amount.innerHTML = `${budjet} so'm pulingiz sayohatingiz uchun yetadi! Oq yo'l hurmatli mijoz! :)`
    var element = document.getElementById("yes");
    element.classList.remove("d-none");
    
} else {
    amount.innerHTML = `${budjet} so'm pulingiz yetmaydi! Yana sabr qiling keyin ham borishing mumkin! <br> Yana ${price-budjet}cha mablag' to'plashingiz kerak!`

    var element = document.getElementById("no");
    element.classList.remove("d-none");
}