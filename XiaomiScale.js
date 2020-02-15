
module.exports = function(RED) {
  function xiaomiScale(config) {
    let MiScale = require('./index.js');
    RED.nodes.createNode(this,config);

    var node = this;
    var msg;

    let miscale = new MiScale();    
    miscale.startScanning();
  
    miscale.on('data', function (scale) {      
      msg = scale;
      msg.payload  = scale.weight;      
      node.send(msg)
    });

    // tidy up any state
    this.on('close', function() {      
      miscale.stopScanning();      
    });

  }
  RED.nodes.registerType("Xiaomi Scale", xiaomiScale);

};
