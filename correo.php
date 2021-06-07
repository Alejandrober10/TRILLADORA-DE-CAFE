<?php
    $destinatario = 'bermudez960205@hotmail.com';
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];

    $header="Enviado desde la pagina afuego lento";
    $mensajeCompleto= $nombre. "\n". $email. $telefono;

    mail($destinatario,'venta cafe',$mensajeCompleto,$header);
    echo "<scipt> ('Correo enviado perfectamente')</script>";
    echo "<scipt> setTimeout(\"location.href='index.html'\",1000)</script>";
?>