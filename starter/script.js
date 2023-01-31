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
  $("#cityName").empty()
  $("#temp").empty();
  $("#wind").empty();
  $("#humidity").empty();
  $("#icon").empty();
  $(".humidity").empty();
  $(".wind").empty();
  $(".temp").empty();
  $(".icon").empty();

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
          $("#icon").append(iconEl)

          //5-Day Forecast without a for loop
          //day 1:
          setInterval(function () {
            let today = moment().add(1, 'days');
            let todayDate = today.format("DD/MM/YYYY")
            document.querySelectorAll("h5.card-title")[0].textContent = todayDate
          })
          let temp1 = response.list[3].main.temp - 273.15 //C = temp – 273.15
          let temperature1 = Math.round(temp1.toFixed(2))
          console.log(temperature1 + "°C")
          $(".temp").eq(0).append("Temp: " + temperature1 + "°C")

          console.log(response.list[3].main.humidity + "%")
          $(".wind").eq(0).append("Wind: " + response.list[3].main.humidity + "%")

          console.log(response.list[3].wind.speed + "KPH")
          $(".humidity").eq(0).append("Humidity: " +response.list[3].wind.speed + "KPH")

          let iconURL1 = icon + response.list[3].weather[0].icon + ".png"
          fetch(iconURL1)
            .then(function (result) {
              let iconEl = document.createElement("img");
              iconEl.src = result.url;
              $(".icon").eq(0).append(iconEl)
            })

          //day 2: 
          setInterval(function () {
            let today = moment().add(2, 'days');
            let todayDate = today.format("DD/MM/YYYY")
            document.querySelectorAll("h5.card-title")[1].textContent = todayDate
          })
          let temp2 = response.list[6].main.temp - 273.15 //C = temp – 273.15
          let temperature2 = Math.round(temp2.toFixed(2))
          console.log(temperature2 + "°C")
          $(".temp").eq(1).append("Temp: " + temperature2 + "°C")
          console.log(response.list[6].main.humidity + "%")
          $(".wind").eq(1).append("Wind: " + response.list[6].main.humidity + "%")
          console.log(response.list[6].wind.speed + "KPH")
          $(".humidity").eq(1).append("Humidity: " +response.list[6].wind.speed + "KPH")
          let iconURL2 = icon + response.list[6].weather[0].icon + ".png"
          fetch(iconURL2)
            .then(function (result) {
              let iconEl = document.createElement("img");
              iconEl.src = result.url;
              $(".icon").eq(1).append(iconEl)

              //day 3:
              setInterval(function () {
                let today = moment().add(3, 'days');
                let todayDate = today.format("DD/MM/YYYY")
                document.querySelectorAll("h5.card-title")[2].textContent = todayDate
              })
              let temp3 = response.list[9].main.temp - 273.15 //C = temp – 273.15
              let temperature3 = Math.round(temp3.toFixed(2))
              console.log(temperature3 + "°C")
              $(".temp").eq(2).append("Temp: " + temperature3 + "°C")
              console.log(response.list[9].main.humidity + "%")
              $(".wind").eq(2).append("Wind: " + response.list[9].main.humidity + "%")
              console.log(response.list[9].wind.speed + "KPH")
              $(".humidity").eq(2).append("Humidity: " +response.list[9].wind.speed + "KPH")
              let iconURL3 = icon + response.list[9].weather[0].icon + ".png"
              fetch(iconURL3)
                .then(function (result) {
                  let iconEl = document.createElement("img");
                  iconEl.src = result.url;
                  $(".icon").eq(2).append(iconEl)

                  //day 4:
                  setInterval(function () {
                    let today = moment().add(4, 'days');
                    let todayDate = today.format("DD/MM/YYYY")
                    document.querySelectorAll("h5.card-title")[3].textContent = todayDate
                  })
                  let temp4 = response.list[12].main.temp - 273.15 //C = temp – 273.15
                  let temperature4 = Math.round(temp4.toFixed(2))
                  console.log(temperature4 + "°C")
                  $(".temp").eq(3).append("Temp: " + temperature4 + "°C")
                  console.log(response.list[12].main.humidity + "%")
                  $(".wind").eq(3).append("Wind: " + response.list[12].main.humidity + "%")
                  console.log(response.list[12].wind.speed + "KPH")
                  $(".humidity").eq(3).append("Humidity: " +response.list[12].wind.speed + "KPH")
                  let iconURL4 = icon + response.list[12].weather[0].icon + ".png"
                  fetch(iconURL4)
                    .then(function (result) {
                      let iconEl = document.createElement("img");
                      iconEl.src = result.url;
                      $(".icon").eq(3).append(iconEl)


                      //day 5:
                      setInterval(function () {
                        let today = moment().add(5, 'days');
                        let todayDate = today.format("DD/MM/YYYY")
                        document.querySelectorAll("h5.card-title")[4].textContent = todayDate
                      })
                      let temp5 = response.list[15].main.temp - 273.15 //C = temp – 273.15
                      let temperature5 = Math.round(temp5.toFixed(2))
                      console.log(temperature5 + "°C")
                      $(".temp").eq(4).append("Temp: " + temperature4 + "°C")
                      console.log(response.list[15].main.humidity + "%")
                      $(".wind").eq(4).append("Wind: " + response.list[15].main.humidity + "%")
                      console.log(response.list[15].wind.speed + "KPH")
                      $(".humidity").eq(4).append("Humidity: " +response.list[12].wind.speed + "KPH")
                      let iconURL5 = icon + response.list[15].weather[0].icon + ".png"
                      fetch(iconURL5)
                        .then(function (result) {
                          let iconEl = document.createElement("img");
                          iconEl.src = result.url;
                          $(".icon").eq(4).append(iconEl)
                        })
                    })
                })
            })
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
    $(".humidity").empty();
    $(".wind").empty();
    $(".temp").empty();
    $(".icon").empty();

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

            //5-Day Forecast without a for loop
            //day 1:
            setInterval(function () {
              let today = moment().add(1, 'days');
              let todayDate = today.format("DD/MM/YYYY")
              document.querySelectorAll("h5.card-title")[0].textContent = todayDate
            })
            let temp1 = response.list[3].main.temp - 273.15 //C = temp – 273.15
            let temperature1 = Math.round(temp1.toFixed(2))
            console.log(temperature1 + "°C")
            $(".temp").eq(0).append("Temp: " + temperature1 + "°C")

            console.log(response.list[3].main.humidity + "%")
            $(".wind").eq(0).append("Wind: " + response.list[3].main.humidity + "%")

            console.log(response.list[3].wind.speed + "KPH")
            $(".humidity").eq(0).append("Humidity: " +response.list[3].wind.speed + "KPH")

            let iconURL1 = icon + response.list[3].weather[0].icon + ".png"
            fetch(iconURL1)
              .then(function (result) {
                let iconEl = document.createElement("img");
                iconEl.src = result.url;
                $(".icon").eq(0).append(iconEl)
              })

            //day 2: 
            setInterval(function () {
              let today = moment().add(2, 'days');
              let todayDate = today.format("DD/MM/YYYY")
              document.querySelectorAll("h5.card-title")[1].textContent = todayDate
            })
            let temp2 = response.list[6].main.temp - 273.15 //C = temp – 273.15
            let temperature2 = Math.round(temp2.toFixed(2))
            console.log(temperature2 + "°C")
            $(".temp").eq(1).append("Temp: " + temperature2 + "°C")
            console.log(response.list[6].main.humidity + "%")
            $(".wind").eq(1).append("Wind: " + response.list[6].main.humidity + "%")
            console.log(response.list[6].wind.speed + "KPH")
            $(".humidity").eq(1).append("Humidity: " +response.list[6].wind.speed + "KPH")
            let iconURL2 = icon + response.list[6].weather[0].icon + ".png"
            fetch(iconURL2)
              .then(function (result) {
                let iconEl = document.createElement("img");
                iconEl.src = result.url;
                $(".icon").eq(1).append(iconEl)

                //day 3:
                setInterval(function () {
                  let today = moment().add(3, 'days');
                  let todayDate = today.format("DD/MM/YYYY")
                  document.querySelectorAll("h5.card-title")[2].textContent = todayDate
                })
                let temp3 = response.list[9].main.temp - 273.15 //C = temp – 273.15
                let temperature3 = Math.round(temp3.toFixed(2))
                console.log(temperature3 + "°C")
                $(".temp").eq(2).append("Temp: " + temperature3 + "°C")
                console.log(response.list[9].main.humidity + "%")
                $(".wind").eq(2).append("Wind: " + response.list[9].main.humidity + "%")
                console.log(response.list[9].wind.speed + "KPH")
                $(".humidity").eq(2).append("Humidity: " +response.list[9].wind.speed + "KPH")
                let iconURL3 = icon + response.list[9].weather[0].icon + ".png"
                fetch(iconURL3)
                  .then(function (result) {
                    let iconEl = document.createElement("img");
                    iconEl.src = result.url;
                    $(".icon").eq(2).append(iconEl)

                    //day 4:
                    setInterval(function () {
                      let today = moment().add(4, 'days');
                      let todayDate = today.format("DD/MM/YYYY")
                      document.querySelectorAll("h5.card-title")[3].textContent = todayDate
                    })
                    let temp4 = response.list[12].main.temp - 273.15 //C = temp – 273.15
                    let temperature4 = Math.round(temp4.toFixed(2))
                    console.log(temperature4 + "°C")
                    $(".temp").eq(3).append("Temp: " + temperature4 + "°C")
                    console.log(response.list[12].main.humidity + "%")
                    $(".wind").eq(3).append("Wind: " + response.list[12].main.humidity + "%")
                    console.log(response.list[12].wind.speed + "KPH")
                    $(".humidity").eq(3).append("Humidity: " +response.list[12].wind.speed + "KPH")
                    let iconURL4 = icon + response.list[12].weather[0].icon + ".png"
                    fetch(iconURL4)
                      .then(function (result) {
                        let iconEl = document.createElement("img");
                        iconEl.src = result.url;
                        $(".icon").eq(3).append(iconEl)


                        //day 5:
                        setInterval(function () {
                          let today = moment().add(5, 'days');
                          let todayDate = today.format("DD/MM/YYYY")
                          document.querySelectorAll("h5.card-title")[4].textContent = todayDate
                        })
                        let temp5 = response.list[15].main.temp - 273.15 //C = temp – 273.15
                        let temperature5 = Math.round(temp5.toFixed(2))
                        console.log(temperature5 + "°C")
                        $(".temp").eq(4).append("Temp: " + temperature4 + "°C")
                        console.log(response.list[15].main.humidity + "%")
                        $(".wind").eq(4).append("Wind: " + response.list[15].main.humidity + "%")
                        console.log(response.list[15].wind.speed + "KPH")
                        $(".humidity").eq(4).append("Humidity: " + response.list[12].wind.speed + "KPH")
                        let iconURL5 = icon + response.list[15].weather[0].icon + ".png"
                        fetch(iconURL5)
                          .then(function (result) {
                            let iconEl = document.createElement("img");
                            iconEl.src = result.url;
                            $(".icon").eq(4).append(iconEl)
                          })
                      })
                  })
              })
          })
      })
  })
})

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