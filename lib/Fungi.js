var Eukaryota = require('./Eukaryota.js');

module.exports = class Fungi extends Eukaryota{

  constructor (name, uniCellular, asexual, mobile, heterotroph){
   super(name, false, true, false, true);
 }


};