let apiURL = "https://api.openweathermap.org/data/2.5/forecast?";
let key = "&appid=8df441dea99913b147bc9d9c47561bdb";
let icon = "http://openweathermap.org/img/w/"
let queryURL

// function storedData(){
// localStorage.getItem(cityName)
// $("#cityName").append(cityName + ": ")
// }
// storedData()


$(".search-btn").on("click", function () {
  $(".dayForecast").empty()
  // $("#cityName").empty()
  // $("#temp").empty();
  // $("#wind").empty();
  // $("#humidity").empty();
  // $("#icon").empty();
  // $(".humidity").empty();
  // $(".wind").empty();
  // $(".temp").empty();
  // $(".icon").empty();

  searchInput = $("#search-input").val();
  queryURL = apiURL + "q=" + searchInput + "&limit=1" + key;
  console.log(queryURL)

  fetch(queryURL)
    .then(response => response.json())
    .then(function (response) {
      console.log(response)
      localStorage.setItem(response, response)

      console.log(response.city.name)
      let cityName = response.city.name
      $("#cityName").append(cityName + ": ")
      localStorage.setItem('cityName', cityName)

      setInterval(function () {
        let today = moment();
        let todayDate = today.format("DD/MM/YYYY")
        document.querySelector("#todayDate").textContent = todayDate
      })
      let temp = response.list[0].main.temp - 273.15 //C = temp – 273.15
      let temperature = Math.round(temp.toFixed(2))
      console.log(temperature + "°C")
      $("#temp").append("Temp: " + temperature + "°C")
      console.log(response.list[0].main.humidity + "%")
      $("#wind").append("Wind: " + response.list[0].main.humidity + "%")
      console.log(response.list[0].wind.speed + "KPH")
      $("#humidity").append("Humidity: " + response.list[0].wind.speed + "KPH")
      let iconURL = icon + response.list[0].weather[0].icon + ".png"
      fetch(iconURL)
        .then(function (result) {
          let iconEl = document.createElement("img");
          iconEl.src = result.url;
          $("#icon").append(iconEl)})

      // for (let i = 3; i < list.length; i = i + 3) {
      //   let temp = response.list[i].main.temp - 273.15 //C = temp – 273.15
      //   let temperature = Math.round(temp.toFixed(2))
      //   console.log(temperature + "°C")
      //   $("p:nth-child(1)").append("Temp: " + temperature + "°C")

      //   console.log(response.list[i].main.humidity + "%")
      //   $("p:nth-child(2)").append("Wind: " + response.list[i].main.humidity + "%")

      //   console.log(response.list[i].wind.speed + "KPH")
      //   $("p:nth-child(3)").append("Humidity: " + response.list[i].wind.speed + "KPH")

      //   let iconURL = icon + response.list[i].weather[i].icon + ".png"
      //   fetch(iconURL)
      //     .then(function (result) {
      //       let icon = document.createElement("img");
      //       icon.src = result.url;
      //       $(".icon").append(icon)
      //     })
      // }