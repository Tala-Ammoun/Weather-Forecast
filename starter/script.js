Object.keys($(".cityNames")).forEach((element) => {
  if (element < 6) {
  $($(".cityNames")[element]).attr("data-index", element)}
  let cityIndex = $($(".cityNames")[element]).attr("data-index")
$(".cityNames").eq(cityIndex).on("click", function(event) {
  cityText = $(".cityNames").eq(cityIndex).text()
  console.log(cityText)
  $("#cityName").text(cityText + ": ")
})
})

setInterval(function () {
  let today = moment();
  document.querySelector("#todayDate").textContent = today.format("DD/MM/YYYY");
  })



// setInterval(function () {
//   let today = moment();
//   for (let i = 0; i < 5; i++) {
//   document.querySelector(".card-title").textContent[i] = today.format("DD/MM/YYYY" + 1);}
//   })

function buildQueryURL() {
  let queryURL = "https://api.openweathermap.org/data/2.5/forecast?"; 
  let queryParams = { "api-key": "8df441dea99913b147bc9d9c47561bdb" }; 

  console.log(WeatherData);

  queryParams.q = $("#search-input") 
    .val() 
    .trim(); 

  let temperature = $("#temp")
    .text()
    .trim();

  let wind = $("#wind") 
    .text()
    .trim();
  
  let humidity = $("#humidity") 
    .text()
    .trim();

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

function updatePage(NYTData) {
  // Get from the form the number of results to display
  // API doesn't have a "limit" parameter, so we have to do this ourselves
  var numArticles = $("#article-count").val();

  // Log the NYTData to console, where it will show up as an object
  

  // Loop through and build elements for the defined number of articles
  for (var i = 0; i < numArticles; i++) {
    // Get specific article info for current index
    var article = NYTData.response.docs[i];

    // Increase the articleCount (track article # - starting at 1)
    var articleCount = i + 1;

    // Create the  list group to contain the articles and add the article content for each
    var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#article-section").append($articleList);

    // If the article has a headline, log and append to $articleList
    var headline = article.headline; 
    var $articleListItem = $("<li class='list-group-item articleHeadline'>"); //create li item with class

    if (headline && headline.main) {
      console.log(headline.main);
      $articleListItem.append(
        "<span class='label label-primary'>" +
          articleCount +
          "</span>" +
          "<h2> " +
          headline.main +
          "</h2>"
      );
    }

    // If the article has a byline, log and append to $articleList
    var byline = article.byline;

    if (byline && byline.original) {
      console.log(byline.original);
      $articleListItem.append("<h3>" + byline.original + "</h3>");
    }

    // Log section, and append to document if exists
    var section = article.section_name;
    console.log(article.section_name);
    if (section) {
      $articleListItem.append("<h5>Section: " + section + "</h5>");
    }

    // Log published date, and append to document if exists
    var pubDate = article.pub_date;
    console.log(article.pub_date);
    if (pubDate) {
      $articleListItem.append("<h5>" + article.pub_date + "</h5>");
    }

    // Append and log url
    $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
    console.log(article.web_url);

    // Append the article
    $articleList.append($articleListItem);
  }
}

// Function to empty out the articles
function clear() {
  $("#article-section").empty();
}

// CLICK HANDLERS
// ==========================================================

// .on("click") function associated with the Search Button
$(".search-btn").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // Empty the region associated with the articles
  clear();

  // Build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);
