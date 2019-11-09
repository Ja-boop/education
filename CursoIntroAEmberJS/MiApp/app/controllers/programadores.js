import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  queryParams: ['pais'],
  programadoresService: service('programadores'),

  programadores: computed('pais', 'model',
    function() {
      let pais = this.pais;
    	let programadores = this.model;
      console.log(pais);
      if (pais) {
        return programadores.filterBy('pais', pais);
      } else {
        return programadores;
      }
    }
  ),

  actions: {
    registrarVisita(programador) {
        this.programadoresService.resitrarVisita(programador);
    }
  }
});
