$(function() {

        var html = $('#my-page').html()

        var answers = 
        	{
        		myname: 'Юрашева Катерина Александровна',
        		image: 'img/DSC_0110.jpg',
        		job: 'Энергетик по специальности, сейчас не работаю',
        		frontend: 'Хочу учить фронтенд, потому что:',
        		item1: 'Дает возможность удаленной работы',
        		item2: 'Хочу зарабатывать больше денег',
        		item3: 'Это творческая работа',
        		mobile: 'Мой контактный телефон',
        		number: '+393271494829',
        		vk: 'Мой профиль вконтакте',
        		vk_url: 'https://vk.com/id11164468',
        		link: 'vk.com',
        		feedback: 'Мой фидбек:',
        		text: 'Могу провести энергоаудит'
        	};

		var content = tmpl(html, answers);
		$('body').append(content);

    });