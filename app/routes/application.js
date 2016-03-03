import Ember from 'ember';

export default Ember.Route.extend({
  images: [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg'
  ],

  model() {
    let model = Ember.A();

    Ember.run(() => {
      for (let i = 0; i < 20; i++) {
        model.pushObject(Object.create({
          imgsrc: this.get('images')[Math.floor(Math.random() * this.get('images.length'))]
        }));
      }
    });

    return model;
  }
});
