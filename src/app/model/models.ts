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

export class GlobalProliferationExperiment{
  id?: number;
  title: string;
  proliferationExperiments : [ProliferationExperiment];

}
/*  */
export class ProliferationExperiment{
  cellLine: string;
  /* Représente la condition dans laquelle les cellules sont placées*/
  condition: string;
  proliferationPeriods : [ProliferationPeriod];

}

export class ProliferationPeriod {
  idPeriod?:number;
  period : {
    begin: {
      date: Date;
      count: number;
    };
    end: {
      date: Date;
      count: number;
    }
  }
}
