const { Control } = require("magic-home");
let light = new Control("192.168.18.13");

 function red() {
 light.setColor(100, 0, 0);
}

 function blue() {
 light.setColor(0, 0, 100);
}

 function green() {
 light.setColor(0, 100, 0);
}
 function roxo() {
 light.setColor(75, 0, 130);
}
 function orange() {
 light.setColor(255, 69, 0);
}

 function pisca(tempo){
 light.setPattern('seven_color_strobe_flash', tempo, (erro)=> {
    if(erro) console.log(erro)
  })
}

function off(){
  light.setPower(false).then(success => {
    // do something with the result
    console.log('luzes apagadas')
});
 }
 

module.exports = {
  red,
  blue,
  green,
  roxo,
  orange,
  pisca,
  off
};
