const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');

const connections = [];

exports.setupWebsocket = (server) => {
  const io = socketio(server);

  io.on('connection', socket => {
    console.log(socket.id);
    console.log(socket.handshake.query);

    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Numbher(latitude),
        longitude: Number(longitude)
      },
      techs: parseStringAsArray(techs)
    })
  });

};