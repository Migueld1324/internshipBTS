"use strict"
// los objetos en JS son contenedores que guardan una serie de informacion (propiedades)
//esas propiedades se componen de dos cosas: el nombre del atributo (key) y el valor del atributo.

// var apellido = "Riveraaa";

// var sergio = {
// 	name: 'Sergio',
// 	lastName: apellido,
// 	age: 29,
// 	middleName: 'Manuel'
// };

// sergio.ocupacion = "Estudiante"; //dot notation
//sergio.ocupacion = "Taxista";
//sergio.age = sergio.age + 1;
//sergio.age++;
//sergio.age = ++sergio.age;
//console.log(sergio.age);
//sergio['heigth'] = '175 cm'; // brackets notation
//console.log(sergio['name']);
//sergio['middleName'] = "Miguel";  //cuando usas brackets usas comillas cuando tu te sabes el nombre de la propiedad
                                  //con comillas cuando es una variable
//delete sergio['middleName'];
//delete sergio.middleName;
// var nuevaPropiedad = 'weigth';
// //var nuevaPropiedad;
// sergio[nuevaPropiedad] = 800;
// var superSergio = {};

// for(var x in sergio){
// 	superSergio[x] = sergio[x];
// }

// console.log(superSergio);

//console.log(sergio); 
//Crear un clon de sergio tipo objeto 

var obj1 = {
	name: 'Axel',
	lastName: 'Nolasco'
};

var obj2 = {
	age: 22,
	name: 'Hector'
}

for(var x in obj1){
	if(x in obj2){
		console.log("Elemento " + x + " encontrado en ambos arreglos");
	}
	else{

		console.log("Elemento: " + x  + " no coincide");
	}
}



// var x = Object.keys(obj1);

// var y = Object.keys(obj2);

// var max1 = x.length;
// var max2 = y.length

// if(max1 !== max2){
// 	console.log("Los atributos de los objetos son diferentes");
// }
// else{
// 	for(let i = 0; i<max1; i++){
// 		if (x[i] !== y[i]) {
// 			console.log("Econtre atributos diferentes, papu. Son: " + x[i] + " " + y[i]);
// 			i=max1;
// 		}
// 	}
// }

// console.log (x, y);