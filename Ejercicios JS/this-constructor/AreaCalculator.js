function AreaCalculator(){
	this.circle = function innerCircle (r){
		return r * r * Math.PI;
	}
	this.square = function innerSquare (side){
		return side * side;
	}
	this.rectangle = function innerRectangle (side1, side2){
		return side1 * side2;
	}
	this.triangle = function innerTriangle (base, height){
		return (base * height) / 2;
	}
	this.pentagon = function innerPentagon (side){
		var angle = 360 / 5;
		var angleRad = angle * Math.PI / 180;
		var ap = side / (2 * (Math.tan(angleRad/2)));
		var perimeter = side * 5;
		return (perimeter * ap)/2;
	}
	this.hexagon = function innerHexagon(side){
		var angle = 360 / 6;
		var angleRad = angle * Math.PI / 180;
		var ap = side / (2 * (Math.tan(angleRad/2)));
		var perimeter = side * 6;
		return (perimeter * ap)/2;
	}
	this.trapeze = function innerTrapeze(side1, side2, height){
		return (((side1 + side2) / 2) * height);
	}
}

var foo = new AreaCalculator();
console.log(foo.circle(5));
console.log(foo.square(5));
console.log(foo.rectangle(5, 10));
console.log(foo.triangle(5, 5));
console.log(foo.trapeze(5, 5, 5));
console.log(foo.pentagon(5));
console.log(foo.hexagon(5));
