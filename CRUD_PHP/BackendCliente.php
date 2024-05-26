	<?php
include "config.php";

$indicador = $_POST['ind'];

//MOSTRAR DATOS EN LA TABLA
if ($indicador == 1){
	$nuevoInicio = $_POST['nuevoInicio'];
	$nreoreg = $_POST['nreoreg'];

	$query2 = "SELECT count(id_cliente) as count from usuarios";
	$qry2 = $datapos->prepare($query2);
	$qry2->execute();
	$count = $qry2->fetch(PDO::FETCH_ASSOC)['count'];

	$query = "SELECT * FROM usuarios ORDER BY id_cliente DESC limit :nuevoInicio, :nreoreg";
	$qry = $datapos->prepare($query);

	$qry->bindParam(":nuevoInicio", $nuevoInicio, PDO::PARAM_INT);
	$qry->bindParam(":nreoreg", $nreoreg, PDO::PARAM_INT);

	if ($qry->execute()){
		$rta2 = $qry->fetchAll(PDO::FETCH_OBJ);
	} else{
		$rta = "error";
	}
	header('Content-Type: aplication/json');
	echo json_encode(array('rta2' => $rta2, 'rta' => $count));

}

//INSERTAR DATOS A LA TABLA USUARIOS
if ($indicador == 2){
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$telefono = $_POST['telefono'];

	$query =  "INSERT INTO usuarios (nombre, apellido, telefono) values (:nombre, :apellido, :telefono)";
	
	 // PREPARAR LA DECLARACION
	$qry = $datapos->prepare($query);

	// ENLAZAR LOS PARAMETROS
	$qry->bindParam(":nombre", $nombre, PDO::PARAM_STR);
	$qry->bindParam(":apellido", $apellido, PDO::PARAM_STR);
	$qry->bindParam(":telefono", $telefono, PDO::PARAM_STR);

	//EJECUTAR LA DECLARACION
	if ($qry->execute()){
		$rta = ("ok");
	} else{
		$rta = "error";
	}
	header('Content-Type: aplication/json');
	echo json_encode(array('rta' => $rta));

}

//ELIMINAR DATOS DE LA TABLA USUARIOS
if ($indicador == 3){
	$id = $_POST['id'];

	$query = "DELETE FROM usuarios where id_cliente = :id";
	$qry = $datapos->prepare($query);

	$qry->bindParam(":id", $id, PDO::PARAM_INT);

	if ($qry->execute()){
		$rta = ("ok");
	} else{
		$rta = "error";
	}
	header('Content-Type: aplication/json');
	echo json_encode(array('rta' => $rta));

}

//SELECIONAR ID DE CADA USUARIO
if ($indicador == 4) {
	$id = $_POST['id'];

	$query = "SELECT *  FROM usuarios WHERE id_cliente = :id";
	$qry = $datapos->prepare($query);

	$qry->bindParam(":id", $id, PDO::PARAM_INT);

	if ($qry->execute()) {
		$rta = $qry->fetchAll(PDO::FETCH_OBJ);
	} else {
		$rta = "error";
	}
	header('Content-Type: application/json');
	echo json_encode(array('rta' => $rta));
}


//ACTUALIZAR DATOS DE LA TABLA USUARIOS
if ($indicador == 5) {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];

    $query = "UPDATE usuarios SET nombre = :nombre, apellido = :apellido, telefono = :telefono WHERE id_cliente = :id";
    $qry = $datapos->prepare($query);

    $qry->bindParam(":id", $id, PDO::PARAM_INT);
    $qry->bindParam(":nombre", $nombre, PDO::PARAM_STR);
    $qry->bindParam(":apellido", $apellido, PDO::PARAM_STR);
    $qry->bindParam(":telefono", $telefono, PDO::PARAM_STR);

    if ($qry->execute()) {
        $rta = "ok";
    } else {
        $rta = "error";
    }
    header('Content-Type: application/json');
    echo json_encode(array('rta' => $rta));
}
