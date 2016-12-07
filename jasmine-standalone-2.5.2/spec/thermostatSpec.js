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
});
