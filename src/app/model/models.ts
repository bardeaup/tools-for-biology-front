/**
 * Created by pascalbardeau on 18/11/2017.
 */

export interface User {
  username: string;
  email?: string;
  password: string;
  confirm_password?: string;
}

export class LoggedUser {
  username?: string;
  isLogged: boolean;
}
