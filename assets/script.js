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

// Récupération des éléments du DOM

const bannerElement = document.querySelector("#banner");

const imageElement = document.getElementById("img");
const textElement = document.getElementById("textbanner");
const dotsElement = document.getElementById("dots");

// Ajout des Event Listeners sur les flèches droite et gauche

const arrowrightElement = document.getElementById("right");
arrowrightElement.addEventListener("click", () => changePicture(1));

const arrowleftElement = document.getElementById("left");
arrowleftElement.addEventListener("click", () => changePicture(-1));

// Rattachement des balises au parent bannerElement (#banner)

bannerElement.appendChild(imageElement);
bannerElement.appendChild(textElement);
bannerElement.appendChild(arrowrightElement);
bannerElement.appendChild(arrowleftElement);

// Création des dots et mise en place du défilement infini

function addBullet(number){
	for(let i = 0 ; i < number ; i++) {
		
		const dot = document.createElement("a");
		dot.classList.add('dot');
		dot.setAttribute('data-position', i);
		if(i == 0){
		dot.classList.add('dot_selected');	
		}
		dotsElement.appendChild(dot);	
		
	}
}

addBullet(slides.length);

const dots = document.querySelectorAll('.dot');

function changePicture(direction) {
    number+=direction;
	if (number < 0) {
		number = slides.length - 1;
	}
	if (number > slides.length - 1) number = 0;
	imageElement.src = "./assets/images/slideshow/" + slides[number].image;
	textElement.innerHTML = slides[number].tagLine;

	dots.forEach(dot => {
        dot.classList.remove('dot_selected');
        if (dot.getAttribute('data-position') == number) {
		dot.classList.add('dot_selected');
        }
	});
}


function selectDot() {
    dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
			event.preventDefault();
			const position = dot.getAttribute('data-position');
			imageElement.src = `./assets/images/slideshow/${slides[position].image}`;
			textElement.innerHTML = slides[position].tagLine;
			dots.forEach((dot) => dot.classList.remove('dot_selected'));
			dot.classList.add('dot_selected');
        });
    });
}
selectDot();