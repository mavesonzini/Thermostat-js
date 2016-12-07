function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function(){
  if(this.powerSaving === true){
    if(this.getTemperature() < 25){
      return this.temperature++;
    }
  } else {
    if (this.getTemperature() < 32){
      return this.temperature++;
    }
  }
}

Thermostat.prototype.down = function(){
  if(this.getTemperature() > 10){
    return this.temperature--;
  }
}

Thermostat.prototype.powerSavingSwitch = function(){
  this.powerSaving = !this.powerSaving;
}

Thermostat.prototype.energyUsageStatus = function(){
  if(this.getTemperature() < 18){
    return("low-usage");
  }
  else if(this.getTemperature() < 25){
    return("medium-usage");
  }
  else if(this.getTemperature() < 32){
    return("high-usage");
  }
}
