$(document).ready(function() {
    // codigo para animateScroll
    $('#btnHome').click(function() {
        $('#Home').animatescroll();
    });
    $('#btnAbout').click(function() {
        $('#About').animatescroll();
    });
    $('#btnProjects').click(function() {
        $('#Projects').animatescroll();
    });
    $('#btnContacto').click(function() {
        $('#Contacto').animatescroll();
    });


    // ocultar menu desplegable
    $('.nav-link').on('click ', function() {
        $('.navbar-collapse').collapse('hide');
    });

    //codigo para carousel
    $('.carousel').carousel({
        //interval: 5000 // 1000ms = 1s
    });

    var $button = $.backToTop({

        // background color
        backgroundColor: '#022B3A',

        // text color
        color: '#FFFFFF',

        // container element
        container: this._body,

        // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
        effect: 'spin',

        // enable the back to top button
        enabled: true,

        // width/height of the back to top button
        height: 70,
        width: 70,

        // icon
        icon: 'fa fa-chevron-up',

        // margins
        marginX: 20,
        marginY: 20,

        // bottom/top left/right
        position: 'bottom right',

        // trigger position
        pxToTrigger: 600,

        // scroll animation
        theme: 'default',

        // z-index
        zIndex: 999,

    });

});
