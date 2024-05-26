<?php
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'clientes');

$DNS = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;
try {
	$datapos = new PDO($DNS, DB_USER, DB_PASS);
} catch (PDOException $error) {
	echo "<p style= 'font-family: system-ui;'>Error en la conexion de bases de datos de pos <strong style='color : red;'> " . $error->getMessage() . " </strong> Revisa la configuración</p>";
	echo "<br>";
}
