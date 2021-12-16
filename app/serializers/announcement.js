import ApplicationSerializer from './application';

export default class AnnouncementSerializer extends ApplicationSerializer {
  attrs = {
    author: { embedded: 'always' }
  }
}
