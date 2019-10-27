let frameMatrix4x4 = [];
let frameMatrix32x32 = [];

fetch("assets/data/4x4.json")
    .then(response => frameMatrix4x4 = response.json());

fetch("assets/data/32x32.json")
    .then(response => frameMatrix32x32 = response.json());


// window.onload = function() {
//     var ex1 = document.getElementsByTagName('input');
//     for (let ex of ex1) {
//         ex.onclick = this.handler;
//     }
// }

// function handler() {
//     alert('clicked');
// }

