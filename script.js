document.addEventListener("DOMContentLoaded",function(){
    const submenuToggle = document.querySelector(".submenu-toggle");
    const submenu = document.querySelector(".submenu");

    submenuToggle.addEventListener("click",function (event) {
        event.preventDefault;
        const esExpandido = submenuToggle.getAttribute("aria-expanded") === "true";
        submenuToggle.setAttribute("aria-expanded",!esExpandido);
        submenu.style.display = esExpandido ? "none" : "block";
        
    });


    document.addEventListener("click",function(event){
        if(!submenu.contains(event.target) && !submenuToggle.contains(event.target)){
            submenu.style.display = "none";
            submenu.setAttribute("aria-expanded","false");

        }
    });
});

/*
Atributos empleados y su definicion: 

aria-haspopup: Indica a los lectores de pantalla que este elemento contiene un submenu.En esta caso sera en el elemento contacto con la clase barraLi.

aria-expanded: Indica si el elemento submenu esta abierto o cerrado.Cuando el menu esta cerrado esta en false y cuando el usuario hacle click está abierto.

aria-label: Mejora la accesibilidad para las personas que utilizan lectores de pantalla.



*/