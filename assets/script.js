// Déclaration de la constante pour les slides

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
	},
	
];

let number = 0;

// Déclaration des constantes pour les éléments du DOM

const bannerElement = document.querySelector("#banner");
const imageElement = document.getElementById("img");
//imageElement.src = slides.image;
const textElement = document.getElementById("textbanner");
//textElement.innerText = slides.tagline;
const dotsElement = document.getElementById("dots");
const arrowrightElement = document.getElementById("right");
const arrowleftElement = document.getElementById("left");

// Ajout des Event Listeners sur les flèches droite et gauche

arrowrightElement.addEventListener("click", () => changePicture(1));
arrowleftElement.addEventListener("click", () => changePicture(-1));

// Rattachement des balises à l'élément parent bannerElement (#banner)

bannerElement.appendChild(imageElement);
bannerElement.appendChild(textElement);
bannerElement.appendChild(arrowrightElement);
bannerElement.appendChild(arrowleftElement);

// Fonction pour créer les dots et les ajouter au DOM

function addBullet(){
	for(let i = 0 ; i < slides.length; i++) {
		
		const dot = document.createElement("a");
		dot.classList.add('dot');
		dot.setAttribute('data-position', i);
		if(i == 0){
			dot.classList.add('dot_selected');	
		}
		dotsElement.appendChild(dot);	
		
	}
}



// Appel de la fonction pour créer les dots au chargement de la page

addBullet();

// Fonction pour mettre à jour l'image, le texte et la sélection de dot

function updateSlide(position) {
	imageElement.src = `./assets/images/slideshow/${slides[position].image}`;
	textElement.innerHTML = slides[position].tagLine;
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[position].classList.add('dot_selected');
}
const dots = document.querySelectorAll('.dot');

// Fonction pour changer l'image en fonction de la direction donnée

function changePicture(direction) {
number += direction;
	if (number < 0) {
		number = slides.length - 1;
	}
	if (number > slides.length - 1){ 
		number = 0; 
	}
	console.log(number);
	updateSlide(number);
	/*imageElement.src = `./assets/images/slideshow/${slides[position].image}`;
	textElement.innerHTML = slides[position].tagLine;
	dots.forEach(dot => {
        if (dot.getAttribute('data-position') == number) {
		dot.classList.add('dot_selected');
        } else { dot.classList.remove('dot_selected');
		}
	});*/
}

// Sélection de tous les dots et ajout de l'événement "click"


function selectDot() {
    dots.forEach((dot) => {
		dot.addEventListener('click', (event) => {
			console.log(number);
			event.preventDefault();
			const position = dot.getAttribute('data-position');
			number = +position;
			console.log(number);
			updateSlide(position);
			/*function updateSlide(position) {
				imageElement.src = `./assets/images/slideshow/${slides[position].image}`;
				textElement.innerHTML = slides[position].tagLine;
				dots.forEach(dot => dot.classList.remove('dot_selected'));
				dots[position].classList.add('dot_selected');
			}*/
        });
    })
}
selectDot();