//Ovaj kod omogućava korisniku da klikom na meni dugme, meni se prikazuje ili sakriva.

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
/*Ovaj kod se koristi za dodavanje funkcionalnosti na dugme za prijavu (login-btn) na web stranici. 
Kada korisnik klikne na dugme, JavaScript kod će se izvršiti i prebaciti klasu "active" na elementu sa ID-em "login-form-container"
*/
document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

/*ovaj kod omogućava da se promijeni stil elementa sa klasom "header" na web stranici, kada korisnik skrola. 
Ukoliko korisnik skrola,klasa se dodaje i element postaje vidljiv, 
a ukoliko korisnik ne skrola klasa se uklanja i element više nije vidljiv.
*/
window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

/*Naredne linije koda kreiraju novi objekat "swiper" koji koristi Swiper biblioteku za kreiranje klizača (slidera) sa slikama. 
Klizač se prikazuje u elementu sa klasom i ima opcije kao što su: prikazivanje kursora za hvatanje, kada miš prelazi preko slika,  
centriranje trenutne slike u klizaču, razmak između slika petlja klizača, navigacija sa stranicama 
i različit broj prikazanih slika u zavisnosti od širine ekrana
*/
var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".renting-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
 
});

var button = document.getElementById("btn1");
  button.addEventListener("click", function(){
    alert();
  });

  var button = document.getElementById("btn2");
  button.addEventListener("click", function(){
    alert();
  });

  var button = document.getElementById("btn2");
  button.addEventListener("click", function(){
    alert();
  });

  var button = document.getElementById("btn4");
  button.addEventListener("click", function(){
    alert();
  });

  var button = document.getElementById("btn5");
  button.addEventListener("click", function(){
    alert();
  });

  var button = document.getElementById("btn6");
  button.addEventListener("click", function(){
    alert();
  });