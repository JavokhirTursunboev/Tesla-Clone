const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

document.querySelector('aside button.close').onclick = (e)=>{
    closeMenu()
}

document.querySelector('.backdrop').addEventListener("click", (e)=>{
    closeMenu();
})


let models = document.getElementById('bmodels')
let model3 = document.getElementById("bmodel3");
let modelx = document.getElementById("bmodelx");
let modely = document.getElementById("bmodely");
let roof = document.getElementById("broof");
let panel = document.getElementById("bpanel");


let s = document.getElementById('models')
let m3 = document.getElementById('model3')
let x = document.getElementById('modelx')
let y = document.getElementById('modely')
let ro = document.getElementById('roof')
let pan = document.getElementById('panel')

models.addEventListener('click', function(){
  window.scrollTo(0, s.offsetTop)
})
model3.addEventListener('click', function(){
  window.scrollTo(0, m3.offsetTop)
})
modelx.addEventListener('click', function(){
  window.scrollTo(0, x.offsetTop)
})
modely.addEventListener('click', function(){
  window.scrollTo(0, y.offsetTop)
})
roof.addEventListener('click', function(){
  window.scrollTo(0, ro.offsetTop)
})
panel.addEventListener('click', function(){
  window.scrollTo(0, pan.offsetTop)
})