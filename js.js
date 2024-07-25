/* Это объявление переменной, мы нашли кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Котик в шоке')
})

var pupil = document.getElementsByClassName("pupil");
document.onmousemove = function () {
 var x = (event.clientX * 8) / window.innerWidth + "%";
 var y = (event.clientY * 8) / window.innerHeight + "%";
 for (var i = 0; i < 2; i++) {
 pupil[i].style.left = x;
 pupil[i].style.top = y;
 pupil[i].style.transform = "translate(" + x + "," + y + ")";
 }
};