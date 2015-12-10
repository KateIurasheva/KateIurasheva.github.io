var app = {

  createElement: function(parametr) {
    var element = document.createElement(parametr.tagName);

    if (parametr.inputType){
      element.setAttribute('type', parametr.inputType);
    }

    if (parametr.className){
      element.className = parametr.className;
    }

    if (parametr.content){
      element.innerHTML = parametr.content;
    }

    if (parametr.parentElement){
      parametr.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 0; i < questionsAmount; i++) {

      this.createElement({
        tagName: 'h3',
        content: 'Вопрос №' + (i + 1),
        parentElement: form
      });

      for (var j = 0; j < answersAmount; j++) {

        var label = this.createElement({
          tagName: 'label',
          content: 'Вариант ответа №' + (j + 1),
          parentElement: form
        });

        var checkbox = this.createElement({
          tagName: 'input',
          inputType: 'checkbox',
        });

        label.insertAdjacentElement('afterBegin', checkbox);
      }
    };
  }
}

var body = document.querySelector('body');

app.createElement({
  tagName: 'h2',
  content: 'Тест по программированию',
  className: 'col-md-6 col-md-offset-3',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  className: 'col-md-6 col-md-offset-2',
  parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'button',
  inputType: 'button',
  content: 'Проверить мои результаты',
  className: 'btn btn-primary btn-lg',
  parentElement: form
});
