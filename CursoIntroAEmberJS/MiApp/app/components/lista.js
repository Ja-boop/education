import Component from '@ember/component';

export default Component.extend({
	actions: {
		click(item) {
			this.onClick(item);
		}
 	}
});
