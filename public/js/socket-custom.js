var socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor');
});

//Para escuchar
socket.on('disconnect', function () {
    console.log('Perdimos coneccion con servidor');
});

//Enviar Informacion al backend
socket.emit('enviarMensaje', {
    usuario: 'Juan Ramon',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('respuesta Server:', resp)
});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});