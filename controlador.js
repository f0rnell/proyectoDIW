$(function () {

    $('#cabecera').load("partials/cabecera.html");

    $('#pie').load("partials/pie.html");

    setTimeout(botones,1000);

    function botones(){
        $('#cuerpo').load("paginas/paginaPrincipal.html");

        $('#principal').click(()=>{
            $('#cuerpo').load("paginas/paginaPrincipal.html")       
        });
    
        $('#menus').click(()=>{
            $('#cuerpo').load("paginas/paginaMenus.html")
        });
    
        $('#reservas').click(()=>{
            $('#cuerpo').load("paginas/paginaReservas.html")
        });
    }
    
});