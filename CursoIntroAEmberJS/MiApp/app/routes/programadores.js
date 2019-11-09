import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

	programadoresService: service('programadores'),

	model() {
		return this.programadoresService.todos();
  }
});
