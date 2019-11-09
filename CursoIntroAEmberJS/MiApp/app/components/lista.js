import Component from '@ember/component';

export default Component.extend({
	actions: {
		mostrarNombre(item) {
			alert(item.nombre);
		}
 	}
});
