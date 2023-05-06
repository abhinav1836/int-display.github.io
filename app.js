const btn=document.getElementById("btn-click");
const backBtn=document.getElementById("back-click");
const mainSection=document.getElementById("main");
const backSection=document.getElementById("back");

btn.addEventListener("click",() => {
    console.log("Clicked");
    mainSection.style.display="none";
    backSection.style.display="flex";
})

backBtn.addEventListener("click",() =>{
    mainSection.style.display="flex";
    backSection.style.display="none";
})

const burger= document.getElementById("burger");
const navul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  if (navul.style.display === 'flex') {
    navul.style.display = 'none';
    nav.style.height = "8vh";
  } else {
    navul.style.display = 'flex';
    nav.style.height = "30vh";
  }
});