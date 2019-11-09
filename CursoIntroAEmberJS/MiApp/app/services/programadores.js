import Service from '@ember/service';
import { set } from '@ember/object';

export default Service.extend({

  programadores: null,

  init() {
  	this._super(...arguments);
	  this.set('programadores', this.cargar());
  },

  cargar() {
    return [
      { nombre:'Maria Laura', pais:'Argentina',visitas:0},
      { nombre:'Martin Cabral', pais:'Paraguay',visitas:0},
      { nombre:'Julian Assange', pais:'Australia',visitas:0},
      { nombre:'Marta Marin', pais:'España',visitas:0}
    ];
  },

  todos() {
	  return this.programadores;
  },

  resitrarVisita(programador) {
    set(programador, 'visitas', programador.visitas + 1);
  }
});
