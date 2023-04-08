const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const tagline = document.getElementById("tagline");
const slideImg = document.getElementById("slide");
const dots = document.querySelectorAll(".dots .dot");

let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero >= slides.length)
        numero = 0;
    slideImg.src = "./assets/images/slideshow/" + slides[numero].image;
    tagline.innerHTML = slides[numero].tagLine;

    dots.forEach((dot, index) => {
        if (index === numero) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

const button = document.querySelectorAll('.arrow');

button.forEach(clickArrow);
function clickArrow(element) {

	element.addEventListener('click', (event) => {
		event.target.parentElement.classList.contains('arrow_left') ? ChangeSlide(-1) : ChangeSlide(1);
	});
}

setInterval("ChangeSlide(1)", 2000);