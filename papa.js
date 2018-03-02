function Car(hasRoof, name){
	this.hasRoof = hasRoof || true;
	this.name = name || "Unnamed";
}

Car.prototype.basicInfo = function(){
	console.log('Cars name is ' + this.name + ". Also it has "+ this.hasRoof);
};