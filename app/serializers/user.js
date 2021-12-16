import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  attrs = {
    header: { embedded: 'always' },
  };

  normalize(modelClass, resourceHash) {
    let data = {
      id:            resourceHash.header.userID,
      type:          modelClass.modelName,
      attributes:    resourceHash
    };
    return { data: data };
  }
}
