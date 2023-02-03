// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// 계좌번호 복사
// div 취득
const myDiv1 = document.getElementById("myDiv1");
const myDiv2 = document.getElementById("myDiv2");

// button 클릭 이벤트
document.getElementById("myButton1").onclick = () => {
	// div의 내용(textContent)을 복사한다.
	window.navigator.clipboard.writeText(myDiv1.textContent).then(() => {
	// 복사가 완료되면 호출된다.
	alert("복사완료");
	});
};
// button 클릭 이벤트
document.getElementById("myButton2").onclick = () => {
	// div의 내용(textContent)을 복사한다.
	window.navigator.clipboard.writeText(myDiv2.textContent).then(() => {
	// 복사가 완료되면 호출된다.
	alert("복사완료");
	});
};