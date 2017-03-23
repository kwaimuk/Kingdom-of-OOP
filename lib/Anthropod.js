var Bilateral = require('./Bilateral.js');

module.exports = class Anthropod extends Bilateral{

  constructor ( name ){
   super(name, "bilateral");
   this._body = "exoskeleton";
 }

};