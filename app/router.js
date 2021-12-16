import EmberRouter from '@ember/routing/router';
import config from 'swiftarr-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('fez');
  this.route('boardgames');
  this.route('karaoke');
  this.route('moderator', function () {
    this.route('log');
    this.route('reports');
  });
  this.route('logout');
  this.route('login');
  this.route('tweets');
  this.route('forums');
  this.route('seamail');
  this.route('events');
  this.route('create-account');
  this.route('reset-password');
  this.route('code-of-conduct');
  this.route('admin', function () {
    this.route('announcements');
    this.route('daily-themes');
    this.route('server-settings');
    this.route('schedule-upload');
    this.route('reg-codes');
    this.route('mods');
    this.route('karaoke-managers');
  });
  this.route('profile', function () {
    this.route('index', { path: '/' });
    this.route('profile', { path: '/:id' });
    this.route('edit');
    this.route('words');
    this.route('create-alt-account');
    this.route('blocks');
  });
});
