// ALLE OPGAVERNE I DETTE DOKUMENT ER FRA https://docs.google.com/document/d/1eEJbwvOn19fy9MoasclKURqpk3rRVSHZ4S0hGsQUG3s/edit?usp=sharing
//
//a 
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//b
var all = boys.concat(girls);
console.log(all);
//c
console.log(all.join(','));
console.log(all.join('-'));
//d og e
all.push('Lone', 'Gitte');
all.unshift('Hans', 'Kurt');
console.log(girls, boys);
//f og g
all.shift();
all.pop();
console.log(boys, girls);
//h
all.splice(3, 2);
console.log(all);
//i
all.reverse();
console.log(all);
//j 
all.sort();
console.log(all);
//i
var uppercase = all.map(n => n.toUpperCase());
console.log(uppercase);
//m
var lL = all.filter(checkName);
console.log(lL);

function checkName(name) {
    if (name.charAt(0).includes('l') || name.charAt(0).includes('L')) {
        return name;
    }
}

//k
