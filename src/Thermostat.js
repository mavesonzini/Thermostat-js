function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.isPowerSaving = true;
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.maximumTemperature = function(){
  if (this.isPowerSaving){
    return 25;
  } else {
    return 32;
  }

}

Thermostat.prototype.up  = function(){
  if (this.temperature < this.maximumTemperature() ){
    this.temperature++;
  }
}

Thermostat.prototype.down = function(){
  if (this.temperature > this.MINIMUM_TEMPERATURE){
    this.temperature--;
  }

}
