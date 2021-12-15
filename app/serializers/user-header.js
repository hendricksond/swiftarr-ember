import ApplicationSerializer from './application';

export default class UserHeaderSerializer extends ApplicationSerializer {
  primaryKey = 'userID';
}
