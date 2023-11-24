import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
  firstName = '';
  @action authenticate() {
    console.log('login', this.firstName);
  }
}
