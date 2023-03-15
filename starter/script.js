let apiURL = "https://api.openweathermap.org/data/2.5/forecast?";
let units = "&units=metric"
let key = "&appid=8df441dea99913b147bc9d9c47561bdb";
let icon = "http://openweathermap.org/img/w/"
let queryURL;

// function renderStorage(storedValue) {
//   if (storedValue !== null) {
//     let citySearch = localStorage.getItem("lastCitySearch");
//       searchWeather(citySearch);
//   }
// }

function searchWeather(event) {
  event.preventDefault();
  $(".dashboard").empty();

  let city

    if($("#search-input").val() !== ""){
      city = $("#search-input").val(),
      console.log(city)}
    else(city =  $(event.currentTarget).text())

    queryURL = apiURL + "q=" + city + "&limit=1" + units + key;

    fetch(queryURL)
    .then(response => response.json())
    .then(function (response) {
      console.log(response)

      //if city name does not exist
      if ((response.cod != 200)) {
        alert("Please enter a valid city!")}

      //set the time for today
      setInterval(function () {
        let today = moment();
        let todayDate = today.format("DD/MM/YYYY")
        document.querySelector("#todayDate").textContent = todayDate
      })

      //display the weather info of searched city on the main dashboard.
      let cityName = response.city.name
      $("#cityName").append(cityName + ": ")
      localStorage.setItem("lastCitySearch", cityName)

      let temp = response.list[0].main.temp //C = temp – 273.15
      let temperature = Math.round(temp.toFixed(2))
      console.log(temperature + "°C")
      $("#temp").append("Temp: " + temperature + "°C")
      console.log(response.list[0].main.humidity + "%")
      $("#humidity").append("Humidity: " + response.list[0].main.humidity + "%")
      console.log(response.list[0].wind.speed + "KPH")
      $("#wind").append("Wind: " + response.list[0].wind.speed + "KPH")
      let iconEl = `<img src="https://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@2x.png" alt="weather-icon">`
      $("#icon").append(iconEl)
        })
     
    $("#forecast").empty()   
    fetch(queryURL)
    .then(data => data.json())
    .then(function (data) {
      console.log(data)

      let weatherArray =[]

      //fetch 5-day temp, humidity, wind and icon, and store them in an array
      for (let i = 0; i < data.list.length; i++) {
        let testTime = data.list[i].dt_txt
         let testHour = testTime.split(" ").pop()
         if(testHour === "12:00:00"){
          weatherArray.push(data.list[i])
         }
        }
        for (let i = 0; i < weatherArray.length; i++) {
          let temp = weatherArray[i].main.temp
          let temperature = Math.round(temp.toFixed(2))

          col = $("<div>").addClass("col-2")
          let card = $("<div>").addClass("card")
          let cardBody = $("<div>").addClass("card-body")
          let cardHeader = $("<div>").addClass("card-header")
          let date = moment.unix(weatherArray[i].dt).format("ddd")
          let tempEl = $("<p>").addClass("card-text").text("Temp: " + temperature + " °C")
          let windEl = $("<p>").addClass("card-text").text("Wind: " + weatherArray[i].wind.speed + " KPH")
          let humidityEl = $("<p>").addClass("card-text").text("Humidity: " + weatherArray[i].main.humidity + " %")
          let icon = $("<img>").attr("src", `https://openweathermap.org/img/wn/${weatherArray[i].weather[0].icon}@2x.png`)
          let cardTitle = $("<h5>").addClass("card-title").text(date)

          $("#forecast").append(col.append(card.append(cardHeader.append(cardTitle.append(icon)), cardBody.append(tempEl, windEl, humidityEl))))
        }
      })
    }
    $(".search-btn").on("click", searchWeather)
    $(".cityNames").on("click", searchWeather) 