function calcularEdad() {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const edadInput = document.getElementById('edad');

    if (fechaNacimiento) {
        const fechaActual = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        const mes = fechaActual.getMonth() - fechaNac.getMonth();

        if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
            edad--;
        }

        edadInput.value = edad; //Esta parte asigna la edad al campo oculto
    }
}

 // Limpia el formulario luego de enviar el correo
 const form = document.getElementById('registroForm');

 form.addEventListener('submit', function (event) {
     
     setTimeout(() => {
         form.reset();
     }, 500);
 });