import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  normalize(modelClass, resourceHash) {
    let userData = resourceHash;
    userData.username = resourceHash.header.username;
    userData.displayName = resourceHash.header.displayName;
    userData.userImage = resourceHash.header.userImage;

    let data = {
      id: resourceHash.header.userID,
      type: modelClass.modelName,
      attributes: resourceHash,
    };
    return { data: data };
  }
}
