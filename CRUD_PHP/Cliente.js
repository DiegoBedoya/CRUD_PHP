let url = "BackendCliente.php";

$(document).ready(function () {
    mostrarClientes(1, 1, 5);
    $("#btn_actualizar").click(function () {
        actualizarCliente();
    });
});



 // --FUNCIONES--

//MOSTRAR DATA TABLA USUARIOS
function mostrarClientes(ind, inicio, nreoreg) {
	let nuevoInicio = (inicio -1)* nreoreg
	inicio = parseInt(inicio);

	$.ajax({
		url: url,
		type : "POST",
		dataType : "json",
		data: ({
			ind: '1',
			nuevoInicio: nuevoInicio,
			nreoreg: nreoreg
		}),

	}).done(function (data){
		$("#Id_tabla tbody").empty();
		$("#paginacion").empty();

		let htmlTags = '';
		data.rta2.forEach(function (item) {
		htmlTags += '	<tr>'
		htmlTags += '		<td>'+item.id_cliente+'</td>'
		htmlTags += '		<td>'+item.nombre+'</td>'
		htmlTags += '		<td>'+item.apellido+'</td>'
		htmlTags += '		<td>'+item.telefono+'</td>'
		htmlTags += '    <td>'
		htmlTags += '	     <a class="btn btn-small btn-danger" onclick="EliminarDatos('+item.id_cliente+')" id="btn_eliminar">Eliminar</a>'
        htmlTags += '        <a class="btn btn-small btn-success" onclick="AbrirMOdal(' + item.id_cliente + ')" id="btn_editar">Editar</a>';
		htmlTags += '	</td>'
		htmlTags += '	</tr>'
		});
		$("#Id_tabla tbody").append(htmlTags);


		let paginador = "";

    paginador += '<ul class="pagination justify-content-end">';

    paginador += '<li style="margin-left: 0px;margin-right: 0px;"><span class="label label pagina">' + data.rta + ' Registros</span></li>';

    if (inicio > 1) {
        ``
        paginador += '<li class="notDisable" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)" onclick="mostrarClientes(\'2\', 1, ' + nroreg + ', \'\', \'\', \'\', \'\', \'\', \'\')">&laquo;</a></li>';
        paginador += '<li class="notDisable" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)" onclick="mostrarClientes(\'2\', ' + (inicio - 1) + ', ' + nroreg + ', \'\', \'\', \'\', \'\', \'\', \'\')">&lsaquo;</a></li>';

    } else {
        paginador += '<li class="disabled" style="margin-left: 0px;margin-right: 0px;" ><a class="pagina" href="javascript:void(0)">&laquo;</a></li>';
        paginador += '<li class="disabled" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)">&lsaquo;</a></li>';
    }
    var limit1 = inicio - nreoreg;
    var limit2 = inicio + nreoreg;

    if (inicio <= parseInt(nreoreg)) {
        limit1 = 1;
    }
    if ((inicio + nreoreg) >= Math.ceil(data.rta / parseInt(nreoreg))) {
        limit2 = Math.ceil(data.rta / parseInt(nreoreg));
    }
    for (let i = limit1; i <= limit2; i++) {
        if (i === inicio) {
            paginador += '<li class="active" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)">' + i + '</a></li>';
        } else {
            paginador += '<li style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)" onclick="mostrarClientes(\'2\', ' + i + ' , ' + nroreg + ' , \'\', \'\', \'\', \'\', \'\', \'\')">' + i + '</a></li>';
        }

    }
    if (inicio < Math.ceil(data.rta / parseInt(nreoreg))) {
        paginador += '<li class="notDisable" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)" onclick="mostrarClientes(' + "2" + ',' + (inicio + 1) + ',' + nroreg + ',\' \',\'\',\'\',\'\',\'\',\'\')">&rsaquo;</a></li>';
        paginador += '<li class="notDisable" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)" onclick="mostrarClientes(' + "2" + ',' + Math.ceil(data.rta / nroreg) + ',' + nroreg + ',\' \',\'\',\'\',\'\',\'\',\'\')">&raquo;</a></li>';
    } else {
        paginador += '<li class="disabled" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)">&rsaquo;</a></li>';
        paginador += '<li class="disabled" style="margin-left: 0px;margin-right: 0px;"><a class="pagina" href="javascript:void(0)">&raquo;</a></li>';
    }
    paginador += '<li style="margin-left: 0px;margin-right: 0px;"><span class="label label pagina">' + Math.ceil(data.rta / parseInt(nreoreg)) + ' Páginas</span></li>';

    paginador += '</ul>';

    let Id_tabla = document.querySelector('#Id_tabla');
    $('#paginacion').append(paginador);
    Id_tabla.append();
	}).fail(function(resp){
		// console.log ("Error")
	}).always(function(){
		// console.log ("Complete")
	})
}

//INSERTAR DATA TABLA USUARIOS
function insertarCliente (){
	let nombre =  document.querySelector('#inp_nombre').value;
	let apellido =  document.getElementById('inp_apellido').value;
	let telefono =  document.getElementById('inp_telefono').value;


	$.ajax({
		url : url,
		type: "POST",
		dataType: "json",
		data: ({
			ind : '2',
			nombre : nombre,
			apellido : apellido,
			telefono : telefono
		}),
	}).done(function (data){
		$('#ModalClientes').modal('hide');
		mostrarClientes(2, 1, 5);
	}).fail (function (resp){
		console.log("error")
	}).always(function(){
		console.log("complete");
	})
}

//ELIMINAR DATA A LA BASE DE DATOS
function EliminarDatos(id) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                data: {
                    ind: '3',
                    id: id
                },
            }).done(function (data) {
                Swal.fire(
                    'Eliminado!',
                    'El registro ha sido eliminado.',
                    'success'
                );
				mostrarClientes(1,1,5);
            }).fail(function (resp) {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al eliminar el registro.',
                    'error'
                );
            });
        }
    });
}


//ACTUALIZAR DATA TABLA USUARIOS
function actualizarCliente() {
    let id = document.querySelector('#inp_id').value;
    let nombre = document.querySelector('#inp_nombre').value;
    let apellido = document.querySelector('#inp_apellido').value;
    let telefono = document.querySelector('#inp_telefono').value;

    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: {
            ind: '5',
            id: id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        }
    }).done(function (data) {
        $('#ModalClientes').modal('hide');
        mostrarClientes(1, 1, 5);
    }).fail(function (resp) {
        console.log("error");
    }).always(function () {
        console.log("Actualizado");
    });
}


//ABRIR MODAL ACTUALIZAR
function AbrirMOdal(id) {

    // MOSTRAR BOTON ACTUALIZAR Y OCULTAR BOTON ENVIAR
    document.getElementById('btn_enviar').style.display = 'none';
    document.getElementById('btn_actualizar').style.display = 'block';


    // CAMBIAR TITULO Y LABELS - VISTA ACTUALIZARs
    let modalTitle = document.getElementById('exampleModalLabel');
    let labelNombre = document.querySelector("label[for='inp_nombre']");
    let labelApellido = document.querySelector("label[for='inp_apellido']");
    let labelTelefono = document.querySelector("label[for='inp_telefono']");
    
    if (modalTitle && labelNombre && labelApellido && labelTelefono) {
        modalTitle.innerText = 'EDITAR USUARIO';
        labelNombre.innerText = 'Editar Nombre';
        labelApellido.innerText = 'Editar Apellido';
        labelTelefono.innerText = 'Editar Teléfono';
    } else {
        console.log("Error: No se encontraron los elementos para cambiar los labels.");
    }

    //MOSTRAR LA VISTA MODAL
    $('#ModalClientes').modal('show');

    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: {
            ind: '4',
            id: id
        }
    }).done(function (data) {
        data.rta.forEach(function (item) {
            document.getElementById('inp_id').value = item.id_cliente;
            document.getElementById('inp_nombre').value = item.nombre;
            document.getElementById('inp_apellido').value = item.apellido;
            document.getElementById('inp_telefono').value = item.telefono;
        });
    }).fail(function (resp) {
        console.log(resp.responseText);
    }).always(function () {
        console.log("complete");
    });
}



// --EVENTOS--

//EVENTO PARA MOSTRAR EL MODAL AGREGAR
document.getElementById('btn_agregar').addEventListener('click', function () {
    $('#ModalClientes').modal('show');
    
    // MOSTRAR BOTON ENVIAR Y OCULTAR BOTON ACTUALIZAR
    document.getElementById('btn_enviar').style.display = 'block';
    document.getElementById('btn_actualizar').style.display = 'none';

     // CAMBIAR TITULO Y LABELS - VISTA CREAR
     let modalTitle = document.getElementById('exampleModalLabel');
     let labelNombre = document.querySelector("label[for='inp_nombre']");
     let labelApellido = document.querySelector("label[for='inp_apellido']");
     let labelTelefono = document.querySelector("label[for='inp_telefono']");
     
     if (modalTitle && labelNombre && labelApellido && labelTelefono) {
         modalTitle.innerText = 'CREAR NUEVO USUARIO';
         labelNombre.innerText = 'Ingresar Nombre';
         labelApellido.innerText = 'Ingresar Apellido';
         labelTelefono.innerText = 'Ingresar Teléfono';
     } else {
         console.log("Error: No se encontraron los elementos para cambiar los labels.");
     }

    // LIMPIAR LOS CAMPOS   
    document.getElementById('inp_id').value = '';
    document.getElementById('inp_nombre').value = '';
    document.getElementById('inp_apellido').value = '';
    document.getElementById('inp_telefono').value = '';
});


//EVENTO PARA ENVIAR A LA BASE DE DATOS CLIENTE
document.getElementById('btn_enviar').addEventListener('click', function (){
	insertarCliente();
})




