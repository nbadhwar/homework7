function gettingJSON(){
    var apikey = "10602446b22c562abbd7f237493e44a7";
    document.getElementById("forecast").style["display"] = "block";
    //Display the forecast
    // Your code here.


    //Set default location if one isn't provided
    let location;
    let country;


    location = document.querySelector("#location").value;

    if (location === "") {
        location = "Ann Arbor";
    }

    tempVar = location.split(",");
    location = tempVar[0];

    if (tempVar.length === 2){
        country = tempVar[1];
        if (country[0] == " "){
            country = country.substring(1);
            // running into issues with spaces in the url around country 
        }
    }


    // Your code here.
    console.log("Location is : " + location);
    console.log("Country is : " + country);


    //set default temperature format if one isn't provided
    let format;
    format = document.getElementById("fahrenheit").value;

    if (document.getElementById("celcius").checked == true){
        format = document.getElementById("celcius").value;
    }

    // Your code here.
    console.log("Format is : " + format);

    //set the query  
    let query;
    // Your code here.  
    let url = "https://api.openweathermap.org/data/2.5/weather?";
    let finalLocation; 

    // city 
    if (isNaN(location)) {
        // was a country provided
        if (country){
            finalLocation = "q=" + location + ',' + country; 
        }
        else {
            finalLocation = "q=" + location; 
        }
        query =  url + finalLocation + "&units=" + format + "&appid=" + apikey;
    }

    // zipcode
    else {
        // was a country provided
        if (country){
            finalLocation = "zip=" + location + ',' + country; 
        }
        else {
            finalLocation = "zip=" + location; 
        }
       
        query =  url + finalLocation + "&units=" + format + "&appid=" + apikey;
        // zipcode
    }
   
    
    console.log("Query is : " + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let desc; 
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        console.log(json);

        loc = json.name;
        temp = json.main["temp"] + " with " + json.weather[0]["description"];
        desc = json.weather[0]["description"];
        tempImg = "http://openweathermap.org/img/wn/" + json.weather[0]["icon"] + ".png";

        document.getElementById("loc").innerHTML = loc;
        document.getElementById("temp").innerHTML = temp; 
        document.getElementById("tempImg").src = tempImg;
        document.getElementById("tempImg").alt = desc;

        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
