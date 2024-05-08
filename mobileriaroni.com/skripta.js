/* ALERT-i perdoret si njoftim ne kuader te faqes */
//window.alert("Mobileria Roni ofron zbritje nga data 13 - 20 Janar!")

//inicializimi i konstanteve per butona te filterit dhe fotografi te kategorive
const butoni = document.querySelectorAll(".button");
const image = document.querySelectorAll(".image");

//kushtezimi i cili grumbullon te gjitha fotografite e kategorive permes klases image dhe i dallon apo i kategorizon ne baze te klases femije, nese prindi klase eshte image atehere femiu i prindit eshte kuzhina dmth mirret apo zgjedhet klasa image kuzhina, tash kudo qe ka klase te thirrur image kuzhina shfaqet vetem ajo ndersa tjerat jo.

//kushtezimi per filtrimin dhe kategorizimin e fotografive
for (i = 0; i < butoni.length; i++) //nese jane 4 butona ne faqe sic eshte te gjitha, kuzhina... i grumbullon te gjithe
{
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        image.forEach((image) => {
            if (filter === "tegjitha") {
                image.style.display = "block";
            } else {
                if (image.classList.contains(filter)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            }
        })
    })
}

//ndryshimi i fotografive tek sektori rreth nesh
function mousimbi() {
    document.getElementById("first-photo").style.display = "none";
}
function mousijasht(){
    document.getElementById("second-photo").style.display = "block";
}

//shfaqja e contetit tek sektori i informatave
function shfaqPunimet() {
    document.getElementById("shfaq").style.display = "block";
}

//ndryshimi i titullit kryesor tek sektori hero
function ndryshotitullin() {
    document.getElementById("titulli-i-ri").innerHTML = "Modelet e fundit i gjeni tek ne!";
}


//funksioni per te ekzekutuar animacionin e kartave pra paraqitjen e back-ut
const cards = document.querySelectorAll(".card")
function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//llogaritja e cmimit per meter
const metri = document.getElementById("input1");
const cmimimeter = document.getElementById("input2");

function ndryshoInputin2() {
    cmimimeter.value = metri.value * 300;
}

metri.addEventListener("input", ndryshoInputin2);

// validimi apo kushtezimi i fushave kontaktuse
const emriInput = document.getElementById("emriInput");
const emailInput = document.getElementById("emailInput");
const pershkrimiInput = document.getElementById("pershkrimiInput");
const sendButton = document.getElementById("send-button");

function dergo() { //operatori OSE || operatori DHE &
    if (emriInput.value === "" || emailInput.value === "" || pershkrimiInput.value === "") {
        window.alert("Ju lutem mbusheni te gjitha format!");
    } else {
        sendButton.value = "Duke u derguar...";
    }
}

sendButton.addEventListener("click", dergo);

//Detyre Shtepie: te implementohet ora e cila ekzekutohet ne kohe reale p.sh format 24 ore si ne vijim: 22:30:15, te paraqitet ne shiritin e menys ngjitur me kontaktin ose anen e djatht te kontaktit.