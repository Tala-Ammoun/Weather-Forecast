let apiURL = "https://api.openweathermap.org/data/2.5/forecast?";
let key = "&appid=8df441dea99913b147bc9d9c47561bdb";
let icon = "http://openweathermap.org/img/w/"
let queryURL

$(".search-btn").on("click", function () {
  $("#cityName").empty()
  $("#temp").empty();
  $("#wind").empty();
  $("#humidity").empty();
  $("#icon").empty();

  searchInput = $("#search-input").val();
  queryURL = apiURL + "q=" + searchInput + "&limit=1" + key;
  console.log(queryURL)

  fetch(queryURL)
    .then(response => response.json())
    .then(function (response) {
      console.log(response)
      console.log(response.city.name)
      $("#cityName").append(response.city.name + ": ")

      setInterval(function () {
        let today = moment();
        document.querySelector("#todayDate").textContent = today.format("DD/MM/YYYY");
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
          let icon = document.createElement("img");
          icon.src = result.url;
          $("#icon").append(icon)
          //$(".icon").append(response.list[0].weather[0].icon)

        })
    })
})

Object.keys($(".cityNames")).forEach((element) => {
  if (element < 6) {
    $($(".cityNames")[element]).attr("data-index", element)
  }
  let cityIndex = $($(".cityNames")[element]).attr("data-index")
  $(".cityNames").eq(cityIndex).on("click", function (event) {
    event.preventDefault();
    let cityText = $(".cityNames").eq(cityIndex).text()
    cityURL = apiURL + "q=" + cityText + "&limit=1" + key;
    $("#cityName").empty()
    $("#temp").empty();
    $("#wind").empty();
    $("#humidity").empty();
    $("#icon").empty();
    
  fetch(cityURL)
  .then(response => response.json())
  .then(function (response) {
  $("#cityName").append(response.city.name + ": ")
      setInterval(function () {
      let today = moment();
      document.querySelector("#todayDate").textContent = today.format("DD/MM/YYYY");
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
        let icon = document.createElement("img");
        icon.src = result.url;
        $("#icon").append(icon)
})
})
})
})

//$(".icon").append(response.list[0].weather[0].icon)
            // let responseArr = response.list
            //for (let i = 0; i < responseArr.length; i++) {
            //}

// setInterval(function () {
//   let today = moment();
//   document.querySelector("#todayDate").textContent = today.format("DD/MM/YYYY");
//   })


//date for next 5 days
// setInterval(function () {
//   let today = moment();
//   for (let i = 0; i < 5; i++) {
//   document.querySelector(".card-title").textContent[i] = today.format("DD/MM/YYYY" + 1);}
//   })
