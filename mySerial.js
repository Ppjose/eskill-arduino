const SerialPort = require('serialport');

const mySerial = new SerialPort('COM3', {
  baudRate: 9600
});
function iniciar() {



  mySerial.on('open', function () {
    console.log('Opened Port.');
  });

  mySerial.on('data', function (data) {

    console.log(data.toString());
  });

  mySerial.on('err', function (data) {
    console.log(err.message);
  });
}
exports.iniciar = iniciar;
