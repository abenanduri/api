$(document).ready(function() {

    var gifs = ["cats", "dogs", "cows", "bats", "sloths"] 

    function displayGifInfo () {

        var name = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        name + "&api_key=dc6zaTOxFJmzC&limit=10";

        console.log(queryURL); 

        $.ajax({
            url: queryURL, 
            method: "GET"
        }).done(function(response) {
            console.log(response); 

            var gifDiv = $("<div class = gif>")

            var results = response.data




        })




    }



}); 