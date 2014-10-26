Watchdog = Ember.Application.create();

Watchdog.Router.map(function() {
  this.resource('about', { path: '/' });
});