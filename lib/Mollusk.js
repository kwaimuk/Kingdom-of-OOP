var Bilateral = require('./Bilateral.js');
module.exports = class Mollusk extends Bilateral{
  constructor ( name ){
   super(name, 'bilateral');
   this._body = 'soft-bodied';
 }
};