//Assignment operators:
//Assignment
console.log(v = 1); // v = 1 /1
console.log(w = 2); // w = 2 /2
console.log(x = 3); // x = 3 /3
console.log(y = 4); // y = 4 /4
console.log(z = 5); // z = 5 /5

//Addition assignment
console.log(v += 1); // v = 1 /2
console.log(w += 2); // w = 2 /4
console.log(x += 3); // x = 3 /6
console.log(y += 4); // y = 4 /8
console.log(z += 5); // z = 5 /10

//Subtraction assignment
console.log(v -= 1); // v = 2 /1
console.log(w -= 2); // w = 4 /2
console.log(x -= 3); // x = 6 /3
console.log(y -= 4); // y = 8 /4
console.log(z -= 5); // z = 10 /5

//Multiplication assignment
console.log(v *= 1); // v = 1 /1
console.log(w *= 2); // w = 2 /4
console.log(x *= 3); // x = 3 /9
console.log(y *= 4); // y = 4 /16
console.log(z *= 5); // z = 5 /25

//Division assignment
console.log(v /= 1); // v = 1 /1
console.log(w /= 2); // w = 4 /2
console.log(x /= 3); // x = 9 /3
console.log(y /= 4); // y = 16 /4
console.log(z /= 5); // z = 25 /5

//Remainder assignment
console.log(v %= 1); // v = 1 /0
console.log(w %= 2); // w = 2 /0
console.log(x %= 3); // x = 3 /0
console.log(y %= 4); // y = 4 /0
console.log(z %= 5); // z = 5 /0

//Exponentiation assignment
/*
console.log(v **= 1); //0
console.log(w **= 2); //0
console.log(x **= 3); //0
console.log(y **= 4); //0
console.log(z **= 5); //0
*/

//Values for next exercises

console.log(v = 1); // v = 1 /1
console.log(w = 2); // w = 2 /2
console.log(x = 3); // x = 3 /3
console.log(y = 4); // y = 4 /4
console.log(z = 5); // z = 5 /5

//Comparison operators:
//Equal
console.log(v == 1); // v = 1 /True
console.log(w == "2"); // w = 2 /True
console.log(x == x); // x = 3 /True
console.log(y == 6); // y = 4 /False
console.log(z == y); // z = 5 /False

//Not Equal
console.log(v != 2); // v = 1 /True
console.log(w != "1"); // y = 2 /True
console.log(x != x); // x = 3 /False
console.log(y != 4); // y = 4 /False
console.log(z != y); // z = 5 /True

//Strict Equal
console.log(v === 1); // v = 1 /True
console.log(w === "2"); // w = 2 /False
console.log(x === x); // x = 3 /True
console.log(y === 6); // y = 4 /False
console.log(z === y); // z = 5 /False

//Strict not equal
console.log(v !== 2); // v = 1 /True
console.log(w !== "1"); // w = 2 /True
console.log(x !== x); // x = 3 /False
console.log(y !== 4); // y = 4 /False
console.log(z !== y); // z = 5 /True

//Greater than
console.log(v > 1); // v = 1 /False
console.log(w > v); // w = 2 /True
console.log(x > x); // x = 3 /False
console.log(y > 6); // y = 4 /False
console.log(z > y); // z = 5 /True

//Greater than or equal
console.log(v >= 1); // v = 1 /True
console.log(w >= v); // w = 2 /True
console.log(x >= x); // x = 3 /True
console.log(y >= 6); // y = 4 /False
console.log(z >= y); // z = 5 /True

//Less than
console.log(v < 1); // v = 1 /False
console.log(w < v); // w = 2 /False
console.log(x < x); // x = 3 /False
console.log(y < 6); // y = 4 /True
console.log(z < y); // z = 5 /False}

//Less than or equal
console.log(v <= 1); // v = 1 /True
console.log(w <= v); // w = 2 /False
console.log(x <= x); // x = 3 /True
console.log(y <= 6); // y = 4 /True
console.log(z <= y); // z = 5 /False

//Arithmetic operators:
//Addition

console.log(v + 1); // v = 1 /2
console.log(w + 2); // w = 2 /4
console.log(x + 3); // x = 3 /6
console.log(y + 4); // y = 4 /8
console.log(z + 5); // z = 5 /10

//Substraction

console.log(v - 1); // v = 1 /0
console.log(w - 2); // w = 2 /0
console.log(x - 3); // x = 3 /0
console.log(y - 4); // y = 4 /0
console.log(z - 5); // z = 5 /0

//Multiplication

console.log(v * 1); // v = 1 /1
console.log(w * 2); // w = 2 /4
console.log(x * 3); // x = 3 /9
console.log(y * 4); // y = 4 /16
console.log(z * 5); // z = 5 /25

//Division

console.log(v / 1); // v = 1 /1
console.log(w / 2); // w = 2 /1
console.log(x / 3); // x = 3 /1
console.log(y / 4); // y = 4 /1
console.log(z / 5); // z = 5 /1

//Remainder

console.log(10 % 3); //1
console.log(20 % 3); //2
console.log(30 % 3); //0
console.log(40 % 3); //1
console.log(50 % 3); //2

//Increment

console.log(v++); // v = 1 /1
console.log(w++); // w = 2 /2
console.log(++x); // x = 3 /4
console.log(++y); // y = 4 /5
console.log(z++); // z = 5 /5

//Decrement

console.log(v--); // v = 2 /2
console.log(w--); // w = 3 /3
console.log(--x); // x = 4 /3
console.log(--y); // y = 5 /4
console.log(z--); // z = 6 /6

//Unary negation

console.log(-v); // v = 1 /-1
console.log(-'2'); //-2
console.log(-x); // x = 3 /-3
console.log(-y); // y = 4 /-4
console.log(-'5'); //-5

//Unary plus

console.log(+'15'); //15
console.log(+'2'); //2
console.log(+10); //10
console.log(+'5'); //5
console.log(+true); //1

//Exponentiation operators

/*
v ** 2; // v = 1 /1
w ** 3; // w = 2 /8
x ** 4; // x = 3 /81
y ** 5; // y = 4 /1024
z ** 6; // z = 5 /15625
*/

//Logical operators
//Logical AND

console.log(v === v && w === w); // v = 1, w = 2/True
console.log(true && true); // v = 1, w = 2/True
console.log(true && false); // x = 3/False
console.log(false && true); // x = 3, y = 4/False
console.log(false && false); // z = 5/False

//Logical OR
console.log(true || true); //True
console.log(true || false); //True
console.log(false || true); //True
console.log(false || false); //False
console.log(z === y || z === 3); // z = 5, y = 4/False

//Logical NOT

console.log(!(v === v)); //False
console.log(!true); //False
console.log(!(true && false)); //True
console.log(!(false && true)); //True
console.log(!(false || false)); //True

//String operators
//Concatenation operator

console.log('-'+'+'); //'-+'
console.log(v + ' = ' + '1'); //
console.log(w + ' + ' + x + ' = ' + (w+x));
console.log('hola' + ' ' + 'mundo');
console.log(123 + 'taco');

//Conditional (ternary) operator

console.log((v === v) ? v : false); //v = 1 /1
console.log((w > w) ? w : false); //w = 2 /false
console.log((x < y) ? y : x); //x = 3, y = 4 /4
console.log(((v + w) < (x - y)) ? x+y : v+w); //v = 1, w = 2, x = 3, y = 4 /3
console.log((z > (4)) ? z : 4); //z = 5 /5

//Comma operator
var v = 1, w = 2, x = 3, y = 4, z = 5;
console.log(v,w,x,y,z); //Resultado de la linea anterior = v = 1, w = 2, x = 3, y = 4, z = 5/1 2 3 4 5
console.log((v,w,x,y,z)); // v = 1, w = 2, x = 3, y = 4, z = 5/5
console.log((v, 'taco', 10 , 'menespia')); //menespia
console.log((1,2)); //2
console.log((v+w,w+x,x+y,y+z)); // v = 1, w = 2, x = 3, y = 4, z = 5/9

//Unary operators
//Delete

var obj = {name: 'Migue', lastName: 'Delgado', age: '24', holis: 'holis', taco: 'otro taco'}; //Declarate an object
var arr = [1,2,3,4,5]
console.log(obj); // {name: 'Migue', lastName: 'Delgado', age: '24', holis: 'holis', taco: 'otro taco'}
console.log(arr); // [1,2,3,4,5]
delete obj.taco; console.log(obj); //Delete the property 'taco' from object 'obj' /{name: 'Migue', lastName: 'Delgado', age: '24', holis: 'holis'}
delete arr[4]; console.log(arr); //Delete the element in the index 4/[1,2,3,4,]
delete obj.holis; console.log(obj); //Delete the property 'holis' from object 'obj' /{name: 'Migue', lastName: 'Delgado', age: '24'}
delete arr[0]; console.log(arr); //Delete the element in the index 0/[,2,3,4,]
delete obj.age; console.log(obj); //Delete the property 'holis' from object 'obj' /{name: 'Migue', lastName: 'Delgado'}

//Typeof

console.log(typeof(v)); // v = 1/number
console.log(typeof('taco')); //string
console.log(typeof(obj)); //object
console.log(typeof(arr)); //object
console.log(typeof(1)); //number

//Void

console.log(void(v)); //undefined
console.log(void(undefined)); //undefined
console.log(void(obj)); //undefined
console.log(void(arr)); //undefined
console.log(void(139847)); //undefined

//Relational operators
//In

console.log('name' in obj); //true
console.log('taco' in obj); //false
console.log('0' in arr); //false
console.log(2 in arr); //true
console.log('age' in obj); //false

//InstanceOF

console.log((obj instanceof Object)); //true
console.log((obj.name instanceof Date)); //false
console.log((arr instanceof Array)); //true
console.log((v instanceof Date)); //false
console.log((obj.name instanceof Object)); //false

//Operator precedence

/*---------------------------------------------------*/

console.log((19 + 1) * 3 + 89); //149
//(((20)*3)+89)

console.log(16 / 8 - 2 * 1); //0
//(( 16 / 8 ) - (2 * 1))

console.log(false && 7 + 2 || 4 ); //4
//((false && ( 7 + 2 )) || 4)

console.log(true ? 8 : 3 + 2 * 3); //8
//(true ? 8 : (3 + ( 2 * 3 )))

console.log((v, false || 3 + 4)); //v = 1 /7
//(v , ( false || ( 3 + 4 )))

/*---------------------------------------------------*/

console.log(19 / 1 * 3 + 12 && false); //false
//((((19 / 1) * 3) + 12) && false)

console.log(6 +  12 / 6 || 0); //8
//((6 + (12 / 6)) || 0)

console.log(true && 12 - 8 || false ); //4
//((true && ( 12 - 8 )) || false)

console.log(v < w && 10 + 4 * 2 / 1); //18
//(v < w && (10 + (( 4 * 2 ) / 1 )))

console.log(true ? 16 / 8 - 2 * 1 : 3 + 89) //0
//(true ? (((16 / 8) - 2):(3 + 89)))

/*---------------------------------------------------*/

console.log(12 / 6 * 3 + 12); //18
//(((12 / 6) * 3) + 12)

console.log(30 % 8 - 2 + 10); //14
//((( 30 % 8 ) - 2) + 10 )

console.log(12 && 4 + 2 || 4 ); //6
//(((12 && ( 4 + 2 )) || 4))

console.log(false ? 8 : 3 * 2 - 3); //3
//(false ? 8 : ((3 * 2) - 3 )))

console.log((false || 3 + 4,v )); // v = 1 /1
//((( false || ( 3 + 4 )) , v )

/*---------------------------------------------------*/

console.log(false || 19 / 1 * 3 + 12); //69
//(false || ((19 / 1) * 3) + 12)))

console.log(6 || 12 - 6 * 0); //6
//(6 || (12 - (6 * 0)))

console.log(true && false || 11 + 12 ); //23
//((true && false) || (11 + 12)))

console.log(v * w || 10 + 4 * 2 - 1); //2
//((( v * w ) || (10 + ( 4 * 2 ) - 1)))

console.log(false ? 11 / 2 - 1 * 4 : 2 + 9) //11
//(false ? (((11 / 2) - 1):(2 + 9)))

/*---------------------------------------------------*/

console.log(48+5||51-78&&58+25) //53
//((48 + 5) || ((51 - 78) && (58 + 25)))

console.log( 1 + 3 * 5 / 2 - 3) //5.5
//(1 + ((3 * 5) / 2) - 3)

console.log(false || 2 - 1 * 4) // -2
//(false || (2 - (1 * 4)))

console.log(60*51<26/25>59*3) //false
// ((60 * 51) < (26 / 25) > (59 * 3))

console.log(12 < 8 == 1 + 4) //false
// ((12 < 8) == (1 + 4))

/*---------------------------------------------------*/

console.log(29+89>=6-64<=71+73); //true
