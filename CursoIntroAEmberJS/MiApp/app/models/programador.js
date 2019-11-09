import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  pais: DS.attr('string'),
  visitas: DS.attr('number')
});
