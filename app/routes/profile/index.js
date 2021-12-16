import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProfileIndexRoute extends Route {
  @service store;
  @service session;

  async model() {
    return this.store.find('user', this.session.userID);
  }
}
