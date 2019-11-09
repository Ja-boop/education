import Service from '@ember/service';

export default Service.extend({

  programadores: null,

  init() {
  	this._super(...arguments);
	  this.set('programadores', this.cargar());
  },

  cargar() {
    return [
      { nombre:'Maria Laura', pais:'Argentina'},
      { nombre:'Martin Cabral', pais:'Paraguay'},
      { nombre:'Julian Assange', pais:'Australia'},
      { nombre:'Marta Marin', pais:'España'}
    ];
  },

  todos() {
	   return this.programadores;
  }
});
