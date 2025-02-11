import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserHeaderModel extends Model {
  @belongsTo('announcement') announcement;

  @attr username;
  @attr displayName;
  @attr userImage;
}
