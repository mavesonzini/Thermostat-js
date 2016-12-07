describe("Temperature on thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it("increases temperature with UP function", function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21)
  });

  it("decreases temperature with DOWN function", function(){
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it("shouldn't decrease under 10 degrees", function(){
    for(var i = 20; i > 7; i--){
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });
});

describe("Power saving mode on", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("max temperature should be 25 degrees", function(){
    for(var i = 0; i < 7; i++){
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });
});

describe("Power saving mode Off", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("max temperature should be 32 degrees", function(){
    thermostat.powerSavingSwitch();
    for(var i = 0; i < 20; i++){
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });
});

describe("Switch power saving on or off", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it("switches power saving off", function(){
    thermostat.powerSavingSwitch();
    expect(thermostat.powerSaving).toEqual(false);
  });
});

describe("reset temperature", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("resets the temperature to 20 degrees when", function(){
    for(var i = 0; i < 5; i++){
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});
