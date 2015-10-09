  var locationJson;
var main = function(){

  if ((window.location.href.indexOf("access_token=") > -1) === false)  {
    //window.location.replace("https://instagram.com/oauth/authorize/?client_id=8952f9654af54fa8a472d2221a9b40fc&redirect_uri=https://students.cs.byu.edu/~hasler93/find-the-gram&response_type=token");

  }

  // Flow of Program
  // Get coordinates from map - where appears in div.
  // run locations/search on coordinates
  // pull 5 locations - location id's in an array.

  // run {locationid}/media/search

  // Make this an onrightclick
  $('#map').mouseup(function(e) {
    if(e.button == 2)
    {
      var urlToParse = window.location.toString();
    var indexOfAccessToken = urlToParse.indexOf("access_token");
    var access_token = urlToParse.substring(indexOfAccessToken, urlToParse.length);
    var latitude = document.getElementById("lat").innerHTML; // get the coordinates
    var longitude = document.getElementById("lng").innerHTML;
    console.log(latitude);
    console.log(longitude);
    var locationid;

    // Url to perform the latitude and longitude search
    var myurl1 = "https://api.instagram.com/v1/locations/search?" + access_token + "&lat=" + latitude + "&lng=" + longitude;
    console.log(myurl1);
    // array to store the 5 ids
    var locationIds = [];


    $.ajax({
      url : myurl1,
      dataType : "jsonp",
      success : function(parsed_json) {
        locationJson = parsed_json;
        console.log(parsed_json);
        for(var i = 0; i < 10; i++)
        {
        //   // Stores top 5 IDs into array of location ids
        locationIds[i] = parsed_json['data'][i]['id'];
        //console.log(locationid);
        }


    var randomValue = Math.floor(Math.random()*10);
    console.log("The Random Value is: " + randomValue);
    // Second url with randomized location ID - 
    
    //var everything = "<div>";
    for(var j in locationIds)
    {
      var everything = "<div>";
    var myurl2 = "https://api.instagram.com/v1/locations/" + locationIds[j] + "/media/recent?" + access_token;
    $.ajax({
      url : myurl2, // Use Second Url with random location value
      dataType : "jsonp",
      success : function(second_json) {
        console.log(second_json);
        var i = 0;
        while(second_json['data'][i] !== undefined)
        {
          var imageUrl = second_json['data'][i]['images']['standard_resolution']['url'];
          var location = second_json['data'][i]['location']['name'];
          var username = second_json['data'][i]['user']['username'];
          //console.log(imageUrl);
          console.log(location);
          //console.log(username);
          everything += "<div class=\"col-sm-6 col-md-3 \">";
          everything += "<div class=\"thumbnail featured-product\">";
          everything += "<img src=\"" + imageUrl + "\">";
          everything += "<h3>"+ location + "</h3>" ;
          everything += "<h4>Username: " + username + "</h4>" ;
          everything += "</div>";
          everything += "</div>";
          i++;
        }
        everything += "</div>";
        console.log(everything);
        $('#currentWeather').html(everything);
      }
    });
     //end ajax call
    }
      
      }
    }); //end ajax call

    

    }
    
    //e.preventDefault();
  });//end submit function
}; //end main function

$(document).ready(main);