var Car = function(make, model){
  this.carMake = make;
  this.carModel = model;
};

Car.prototype.description = function () {
  return this.carMake + ' ' + this.carModel;
}

var taurs = new Car("Ford", "Taurus");
var neon = new Car("Plymouth", "Neon");

console.log(taurs.description());
console.log(neon.description());
