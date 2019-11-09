import Route from '@ember/routing/route';
export default Route.extend({
	model() {
   		return [
			{nombre:'Maria Laura',pais:'Argentina'},
			{nombre:'Martin Cabral',pais:'Paraguay'},
			{nombre:'Julian Assange',pais:'Australia'}
		];
 	}
});
