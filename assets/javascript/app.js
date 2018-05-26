$(document).ready(function() {

    $("#submit").on("click",function(){
        //variable declaration
        var q = "&q=";
        var begin_date;
        var end_date;
       //creating elements for each input in html
       //adding values of each input
        q += $("#search-term-id").val();
        var numberOfParameters = parseInt($("#form-group-id").val());
        begin_date += $("#start-year-id").val();
        end_date += $("#end-year-id").val();

        //adds necessary paramters to queryURL
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        //adding necessary elements
        queryURL += '?' + "api-key=fd222fa16dcb41dfb347b5261ca9a032" + q;
        
        //if data is undefined 
        if(begin_date!==undefined){
            queryURL += "&begin_date"+ begin_date;
        }
        if(end_date!==undefined){
            queryURL += "&end_date"+ end_date;
        }

        $.ajax({
            url: queryURL,
            method: 'GET',
          }).done(function(result) {
            console.log(queryURL);

              console.log(result);
            for(var i =0;i<numberOfParameters;i++){
                var articleName = result.response.docs[i].snippet;
                var author= result.response.docs[i].byline.original;
                var link = result.response.docs[i].web_url;
                

                $("#dump").prepend(
                    "<div class='card'>"
                   +"<div class='card-body'>"
                   +"<h5 class='card-title'>"+articleName +"</h5>"
                   +"<h6 class='card-subtitle mb-2 text-muted'>"+author+"</h6>"
                   +"<a target='_blank' href='"+link+"' class='card-text'>Link to article</a>"
                   +"</div></div>"
                );//end of prepend

            }//end of loop 
            
        //in case something goes wrong 
          }).fail(function(err) {
            throw err;
          });
    });//end of submit button
    
    //clear button to clear input ("not working")
    $("#clear").on("click",function(){
       $("#dump").html(""); 
       console.log("clear");
       document.getElementById("search-term-id").value = "";
       document.getElementById("form-group-id").value = "";
       document.getElementById("start-year-id").value = "";
       document.getElementById("end-year-id").value = "";
       
    });
}); //end of app.js