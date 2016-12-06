describe("Thermostat", function(){
  var thermostat;
  
  beforeEach( function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });
});
