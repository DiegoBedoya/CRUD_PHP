<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- BOOTSTRAP CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

	<!-- SweetAlert2 CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
	
	<!-- CSS -->
	<link rel="stylesheet" href="style.css">
	<title>Document</title>
</head>

<br>

<body>
	<div class="container">

		<!-- BOTON PARA AGREGAR NUEVO USUARIO -->
		<button type="button" class="btn btn-primary" id="btn_agregar">
			+ Agregar
		</button>

		<!-- MODAL CREAR NUEVO USUARIO -->
		<div class="modal" id="ModalClientes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">Crear Usuario</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">

						<form action="" id="formulario">
							<input type="hidden" id="inp_id" display="none">

							<div class="mb-3">
								<label for="inp_nombre" class="form-label">Ingrese Nombre</label>
								<input type="text" class="form-control" id="inp_nombre">
							</div>

							<div class="mb-3">
								<label for="inp_apellido" class="form-label">Ingrese Apellido</label>
								<input type="text" class="form-control" id="inp_apellido">
							</div>

							<div class="mb-3">
								<label for="inp_telefono" class="form-label">Ingrese Teléfono</label>
								<input type="number" class="form-control" id="inp_telefono">
							</div>
					</div>
					</form>

					<div class="modal-footer">
						<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
						<button type="submit" class="btn btn-primary" id="btn_enviar">Enviar</button>
						<button type="submit" class="btn btn-primary" id="btn_actualizar">Actualizar</button>
					</div>
				</div>
			</div>
		</div>


		<br>
		<br>

		<!-- TABLA MOSTRAR DATOS USUARIOS -->
		<table class="table" id="Id_tabla">
			<thead>
				<tr>
					<th scope="col">Id Usuario</th>
					<th scope="col">Nombre</th>
					<th scope="col">Apellido</th>
					<th scope="col">Telefono</th>
					<th scope="col">Acciones</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
		<div class="mt-4" id="paginacion"></div>


		<!-- SCRIPTS -->
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
		<script src="Cliente.js"></script>

	</div>
</body>


</html>