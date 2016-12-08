function Thermostat(){
  this._temperature = 20;
  this._savingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if(this._savingMode === true){
    if(this._temperature < 25){
      this._temperature ++;
    }
  }else if(this._temperature < 30){
      this._temperature ++;
    }
};

Thermostat.prototype.down = function() {
  if (this._temperature > 10){
  this._temperature --;
}
};

Thermostat.prototype.savingMode = function() {
  this._savingMode = !this._savingMode;
}

Thermostat.prototype.reset = function(){
  this._temperature;
}

Thermostat.prototype.energyUsage = function(){
  if(this._temperature < 18){
    return 'low-usage';
  }
  else if(this._temperature < 25){
    return 'medium-usage';
  }else{
  return 'high-usage';
}
};
