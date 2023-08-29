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

//* Recupero tasto Prev dal DOM
const prev = document.getElementById("prev");

//* Recupero tasto Next dal DOM
const next = document.getElementById("next");

//* Recupero il container dal DOM
const carosel = document.getElementById("carosel");

//* Recupero gli elementi con classe item - DOVE STAMPO LE SLIDES
const slidesContainerElement = document.getElementById("slides-container");

//* Recupero gli elementi con classe item
const items = document.getElementsByClassName("item");

slides.forEach((slide) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");
  slideElement.innerHTML = ` <img src="./img/01.webp" alt="" />
  <div class="slide-text">
    <h1>titolo</h1>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>`;
  slide.HTMLnode = slideElement;
  slidesContainerElement.append(slideElement);
});
