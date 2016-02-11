'use strict'

$(function () {

  var info = [
    {
      question : "1. Какой формат передачи данных наиболее распостранен?",
      answer   : [
          "TXT",
          "JSON",
          "XML"
      ],
      rightAnswer: {
        1:true
      }
    },
    {
      question : "2. Какой объект для работы с XML файлами втроен во все современные браузеры?",
      answer   : [
          "Такого объекта нет. Необходимо пользоваться внешними библиотеками",
          "XMLHttpRequers",
          "XMLParser"
      ],
      rightAnswer: {
        0:true
      }
    },
    {
      question : "3. Какие данные можно сохранять в локальное хранилище?",
      answer   : [
          "Любые данные",
          "Только текст+числа",
          "Только текст"
      ],
      rightAnswer: {
        2:true,
      },

    }
  
  ];

  localStorage.setItem('data', JSON.stringify(info));

  var questions = JSON.parse(localStorage.getItem('data')); 
  
  var htmlQuestion = $('#test').html();

  var content = tmpl(htmlQuestion, {
    data: questions
  });

  $('.questions').append(content);


function checkAnswer(e) {
    
  e.preventDefault();
    
  var error = false;
    
    
  var user = [];
    
  for (var i = 0; i < questions.length; i++) {
  
    var inputs = $('.box' + i +' input:checkbox');
            
    var userAnswered = {};

    for (var k = 0; k < inputs.length; k++) { 

      var checked = inputs[k].checked;
    
      var right = questions[i].rightAnswer[k] == true;
        
        if (checked !== right) {
          userAnswered[k]=false;
          error = true;  
        } else {
            userAnswered[k]=true;
          };
    };
    user.push(userAnswered);
  };
        

  function modalWindow () {
    var $modal = $('<div class="modalWindow animated bounceInDown"><h2 class="text-center">' + (error? 'Вы провалили тест!' : 'Вы сдали тест!' )+'</h2></div>');
    var $overlay = $('<div class="modalWindow-overlay"></div>');
        
    $('body').append($modal);
    $('body').append($overlay);
      
    $('.modalWindow').append(content);
    var $buttonOk = $('<button class="btn btn-md btn-success" style="float:right">OK!</button>');
      
    $('.modalWindow').append($buttonOk);

    for (var i = 0; i < questions.length; i++) {
      var inputs = $('.box' + i +' input:checkbox');
      var inputsShowResult =  $('.modalWindow .box' + i +' input:checkbox');
          
      for (var k = 0; k < questions[i].answer.length; k++) {
            
        var checked = inputs[k].checked;
          
          if ((checked == true)) {
            if ((user[i][k]) == true) {
              $(inputsShowResult[k]).attr({
                "disabled":true,
                "checked" : true  
              }).parent().append("<span> Правильный ответ!</span>").find("span").css({"color" : "green"});
            } else {
              $(inputsShowResult[k]).attr({
                "disabled":true,
                "checked" : true  
              }).parent().append("<span> Неправильный ответ!</span>").find("span").css({"color" : "red"});  
            }; 
          } else {
              $(inputsShowResult[k]).attr({
                "disabled":true,
              });
            };
      };
    };

      $overlay.one('click', hideModal);
      $buttonOk.one('click', hideModal);

      function hideModal() {
     
      $modal.remove();
      $overlay.remove();
    };

  };

  modalWindow();

};

$('.check').on('click', checkAnswer);

});
