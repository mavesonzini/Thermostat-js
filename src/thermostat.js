function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function(){
  if(this.powerSaving === true){
    if(this.temperature < 25){
      return this.temperature++;
    }
  } else {
    if (this.temperature < 32){
      return this.temperature++;
    }
  }

}

Thermostat.prototype.down = function(){
  if(this.temperature > 10){
    return this.temperature--;
  }
}

Thermostat.prototype.powerSavingSwitch = function(){
  this.powerSaving = !this.powerSaving;
}

Thermostat.prototype.reset = function(){
  return this.temperature = 20;
}
