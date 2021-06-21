//magnit title
$(document).ready(function() {
    var circleWrapper = $(".circle-wrapper");
    var textCircle = $(".circle-text");

function showAllObjects (object) {
		object.fadeIn(900);
}

function moving (object, speed) {
	circleWrapper.on('mousemove', function(event) {
		var X = Math.floor((event.pageX)/speed-20) + "px";
    	var Y = Math.floor((event.pageY)/speed) + "px";	
    	object.css('transform', 'translate('+X+' , '+Y+')');
	});
}
function moveAll (object) {
	moving($(object[0]),12);
	moving($(object[1]),22);
	moving($(object[2]),8);
	moving($(object[3]),10);
	moving($(object[4]),20);	
}

showAllObjects(textCircle);
moveAll(textCircle);

});


//text Circle
new CircleType(document.querySelector('.text-circle-scroll'));

//scroll tranform
let textActiveScroll =  document.querySelector('.text-circle-scroll');
window.addEventListener('scroll', function() {
  let rotateTiming = jQuery(window).scrollTop() / 250 % Math.PI;
  textActiveScroll.style.transform = 'rotate(' + rotateTiming + 'rad)';
});

//link language
let menuLanguage = document.querySelector('.logo-link');
let menuWrap = document.querySelector('.language-wrapper');
// let menuLink = document.querySelectorAll('.language');

menuLanguage.addEventListener('click',activeLan);

function activeLan(){
	menuWrap.classList.toggle('language-active')
};

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.logo-link'))// если этот элемент или его родительские элементы не окно навигации и не кнопка
		menuWrap.classList.remove('language-active') // то закрываем окно навигации, удаляя активный класс
    });
















//original
// const elNodes = document.querySelectorAll('.square');

// elNodes.forEach(n => {
//     n.addEventListener('click', () => {
//         elNodes.forEach(el => {
//             el.classList.toggle('green');
//         });
//     });
// });