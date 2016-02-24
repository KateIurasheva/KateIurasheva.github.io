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




    function human(){
      this.name = 'name';
      this.age = 0;
      this.sex = 'sex';
      this.height = 0;
      this.weight = 0;
    }
    function worker(){
      this.company = 'google';
      this.salary = 10000;
      this.work = function(){
        return 'is working';
      };
    }
    function student(){
      this.university = 'NTUU KPI';
      this.scholarship = 100;
      this.watchTV = function(){
        return 'is watching tv';
      };
    }
 
    var newHuman = new human();
    worker.prototype = newHuman;
    student.prototype = newHuman;
 

    var newStudent = new student();
    var newWorker = new worker();
  
      newWorker.name = 'Dima';
      newWorker.age = 27;
      newWorker.sex = "man";
      newWorker.height = 180;
      newWorker.weight = 70;
   
      newStudent.name = "Kate";
      newStudent.age  = 20;
      newStudent.sex  = "woman";
      newStudent.height = 170;
      newStudent.weight = 50;


      console.log('Worker:',newWorker.name,
             "\n  age:", newWorker.age,
             "\n  sex:", newWorker.sex,
             "\n  height:", newWorker.height,
             "\n  weight:", newWorker.weight     
      );
      console.log(newWorker.name,newWorker.work()); 
      
      
      console.log('\nStudent:',newStudent.name,
             "\n  age:", newStudent.age,
             "\n  sex:", newStudent.sex,
             "\n  height:", newStudent.height,
             "\n  weight:", newStudent.weight);
      console.log(newStudent.name,newStudent.watchTV()); 


