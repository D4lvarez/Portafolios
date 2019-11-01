window.addEventListener('load', function() {
    /**FUNCION DEL LA HAMBURGUESA */
    function AnimarBoton() {
        var element = document.getElementById('hamburger-6');
        element.classList.toggle('is-active');

    };

    /**LA BARRA INFERIO DEL NAVEGADOR */
    var button = document.getElementById("imagen"),

        animation = document.getElementById("animation"),
        animationToGreen = document.getElementById("animation-to-green"),
        animationToStar = document.getElementById("animation-to-star"),
        animationToYellow = document.getElementById("animation-to-yellow");

    button.addEventListener('click', function() {
        //console.log('le has dado el botton')
        if (button.classList.contains("saved")) {
            button.classList.remove("saved");
            animationToStar.beginElement();
            animationToYellow.beginElement();

        } else {
            button.classList.add("saved");
            animation.beginElement();
            animationToGreen.beginElement();

        }

    }, false);
    /**CUANDO HACER SCROLL */
    window.addEventListener('scroll', function() {
        var tamañoy = Math.floor(window.scrollY);

        if (tamañoy > 0) {

            animation.beginElement();
        } else {

            animationToStar.beginElement();
        }

    });

    var botonHamburguesa = document.querySelector('.hamburger');


    botonHamburguesa.addEventListener('click', function() {
        AnimarBoton();
    });


});