$(function () {
    // TEST cache
    var n = Math.floor(Math.random() * 11);
    var k = Math.floor(Math.random() * 1000000);
    var uniqid = String.fromCharCode(n) + k;

    $('#cabecera').load("partials/cabecera.html?"+ uniqid);

    $('#pie').load("partials/pie.html?"+ uniqid);

    setTimeout(botones,1000);

    function botones(){
        $('#cuerpo').load("paginas/paginaPrincipal.html?"+ uniqid);

        $('#principal').click(()=>{
            $('#cuerpo').load("paginas/paginaPrincipal.html?"+ uniqid)       
        });
    
        $('#menus').click(()=>{
            $('#cuerpo').load("paginas/paginaMenus.html?"+ uniqid)
        });
    
        $('#reservas').click(()=>{
            $('#cuerpo').load("paginas/paginaReservas.html?"+ uniqid)
        });

        $('#alergenos').click(()=>{
            $('#cuerpo').load("paginas/paginaAlergenos.html?"+ uniqid)
        });
    }
    
});