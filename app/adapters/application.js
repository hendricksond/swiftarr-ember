import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';
import config from 'swiftarr-ember/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  @service session;

  namespace = config.apiNamespace;
  host = config.apiURL;

  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.token}`;
    }
    return headers;
  }
}
