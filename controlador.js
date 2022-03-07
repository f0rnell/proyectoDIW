$(function () {
    // TEST cache
    var n = Math.floor(Math.random() * 11);
    var k = Math.floor(Math.random() * 1000000);
    var uniqid = String.fromCharCode(n) + k;

    $('#cabecera').load("partials/cabecera.html?"+ uniqid);

    $('#pie').load("partials/pie.html?"+ uniqid);

    setTimeout(botones,1000);

    setTimeout(popover,1000);
    // var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
    //     container: 'body'
    // })
    
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
            setTimeout(popover,1000);
        });
        $('#pedidos').click(()=>{
            $('#cuerpo').load("paginas/paginaPedidos.html?"+ uniqid)
            setTimeout(popover,1000);
        });
    }
    
    function popover(){
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }
});