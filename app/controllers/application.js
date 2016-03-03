import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    resizeItems() {
      this.get('model').forEach((item) => {
        item.set('classes', `grid-item grid-item-width-${Math.floor(Math.random() * 2) + 1}`);
      });
    }
  }
});
