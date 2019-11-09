import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['pais'],

  programadores: computed('pais', 'model', function() {
    if (this.pais) {
      return this.model.filterBy('pais', this.pais);
    } else {
      return this.model;
    }
  }),

  actions: {
    registrarVisita(programador) {
      this.store.findRecord('programador', programador.id).then(function(p) {
        p.incrementProperty('visitas');
        p.save();
      });
    },
    borrarProgramador(programador) {
      this.store.findRecord('programador', programador.id).then(function(p) {
        p.deleteRecord();
        p.save();
      }).catch(function (error) {
        alert('No se puedo borrar: ' + error.message);
      });
    },
    agregarProgramador(programador) {
      let nuevo = this.store.createRecord('programador', {
        nombre: programador.nombre,
        pais: programador.pais
      });
      nuevo.save();
    }
  }
});
