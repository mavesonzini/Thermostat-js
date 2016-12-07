function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function(){
  return this.temperature++;
}

Thermostat.prototype.down = function(){
  if(this.temperature > 10){
    return this.temperature--;
  }
}
