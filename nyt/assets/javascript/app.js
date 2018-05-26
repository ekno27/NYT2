$(document).ready(function() {

    $("#submit").on("click",function(){
    
       //creating elements for each input in html
       var searchTerm = $("#search-term-id").val();
       console.log(searchTerm);
       var recordsToRetrieve = $("#form-group-id").val();
       var startYear = $("#start-year-id").val();
       var endYear = $("#end-year-id").val();
       
     
       
      //obtained after using ajax to refine results  
       var articleName = "dumb name";
       var author = "Clark";
       var postDate = "Yesterday";
       var link = "google.com";
    
       //adding cards with the included information
       $("#dump").append(
           "<div class='card' style='width: 18rem;'>"
          +"<div class='card-body'>"
          +"<h5 class='card-title'>"+articleName +"</h5>"
          +"<h6 class='card-subtitle mb-2 text-muted'>"+author+"</h6>"
          +"<p class='card-text'>" +link+"</p>"
          +"</div></div>"
       )
    
    });
    
    //clear button to clear input ("not working")
    $("#clear").on("click",function(){
       console.log("clear");
       document.getElementById("search-term-id").innerHTML = "";
       document.getElementById("form-group-id").innerHTML = "";
       document.getElementById("start-year-id").innerHTML = "";
       document.getElementById("end-year-id").innerHTML = "";
       
    });
    
    
    
    
    }); //end of app.js