/**
 * Created by pascalbardeau on 18/11/2017.
 */

export class User {
  username: string;
  email: string;
  password: string;
  password_confirm: string;

  constructor(username: string, email: string, password: string, password_confirm: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.password_confirm = password_confirm;

  }
}
