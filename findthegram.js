var main = function(){

  // if ((window.location.href.indexOf("access_token=") > -1) === false)  {
  //   window.location.replace("https://instagram.com/oauth/authorize/?client_id=8952f9654af54fa8a472d2221a9b40fc&redirect_uri=https://students.cs.byu.edu/~hasler93/find-the-gram/&response_type=token");

  // }

  // Flow of Program
  // Get coordinates from map - where appears in div.
  // run locations/search on coordinates
  // pull 5 locations - location id's in an array.

  // run {locationid}/media/search

  // Make this an onrightclick
  $('#map').mousedown(function(e) {
    if(e.button == 2)
    {
      var urlToParse = window.location.toString();
    var indexOfAccessToken = urlToParse.indexOf("access_token");
    var access_token = urlToParse.substring(indexOfAccessToken, urlToParse.length);
    var latitude = document.getElementById("lat").value; // get the coordinates
    var longitude = document.getElementById("lng").value;
    var locationid;

    // Url to perform the latitude and longitude search
    var myurl1 = "https://api.instagram.com/v1/locations/search?" + access_token + "&lat=" + latitude + "&long=" + longitude;

    // array to store the 5 ids
    var locationIds = [];


    $.ajax({
      url : myurl1,
      dataType : "jsonp",
      success : function(parsed_json) {
        for(var i = 0; i < 10; i++)
        {
          // Stores top 5 IDs into array of location ids
          locationIds = parsed_json['data'][i]['id'];
          console.log();
        }
      }
    }); //end ajax call

    var randomValue = Math.floor(Math.random()*10);
    console.log("The Random Value is: " + randomValue);
    // Second url with randomized location ID - 
    var myurl2 = "https://api.instagram.com/v1/locations/" + locationIds[randomValue] + "/media/recent?" + access_token;
    var everything = "<div>";
    $.ajax({
      url : myurl2, // Use Second Url with random location value
      dataType : "jsonp",
      success : function(parsed_json) {
        for(var i = 0; i < 25; i++)
        {
          var imageUrl = parsed_json[data][i][images][standard_resolution][url];
          var location = parsed_json[data][i][location][name];
          var username = parsed_json[data][i][user][username];
          console.log(imageUrl);
          console.log(location);
          console.log(username);
          everything += "<div class=\"col-sm-6 col-md-3 \">";
          everything += "<div class=\"thumbnail featured-product\">";
          everything += "<img src=\"" + logoUrl + "\">";
          everything += "<h3>"+ location + "</h3>" ;
          everything += "</div>";
          everything += "</div>";
        }
        everything += "</div>";
        console.log(everything);
      }
    }); //end ajax call

    }
    
    //e.preventDefault();
  });//end submit function
}; //end main function

$(document).ready(main);