////////////////////////////////////// Burger drop down menu //////////////////////////////////////
let button_menu = document.querySelector('.burger');
let content_menu = document.querySelector('.navegacion');
let example_menu = 0;

button_menu.addEventListener('click', function() {
    if (example_menu == 0) {
        content_menu.style.display = 'flex';
        example_menu = 1;
        nave.style.backgroundColor = "rgb(44,25,12)";
    } else {
        content_menu.style.display = 'none';
        example_menu = 0;
        nave.style.backgroundColor = "rgba(44,25,12,0)";
    }

    content_menu.addEventListener("click", function() {
        content_menu.style.display = 'none';
        example_menu = 0;
    })
});

//Barra de navegacion estatica segun el alto del header
let nave = document.querySelector(".barra");
let header = document.querySelector(".site-header");

window.onscroll = function() {
    let height = window.getComputedStyle(header).getPropertyValue('height').replace("px", "");
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > height) {
        nave.style.backgroundColor = "rgb(44,25,12)";
        nave.style.transition = "all 0.8s";
        nave.style.height = "25px";
        content_menu.style.backgroundColor = "rgb(44,25,12)";
        content_menu.style.transition = "all 0.8s";
    } else {
        nave.style.backgroundColor = "rgba(44,25,12,0.5)";
        nave.style.transition = "all 0.8s";
        content_menu.style.backgroundColor = "rgba(255,255,255,0)";
        content_menu.style.transition = "all 0.8s";
    }
}

// Activar y desactivar modales
let producto = document.querySelectorAll(".producto-imagen");

for (let i = 0; i < producto.length; i++) {
    let modalContent = document.querySelectorAll(".modal_content");
    //Variables para aplicar codigo promocional
    const codigoPromocional = "prueba";
    var valorDescuento = 0.1;
    var precioAnterior = document.querySelectorAll(".precio_anterior");
    var contenedorCodigo = document.querySelectorAll("#code");
    var precioNuevo = document.querySelectorAll(".precio span");

    producto[i].addEventListener('click', function() {
        let modal = document.getElementById("modal");
        let internModal = document.getElementById("intModal");

        modalContent[i].classList.add("active");
        modal.style.display = 'block';

        let cerrar = modalContent[i].querySelector(".close");

        cerrar.addEventListener('click', function() {
            modal.style.display = 'none';
            modalContent[i].classList.remove("active");
        });

        window.addEventListener('click', function(e) {
            if (e.target == internModal) {
                modal.style.display = 'none';
                modalContent[i].classList.remove("active");
            }
        });

        // Activar descuento con codigo promocional
        contenedorCodigo[i].addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                if (codigoPromocional == contenedorCodigo[i].value) {
                    NumeroPrecioNuevo = Number(precioNuevo[i].innerText.replace(".", "")); // Pasar el string del precio a numero
                    valorPrecioNuevo = Math.round(NumeroPrecioNuevo - (NumeroPrecioNuevo * valorDescuento));
                    precioNuevo[i].replaceWith(String(valorPrecioNuevo).slice(0, -3) + "." + String(valorPrecioNuevo).slice(-3)); //Agregar el punto en la posición deseada
                    precioAnterior[i].innerHTML = (-valorDescuento * 100) + "%  " + "$" + precioNuevo[i].innerText;
                    precioAnterior[i].style.color = "#b1dca9";
                } else {
                    precioAnterior[i].innerHTML = "Código no valido";
                    precioAnterior[i].style.color = "red";
                }
            }
        })
    });
};

// Inicializar el Slider
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// Chat de whatsapp estatico
window.callbellSettings = { token: "LvXvmWAi8JvwuYGwv3sJvBUD" };

(function() {
    var w = window;
    var ic = w.callbell;
    if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', callbellSettings);
    } else {
        var d = document;
        var i = function() {
            i.c(arguments)
        };
        i.q = [];
        i.c = function(args) {
            i.q.push(args)
        };
        w.Callbell = i;
        var l = function() {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://dash.callbell.eu/include/' + window.callbellSettings.token + '.js';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    }
})()