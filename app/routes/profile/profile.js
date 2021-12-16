import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProfileProfileRoute extends Route {
  @service store;

  async model(params) {
    return this.store.find('user', params.id);
  }
}
