const menu_slide = document.getElementById("activo")
const contenedor = document.getElementById("contenedor")
const botones = document.getElementById("botones")
const qr = document.getElementById("qr")
const qr2 = document.getElementById("qr2")
const image_slide = document.getElementById("image_slide")
const texto_slide = document.querySelector(".instalacion")

const circulo1 = document.querySelector(".c1")
const circulo2 = document.querySelector(".c2")
const circulo3 = document.querySelector(".c3")
const circulo4 = document.querySelector(".c4")



//function to do big and small the slide menu
menu_slide.onclick = function () {
  if (contenedor.className == "contenedor active2") {
    contenedor.className = "contenedor"
    botones.className = "botones"
    qr2.className = "qr2"
  }
  menu_slide.classList.toggle("active")
  contenedor.classList.toggle("active")
  botones.classList.toggle("active")
}

//function to show code qr in slide menu
qr.onclick = function () {
  qr2.classList.toggle("active2")
  qr.classList.toggle("active2")
  contenedor.classList.toggle("active2")
  botones.classList.toggle("active2")
}

//function to show images in service area
function imgURL(item) {
  let cadena = "url('../images/" + item + ".jpg')";
  image_slide.style.backgroundImage = cadena;
  texto_slide.classList.toggle("active")
  console.log(item)

  if(item==1){
    circulo1.src="../images/1.jpg"
    circulo2.src="../images/2.jpg"
    circulo3.src="../images/3.jpg"
    circulo4.src="../images/4.jpg"
  }

  if(item==2){
    circulo1.src="../images/cristal-templado/puertas/1.jpg"
    circulo2.src="../images/cristal-templado/puertas/2.jpg"
    circulo3.src="../images/cristal-templado/puertas/3.jpg"
    circulo4.src="../images/cristal-templado/puertas/4.jpg"
  }

  if(item==3){
    circulo1.src="../images/cristal-templado/ventanas/1.jpg"
    circulo2.src="../images/cristal-templado/ventanas/2.jpg"
    circulo3.src="../images/cristal-templado/ventanas/3.jpg"
    circulo4.src="../images/cristal-templado/ventanas/4.jpg"
  }

  if(item==4){
    circulo1.src="../images/cristal-templado/fachadas/1.jpeg"
    circulo2.src="../images/cristal-templado/fachadas/2.jpeg"
    circulo3.src="../images/cristal-templado/fachadas/3.jpeg"
    circulo4.src="../images/cristal-templado/fachadas/4.jpeg"
  }

  if(item==5){
    circulo1.src="../images/cristal-templado/mamparas/1.jpg"
    circulo2.src="../images/cristal-templado/mamparas/2.jpg"
    circulo3.src="../images/cristal-templado/mamparas/3.jpg"
    circulo4.src="../images/cristal-templado/mamparas/4.jpg"
  }

  if(item==6){
    circulo1.src="../images/cristal-templado/oficinas/1.jpeg"
    circulo2.src="../images/cristal-templado/oficinas/2.jpeg"
    circulo3.src="../images/cristal-templado/oficinas/3.jpeg"
    circulo4.src="../images/cristal-templado/oficinas/4.jpeg"
  }

  if(item==7){
    circulo1.src="../images/cristal-templado/repisas/1.jpg"
    circulo2.src="../images/cristal-templado/repisas/2.jpg"
    circulo3.src="../images/cristal-templado/repisas/3.jpg"
    circulo4.src="../images/cristal-templado/repisas/4.jpg"
  }
}


const menu_toogle_header = document.querySelector(".menutoogle")
const ionicon_header = document.getElementById("menu_toogle")
const menu_nav = document.querySelector(".menu")

menu_toogle_header.onclick = function () {
  menu_toogle_header.classList.toggle("active")
  ionicon_header.classList.toggle("active")
  menu_nav.classList.toggle("active")
}





