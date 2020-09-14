// ALLE OPGAVERNE I DETTE DOKUMENT ER FRA https://docs.google.com/document/d/1g4NPayMnNV8UUNdoTLZdcf4BehCip14QDuRwa4V7uFU/edit#

//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}


var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {

    if (typeof n1 === 'number' && typeof n2 === 'number' && typeof callback === 'function') {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        try {
            throw new Error('ikke et tal eller ikke en funktion');
        } catch (e) {
            console.error(e.name + ': ' + e.message);
        }
    }
};

// 2)
console.log(add(1, 2));         // What will this print?   Det vil lægge de to tal sammen og printe svaret 3
console.log(add);               // What will it print and what does add represent?   Den printer add er en function
console.log(add(1, 2, 3));      // What will it print   Den printer tallet 3 fordi det sidste tal der bliver givet med ikke kommer med alligvel
console.log(add(1));            // What will it print 	Den printer NaN fordi at den ikke kan udføre funktionen
console.log(cb(3, 3, add));     // What will it print   Der kommer til at stå det som der står i cb funktionen plus resultatet af tallene lagt sammen
console.log(cb(4, 3, sub));     // What will it print   Der kommer til at stå det som der står i cb funktionen plus resultatet af tallene trukket fra hindanden
console.log(cb(3, 3, add()));   // What will it print (and what was the problem) Der kommer en fejl og det nok fordi at funktionen hedder add og ikke add()
console.log(cb(3, "hh", add));  // What will it print   Den printer 3 + hh = 3hh fordi at man lægger et tal sammen med en string så det er ligsom java

// 4)
function mul(n1, n2) {
    return n1 * n2;
}

console.log(cb(2, 5, mul));

// 5) 
console.log(cb(5, 5, function (n1, n2) {
    return n1 / n2;
}));


// GETTING COMFORTABLE WITH FILTER, MAP AND FOREACH

// 1)
var array = ["Lars", "Bo", "Jan", "Ian", "Peter", "Frederik"];
var arrayLessThan3 = array.filter(lessThan3)

array.forEach(myFunction);
arrayLessThan3.forEach(myFunction)

function myFunction(name) {
    console.log(name);
}

function lessThan3(name) {
    if (name.length <= 3) {
        return name;
    }
}
//2
var arrayUpper = array.map(n => n.toUpperCase());
arrayUpper.forEach(myFunction);

//3
function html(arrayHere) {
    var text = "<ul>";
    var htmlList = arrayHere.map(n => '<li>' + n + "</li>");
    return text + htmlList.join('') + "</ul>";
}

console.log(html(array));
console.log(html(arrayUpper));

//4

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

console.log(cars.filter(cars => cars.year > 1999));
console.log(cars.filter(cars => cars.make === "Volvo"));
console.log(cars.filter(cars => cars.price < 5000));

// 4a) TODO VIRKER IKKE
var sql = "INSERT INTO cars (id,year,make,model,price) VALUES (";
var maps = cars.map(n => n);
console.log(sql + maps);


// ASYNCHRONOUS CALLBACKS
// 1)

//var msgPrinter = function(msg,delay){
//  setTimeout(function(){
//    console.log(msg);
//  },delay);
//};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");

// MIT BUD ER AT DET KOMMER UD I DENNE RÆKKEFØLGE
// aaaaaaaa
// dddddddd
// ffffffff
// eeeeeeee
// bbbbbbbb
// 2) jeg gættede rigtig

// THIS AND constructor functions
function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);  //Explain this
        // this er vel en local variable så functionen inde i functionen kender ikke til den
    }.bind(this), 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
//Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this
// mit bud er at javascript bare gætter sig til, at vi mener navnet på den person der er lige oven over.
// en function hvis navn starter med stort bogstav indikere at det er et objekt / constructor til et objekt


//var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
//console.log("I'm global: " + name);  //What’s different ?

/* Der kommer en ReferenceError name is not defined fordi at man har lagt 
 *  Person objektet ned i en variable så kan den ikke finde name man kan dog skrive p.name og så vil det virke igen
 */


// 4)
//var greeter = function(){
//  console.log(this.message);
//};
//var comp1 = { message: "Hello World" };
//var comp2 = { message: "Hi" };
//
//var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
//var g2 = greeter.bind(comp2 );//And here another “this”
//setTimeout(g1,500);
//setTimeout(g2,1000);



// JAVASCRIPT OBJECTS
//1)
var person = {
    name: "Bo",
    birthday: "01/01/2000",
    email: "bo@bo.bo",
    hobby: "everything"
};
for (prop in person) {
    console.log(prop, person[prop]);
}

delete person.hobby;
person.nationality = "Danish";
for (prop in person) {
    console.log(prop, person[prop]);
}


//2)
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getDetails = function () {
        return "Navn: " + this.firstName + " " + this.lastName + " Alder: " + this.age;
    };
}

var person01 = new Person("Mads", "Kristensen", 23);
console.log(person01.getDetails());

