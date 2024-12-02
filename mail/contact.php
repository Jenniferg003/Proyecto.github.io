<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Datos del formulario
    $email = htmlspecialchars($_POST['email']);
    $nombre = htmlspecialchars($_POST['nombre']);
    $fechaNacimiento = htmlspecialchars($_POST['fechaNacimiento']);
    $edad = htmlspecialchars($_POST['edad']);
    $genero = htmlspecialchars($_POST['genero']);

    
    $to = "jennifer15122003@gmail.com";
    $subject = "Nuevo Registro de Cliente";
    $message = "Se ha registrado un nuevo cliente en la página web:\n\n";
    $message .= "Nombre: $nombre\n";
    $message .= "Correo Electrónico: $email\n";
    $message .= "Fecha de Nacimiento: $fechaNacimiento\n";
    $message .= "Edad: $edad\n";
    $message .= "Género: $genero\n";

    
    $headers = "From: no-reply@tu-sitio.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "¡Gracias! Su registro se ha enviado correctamente.";
    } else {
        echo "Lo sentimos, hubo un error al enviar su registro. Inténtelo más tarde.";
    }
}
?>

