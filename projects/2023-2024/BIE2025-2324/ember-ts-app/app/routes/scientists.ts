import Route from '@ember/routing/route';
import Store from '@ember-data/store';
import { service } from '@ember/service';
import { signInWithEmailAndPassword } from 'ember-cloud-firestore-adapter/firebase/auth';
import EsaSessionService from 'ember-simple-auth/services/session';

export default class ScientistsRoute extends Route {
  @service store!: Store;
  @service session!: Session;
  model() {
    this.session.authenticate('authenticator:firebase', (auth) => {
      return signInWithEmailAndPassword(
        auth,
        'my_email@gmail.com',
        'my_password',
      );
    });
    const newPost = this.store.createRecord('post', { title: 'Post A' });
    newPost.save();
    return this.store.findAll('post');
  }
}
