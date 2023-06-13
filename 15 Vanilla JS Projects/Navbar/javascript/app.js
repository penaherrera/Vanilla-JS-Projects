// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Se encuentran 2 clases de css "links y show-links" y se quiere implementar con una funcionabilidad "toggle"
// esto se logra con un "if else" y el method "classList.contains classList.remove y classList.add"

// navToggle.addEventListener('click', function(){
//     if(links.classList.contains('show-links')){
//         links.classList.remove('show-links')
//     }
//     else{
//         links.classList.add('show-links')
//     }
// })

// La manera mas facil de hacerlo seria con el metodo ".toggle" de la siguiente manera:
navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
})