$( document ).ready(function() {
  var thermostat = new Thermostat();
   $('#temperature').text(thermostat._temperature);

   $('#temperature-up').on('click', function () {
     thermostat.up();
     $('#temperature').text(thermostat._temperature);
   })

   $('#temperature-down').on('click', function () {
     thermostat.down();
     $('#temperature').text(thermostat._temperature);
   })

   $('#temperature-reset').on('click', function () {
     thermostat.reset();
     $('#temperature').text(thermostat._temperature);
   })

   $('#powersaving-on').on('click', function () {
     thermostat.savingModeOn();
     $('#power-saving-status').text(thermostat.savingModeOn());
   })

   $('#powersaving-off').on('click', function () {
     thermostat.savingModeOff();
     $('#power-saving-status').text(thermostat.savingModeOff());
   })



})
