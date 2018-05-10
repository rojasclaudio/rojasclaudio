$("#enviar").hover(function(){
	$(this).css("background", "red",);
	$(this).css("color", "white",);
},
function(){
	$(this).css("background", "#e6e6ff")
	$(this).css("color", "#666666",);
});
$("#pedir").hover(function(){
	$(this).css("background", "red",);
	$(this).css("color", "white",);
},
function(){
	$(this).css("background", "#e6e6ff")
	$(this).css("color", "#666666",);
});
$("#enviar").click(function(){
	var nbr = $("#nombre").val();
	var apl = $("#apellido").val();
	var dr = $("#direccion").val();
	var tl = $("#telefono").val();
	window.alert("Registrado correctamente "+nbr+" "+apl+" domiciliado en: "+dr+" con celular: "+tl);
});
$("#pedir").click(function(){
	var ped = $("#pedido").val();
	window.alert("Tu pedido de: "+ped+" llegara lo mas rapido posible a tu casa");
});
$("#id").click(function(){
	$(this).html("Desarrolladores: Claudio Rojas y Marcos Florentin");
});
$("#pedido").ready(function(){
    $("#pedido").focusin(function(){
        $(this).css("background-color", "#e6e600");
    });
    $("#pedido").focusout(function(){
        $(this).css("background-color", "#FFFFFF");
    });
});

