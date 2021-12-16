document.addEventListener('DOMContentLoaded', function () {
	// инициализация слайдера
	var slider = new SimpleAdaptiveSlider('.slider', {
		autoplay: true,
		interval: 5000,
		swipe: true,
	});
});


$(document).ready(function () {
	var $element = $('.info');
	let counter = 0;
	$(window).scroll(function () {
		var scroll = $(window).scrollTop() + $(window).height();
		//Если скролл до конца елемента
		//var offset = $element.offset().top + $element.height();
		//Если скролл до начала елемента
		var offset = $element.offset().top

		if (scroll > offset && counter == 0) {
			var styles = {
				animationDuration: "3s",
				animationName: "slidein"
			}
			$('.info').css(styles)
			counter = 1;
		}
	});
});


$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 680) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 500);
	});
});



var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
	V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
	linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
		e.preventDefault(); //отменяем стандартное поведение
		var w = window.pageYOffset,  // производим прокрутка прокрутка
			hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
		t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
			start = null;
		requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
		function step(time) {
			if (start === null) start = time;
			var progress = time - start,
				r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
			window.scrollTo(0, r);
			if (r != w + t) {
				requestAnimationFrame(step)
			} else {
				location.hash = hash  // URL с хэшем
			}
		}
	}, false);
}


$(document).ready(function () {
	var context = $("canvas")[0].getContext("2d");
	var values = '39, 61'
	var segments = values.split(",");
	var segmentColorR = 0;
	var segmentColorG = 153;
	var segmentColorB = 153;
	var total = 0;
	//Reset the canvas
	context.restore();
	context.save();
	context.clearRect(0, 0, 500, 250);
	for (i = 0; i < segments.length; i++) {
		total = total + parseFloat(segments[i]);
	}
	var parts = 360 / total;
	var startAngle = 0
	context.translate(100, 100)
	context.rotate(270 * (Math.PI / 180)); //Turn the chart around so the segments start from 12 o'clock
	for (i = 0; i < segments.length; i++) {
		//Draw the segments
		context.fillStyle = "rgb(" + segmentColorR + "," + segmentColorG + "," + segmentColorB + ")";
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, 100, startAngle * (Math.PI / 180), (startAngle + parseFloat(segments[i] * parts)) * (Math.PI / 180), false);
		context.lineTo(0, 0);
		context.closePath();
		context.fill();
		startAngle = startAngle + parseFloat(segments[i] * parts);
		segmentColorR = 156;
		segmentColorG = 156;
		segmentColorB = 156;
	}

	//Turn into a donut!!					
	context.fillStyle = "#e5e5e5";
	context.beginPath();
	context.arc(0, 0, 60, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
});

$(document).ready(function () {
	var context = $("canvas")[1].getContext("2d");
	var values = '40, 60'
	var segments = values.split(",");
	var segmentColorR = 0;
	var segmentColorG = 153;
	var segmentColorB = 153;
	var total = 0;
	//Reset the canvas
	context.restore();
	context.save();
	context.clearRect(0, 0, 500, 250);
	for (i = 0; i < segments.length; i++) {
		total = total + parseFloat(segments[i]);
	}
	var parts = 360 / total;
	var startAngle = 0
	context.translate(100, 100)
	context.rotate(270 * (Math.PI / 180)); //Turn the chart around so the segments start from 12 o'clock
	for (i = 0; i < segments.length; i++) {
		//Draw the segments
		context.fillStyle = "rgb(" + segmentColorR + "," + segmentColorG + "," + segmentColorB + ")";
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, 100, startAngle * (Math.PI / 180), (startAngle + parseFloat(segments[i] * parts)) * (Math.PI / 180), false);
		context.lineTo(0, 0);
		context.closePath();
		context.fill();
		startAngle = startAngle + parseFloat(segments[i] * parts);
		segmentColorR = 156;
		segmentColorG = 156;
		segmentColorB = 156;
	}

	//Turn into a donut!!					
	context.fillStyle = "#e5e5e5";
	context.beginPath();
	context.arc(0, 0, 60, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
});

$(document).ready(function () {
	var context = $("canvas")[2].getContext("2d");
	var values = '63, 37'
	var segments = values.split(",");
	var segmentColorR = 0;
	var segmentColorG = 153;
	var segmentColorB = 153;
	var total = 0;
	//Reset the canvas
	context.restore();
	context.save();
	context.clearRect(0, 0, 500, 250);
	for (i = 0; i < segments.length; i++) {
		total = total + parseFloat(segments[i]);
	}
	var parts = 360 / total;
	var startAngle = 0
	context.translate(100, 100)
	context.rotate(270 * (Math.PI / 180)); //Turn the chart around so the segments start from 12 o'clock
	for (i = 0; i < segments.length; i++) {
		//Draw the segments
		context.fillStyle = "rgb(" + segmentColorR + "," + segmentColorG + "," + segmentColorB + ")";
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, 100, startAngle * (Math.PI / 180), (startAngle + parseFloat(segments[i] * parts)) * (Math.PI / 180), false);
		context.lineTo(0, 0);
		context.closePath();
		context.fill();
		startAngle = startAngle + parseFloat(segments[i] * parts);
		segmentColorR = 156;
		segmentColorG = 156;
		segmentColorB = 156;
	}

	//Turn into a donut!!					
	context.fillStyle = "#e5e5e5";
	context.beginPath();
	context.arc(0, 0, 60, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
});

$(document).ready(function () {
	var context = $("canvas")[3].getContext("2d");
	var values = '52, 48'
	var segments = values.split(",");
	var segmentColorR = 0;
	var segmentColorG = 153;
	var segmentColorB = 153;
	var total = 0;
	//Reset the canvas
	context.restore();
	context.save();
	context.clearRect(0, 0, 500, 250);
	for (i = 0; i < segments.length; i++) {
		total = total + parseFloat(segments[i]);
	}
	var parts = 360 / total;
	var startAngle = 0
	context.translate(100, 100)
	context.rotate(270 * (Math.PI / 180)); //Turn the chart around so the segments start from 12 o'clock
	for (i = 0; i < segments.length; i++) {
		//Draw the segments
		context.fillStyle = "rgb(" + segmentColorR + "," + segmentColorG + "," + segmentColorB + ")";
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, 100, startAngle * (Math.PI / 180), (startAngle + parseFloat(segments[i] * parts)) * (Math.PI / 180), false);
		context.lineTo(0, 0);
		context.closePath();
		context.fill();
		startAngle = startAngle + parseFloat(segments[i] * parts);
		segmentColorR = 156;
		segmentColorG = 156;
		segmentColorB = 156;
	}

	//Turn into a donut!!					
	context.fillStyle = "#e5e5e5";
	context.beginPath();
	context.arc(0, 0, 60, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
});

$(document).ready(function () {
	var context = $("canvas")[4].getContext("2d");
	var values = '37, 63'
	var segments = values.split(",");
	var segmentColorR = 0;
	var segmentColorG = 153;
	var segmentColorB = 153;
	var total = 0;
	//Reset the canvas
	context.restore();
	context.save();
	context.clearRect(0, 0, 500, 250);
	for (i = 0; i < segments.length; i++) {
		total = total + parseFloat(segments[i]);
	}
	var parts = 360 / total;
	var startAngle = 0
	context.translate(100, 100)
	context.rotate(270 * (Math.PI / 180)); //Turn the chart around so the segments start from 12 o'clock
	for (i = 0; i < segments.length; i++) {
		//Draw the segments
		context.fillStyle = "rgb(" + segmentColorR + "," + segmentColorG + "," + segmentColorB + ")";
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, 100, startAngle * (Math.PI / 180), (startAngle + parseFloat(segments[i] * parts)) * (Math.PI / 180), false);
		context.lineTo(0, 0);
		context.closePath();
		context.fill();
		startAngle = startAngle + parseFloat(segments[i] * parts);
		segmentColorR = 156;
		segmentColorG = 156;
		segmentColorB = 156;
	}

	//Turn into a donut!!					
	context.fillStyle = "#e5e5e5";
	context.beginPath();
	context.arc(0, 0, 60, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
});

$(document).ready(function () {
	var context = $("canvas")[5].getContext("2d");
	var values = '21, 71'
	var segments = values.split(",");
	var segmentColorR = 0;
	var segmentColorG = 153;
	var segmentColorB = 153;
	var total = 0;
	//Reset the canvas
	context.restore();
	context.save();
	context.clearRect(0, 0, 500, 250);
	for (i = 0; i < segments.length; i++) {
		total = total + parseFloat(segments[i]);
	}
	var parts = 360 / total;
	var startAngle = 0
	context.translate(100, 100)
	context.rotate(270 * (Math.PI / 180)); //Turn the chart around so the segments start from 12 o'clock
	for (i = 0; i < segments.length; i++) {
		//Draw the segments
		context.fillStyle = "rgb(" + segmentColorR + "," + segmentColorG + "," + segmentColorB + ")";
		context.beginPath();
		context.moveTo(0, 0);
		context.arc(0, 0, 100, startAngle * (Math.PI / 180), (startAngle + parseFloat(segments[i] * parts)) * (Math.PI / 180), false);
		context.lineTo(0, 0);
		context.closePath();
		context.fill();
		startAngle = startAngle + parseFloat(segments[i] * parts);
		segmentColorR = 156;
		segmentColorG = 156;
		segmentColorB = 156;
	}

	//Turn into a donut!!					
	context.fillStyle = "#e5e5e5";
	context.beginPath();
	context.arc(0, 0, 60, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
});




