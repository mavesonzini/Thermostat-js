describe("Thermostat", function(){
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("should increase the temperature", function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("should decrease the temperature", function (){
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it("should not decrease more than 10 degrees", function(){
    for (var i = 1; i <= 20; i++){
      thermostat.down();
    }
      expect(thermostat.getTemperature()).toEqual(10)
  });
});
