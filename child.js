BatMansCar.prototype = Object.create(Car.prototype); 
// above line is magical and creates the prototypal inheritamce
function BatMansCar (name, hasRoof) {
	Car.call(this, name , hasRoof)

	this.specialfeatures = function () {
		this.basicInfo();
		console.log('I am rich');
	}
}

var b = new BatMansCar("Bat Mobile", "Has Roof");
b.basicInfo();
b.specialfeatures();