const { Control } = require("magic-home");
let light = new Control("192.168.18.13");

async function red() {
  await light.setColor(100, 0, 0);
}

async function blue() {
  await light.setColor(0, 0, 100);
}

async function green() {
  await light.setColor(0, 100, 0);
}
async function roxo() {
  await light.setColor(75, 0, 130);
}
async function orange() {
  await light.setColor(255, 69, 0);
}

async function pisca(tempo){
  await light.setPattern('seven_color_strobe_flash', tempo, (erro)=> {
    if(erro) console.log(erro)
  })
}

module.exports = {
  red,
  blue,
  green,
  roxo,
  orange,
  pisca
};
