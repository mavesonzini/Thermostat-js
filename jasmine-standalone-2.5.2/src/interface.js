$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
   $('#temperature').text(thermostat._temperature);

   $('#temperature-up').on('click', function () {
     thermostat.up();
     updateTemperature();
   })

   $('#temperature-down').on('click', function () {
     thermostat.down();
     updateTemperature();
   })

   $('#temperature-reset').on('click', function () {
     thermostat.reset();
     updateTemperature();
   })

   $('#powersaving-on').on('click', function () {
     thermostat.savingModeOn();
     $('#power-saving-status').text(thermostat.savingModeOn());
   })

   $('#powersaving-off').on('click', function () {
     thermostat.savingModeOff();
     $('#power-saving-status').text(thermostat.savingModeOff());
   })

function displayWeather(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=87a353ff6ee69eb1fc5ad229ffebcf78';
  var units = '&units=metric';

  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
}

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

function updateTemperature(){
  $('#temperature').text(thermostat._temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
  $('#body-color').attr('class', thermostat.energyUsage() + '-body');
}



})
