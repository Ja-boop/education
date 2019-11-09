import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  queryParams: ['pais'],
  nombre: null,

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
  )
});
