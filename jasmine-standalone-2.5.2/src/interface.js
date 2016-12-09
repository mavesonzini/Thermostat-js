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

   $('#current-city').change(function(){
     var city = $('#current-city').val();
     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=87a353ff6ee69eb1fc5ad229ffebcf78&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
     })
   })


function updateTemperature(){
  $('#temperature').text(thermostat._temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

})
