var Bilateral = require('./Bilateral.js');

module.exports = class Vertebrate extends Bilateral{

  constructor ( name ){
   super(name, 'bilateral');
   this._body = 'vertebral-column';
 }

};