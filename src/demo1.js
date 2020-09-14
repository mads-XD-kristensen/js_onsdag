/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


console.log("Hello World, i know how to count");


let a = ['a', 'b', 'c', 'd'];

a.forEach(n => console.log(n));

let b = a.map(n => n.toUpperCase());
let c = a.filter(n => n === 'b');
console.log(c);
console.log(b);

let html = a.map(n => '<p>' + n + '</p>');
console.log(html);
console.log('html:' + html.join());

[1, 2, 3, 4].forEach(n => console.log(n));
[1, 2, 3, 4].forEach(udskrivdeluxe);

udskriv(210);

function udskriv(n) {
    console.log(n);
}

function udskrivdeluxe(n) {
    console.log('tal: ' + n);
}