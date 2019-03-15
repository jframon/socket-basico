const {io} = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {usuario: 'Admin', mensaje: 'Bienvenido'});

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al Cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Envia Mensaje a todo los usuarios conectados.
        client.broadcast.emit('enviarMensaje',data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo BIEN'
        //     });
        // } else
        //     callback({
        //         resp: 'Todo Salio Mal'
        //     });
    });
});

