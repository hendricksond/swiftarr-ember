import Component from '@glimmer/component';
import config from 'swiftarr-ember/config/environment';

export default class AvatarComponent extends Component {
  get imageURL() {
    var user = this.args.user;
    var prefix = `${config.apiURL}/${config.apiNamespace}`;

    if (user.userImage) {
      var size = this.args.size > 100 ? 'full' : 'thumb';
      return `${prefix}/image/${size}/${user.userImage}`;
    }
    return `${prefix}/image/user/identicon/${user.id}`;
  }
}
