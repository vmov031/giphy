var topics = [];

    $("button").on("click", function() {
    
      var topic = $(this).attr("data-topic");

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=gocibbuNgnNEf4PyefQBE0pwlZ4QgkRL&limit=10";
      $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(queryURL);
          console.log(response);
     
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var topicDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var topicImage = $("<img>");

            topicImage.attr("src", results[i].images.fixed_height_still.url);

            topicDiv.append(p);
            topicDiv.append(topicImage);

            $("#gifs-appear-here").prepend(topicDiv);
          }
        });
      });

    function searchGifs (topic) {

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=gocibbuNgnNEf4PyefQBE0pwlZ4QgkRL&limit=10";
      $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(queryURL);

          console.log(response);

           var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var topicDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var topicImage = $("<img>");
      
            topicImage.attr("src", results[i].images.fixed_height_still.url);
         
            topicDiv.append(p);
            topicDiv.append(topicImage);

            $("#gifs-appear-here").prepend(topicDiv);
}
    });
    }

    function renderButtons(){
      for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.addClass("gif");
      a.attr("data-topic", topics[i]);
      a.text(topics[i]);
      $("#buttons-view").append(a);
    }
  }

    $("#add-topic").on("click", function(event){
      event.preventDefault();
      var inputTopic = $("#topic-input").val().trim();
      searchGifs(inputTopic);
      topics.push(inputTopic);

      renderButtons();

    });

    $(".gif").on("click", function(){
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    });
    
