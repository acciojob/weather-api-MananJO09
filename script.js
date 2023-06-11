  $(document).ready(function() {
      $('#weatherButton').click(function() {
        // Make a GET request to OpenWeatherMap API
        $.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=', function(data) {
          // Extract the weather description from the API response
          let weatherDescription = data.weather[0].description;
          // Update the weatherData div with the weather information
          $('#weatherData').text('Current weather in London: ' + weatherDescription);
        });
      });
    });