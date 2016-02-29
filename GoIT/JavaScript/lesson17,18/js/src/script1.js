'use strict';

$(function () {
    
    $('.pagination').hide();

      $('#form').submit(function(e){
        
          e.preventDefault();
      
          function googleSearch (i) {
            $('.results').html('');
            var query = encodeURIComponent($('#request').val());   
          if (query != '')  { 
            var firstFiveURLs = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=5&start='+ (i*5*2) +'&q='+ query + '&callback=GoogleCallbackFirstPart&context=?';
            var secondFiveURLs = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=5&start='+ ((i*5*2)+5) +'&q='+ query + '&callback=GoogleCallbackSecondPart&context=?';
             
            $('.img').css({"width":"200px","float":"left","margin-top":"40px","margin-bottom":"40px"});
            $("input[type='text']").css({"float":"left","margin-top":"65px"});
            $("input[type='submit']").css({"float":"left","margin-top":"65px","margin-left":"15px"});
            
            $.ajax({
                url: firstFiveURLs,
                dataType : "jsonp"
            });

            $.ajax({
                url: secondFiveURLs,
                dataType : "jsonp"
            });

            setTimeout(function() {
              $('.pagination').show();
            },1000);
          } else{
            $('.pagination').hide();

            $('.img').css({"width":"600px","float":"none","margin-top":"60px","margin-bottom":"0px"});
            $("input[type='text']").css({"float":"none","margin-top":"30px"});
            $("input[type='submit']").css({"float":"none","margin-top":"20px","margin-left":"4px"});

          };
          };
          
      $('.pagination li a').off('click');
        
      $('.pagination li a').on('click', function() {
        var k = $(this).parent().index();
          googleSearch(k);

      });

        googleSearch(0);

      });
  }   
  
);

 
function GoogleCallbackFirstPart (func, data) {

  var htmlResult = $('#resultsGenerate').html();
    var content = tmpl(htmlResult, data);
  $('.results').append(content);
    
};

function GoogleCallbackSecondPart (func, data) {

  setTimeout(function() {
    var htmlResult = $('#resultsGenerate').html();
      var content = tmpl(htmlResult, data);
    $('.results').append(content);

  },100);
    
};




    

