'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('should have an up function', function() {
    expect('up' in thermostat).toEqual(true);
  });

  it('should increase the temperature', function() {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('should have a down function', function() {
    expect('down' in thermostat).toEqual(true);
  });

  it('should decrease the temperature', function() {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('should have a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 12; i ++) {
      thermostat.down();
    }
    expect(thermostat.temperature()).toEqual(10);
  });

  it('should have maximun of 25 degrees if saving mode is on', function(){
      this._savingMode = true
    for(var i = 0; i < 6; i++){
      thermostat.up();
    }
    expect(thermostat.temperature()).toEqual(25);
  });
});
