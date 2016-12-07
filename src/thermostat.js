function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function(){
  if(this.powerSaving = true){
    if(this.temperature < 25){
      return this.temperature++;
    }
  }

}

Thermostat.prototype.down = function(){
  if(this.temperature > 10){
    return this.temperature--;
  }
}
