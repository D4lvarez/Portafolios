window.addEventListener("resize", cambiarTexto);

function cambiarTexto() {    
    var width = document.documentElement.clientWidth;
    
    if (width < 550){
      document.getElementsById("lenguajes").innerHTML = "<img src='img/icons/python.svg' alt='python.svg' style='height: 35px; width: 35px;'>";
    }/* else if(width < 400){
      document.getElementsByClassName("acordeon").innerHTML = "AAA";
    }else{
      document.getElementsByClassName("acordeon").innerHTML = "Asociación Autónoma del Automovilismo";
    } */
}