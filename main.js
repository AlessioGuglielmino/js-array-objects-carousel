// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell'immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
//  costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Consiglio: gestite bene il tempo. si può sempre tornare in seguito a migliorare la grafica,
//  ma dedicargli molto tempo da subito può farvi rimanere indietro.

// Milestone 1:
// Ora rimuoviamo i contenuti statici
// e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra,
//  l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il ciclo infinito del carosello.
// Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra,
//  la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura
//  se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const slides = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// RECUEPERO GLI ELEMENIT DI INTERESE

//* Recupero il container dal DOM
const carosel = document.getElementById("carosel");

//* Recupero gli elementi con classe item - DOVE STAMPO LE SLIDES
const slidesContainerElement = document.getElementById("slides-container");

//* Recupero gli elementi con classe item
const items = document.getElementsByClassName("item");

let activeSlide = 0;

// PER OGNI SLIDE
slides.forEach((slide, index) => {
  // CREO UN NODO HTML

  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");

  // CON IF AGGIUNGO LA CLASSE ACTIVE PER FAR COMPARIRE LA PRIMA SLIDE
  if (index == activeSlide) {
    slideElement.classList.add("active");
  }
  slideElement.innerHTML = ` <img src="./${slide.image}" alt="" />
  <div class="slide-text">
    <h1>${slide.title}</h1>
    <p>${slide.text}</p>
  </div>`;

  // AGGIUNGO IL NODO ALL'ARRAY ORIGINALE DI OGGETTO
  slide.HTMLnode = slideElement;
  // HO QUALCHE DUBBIO SUL NODO- RIVEDERE

  // INSERISCO IL NODO NELL CONTENITORE PRESO DA HTML
  slidesContainerElement.append(slideElement);
});

//* Recupero tasto Next dal DOM
const nextButton = document.getElementById("go-next");

nextButton.addEventListener("click", goNext);

function goNext() {
  // rimuovere la classe active alla slide vecchia
  const oldslide = slides[activeSlide].HTMLnode;
  oldslide.classList.remove("active");

  activeSlide++;

  if (activeSlide >= slides.length) {
    // EFFETTO PAC-MAN
    activeSlide = 0;
  }

  // aggiungere la classe active alla slide nuova
  const newSlide = slides[activeSlide].HTMLnode;
  // HO QUALCHE DUBBIO SUL NODO- RIVEDERE
  newSlide.classList.add("active");
}

//* Recupero tasto Prev dal DOM
const prevButton = document.getElementById("go-prev");
prevButton.addEventListener("click", goPrev);

function goPrev() {
  // rimuovere la classe active alla slide vecchia
  const oldslide = slides[activeSlide].HTMLnode;
  oldslide.classList.remove("active");

  activeSlide--;

  if (activeSlide < 0) activeSlide = slides.length - 1;

  // aggiungere la classe active alla slide nuova
  const newSlide = slides[activeSlide].HTMLnode;
  // HO QUALCHE DUBBIO SUL NODO- RIVEDERE
  newSlide.classList.add("active");
}
