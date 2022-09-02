<?php

$host='localhost';
$bd='vdp';
$user='postgres';
$pass='root';

$nom=$_POST['nome'];
$tel=$_POST['tel'];
$email=$_POST['email'];
$pass=$_POST['password'];

$conexion=pg_connect("host=$host dbname=$bd user=$user password=$pass");

$query=("INSERT INTO usuarios(nombre,tel,email,contra)
	VALUES('$nom','$tel','$email','$pass')");

$consulta=pg_query($conexion,$query);

pg_close();

?>