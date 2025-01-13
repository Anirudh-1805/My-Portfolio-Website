// var typed=new Typed(".text",{
//     strings:["ML Enthusiast, Web Developer, Quantum computing aficionado"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })/
var typed = new Typed(".text", {
    strings: ["ML Enthusiast", "Web Developer", "Quantum Computing Aficionado"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    startDelay: 0, // Ensures no delay before the first string
    smartBackspace: true, // Prevents erasing parts of strings that are common in subsequent strings
    loop: true
});