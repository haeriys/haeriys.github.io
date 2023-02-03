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
// function myFunction1() {
//   var copyText1 = document.getElementById("myInput1");
//   copyText1.select();
//   copyText1.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText1.value);
  
//   var tooltip1 = document.getElementById("myTooltip1");
//   tooltip1.innerHTML = "복사되었습니다";
// }
// function myFunction2() {
//   var copyText2 = document.getElementById("myInput2");
//   copyText2.select();
//   copyText2.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText2.value);
  
//   var tooltip2 = document.getElementById("myTooltip2");
//   tooltip2.innerHTML = "복사되었습니다";
// }

// function outFunc1() {
//   var tooltip1 = document.getElementById("myTooltip1");
//   tooltip1.innerHTML = "클립보드에 복사하기";
// }
// function outFunc2() {
//   var tooltip2 = document.getElementById("myTooltip2");
//   tooltip2.innerHTML = "클립보드에 복사하기";
// }