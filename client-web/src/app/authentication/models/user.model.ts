

export class User implements IUser {
  id: number=0;
  firstName: string='';
  lastName: string='';
  email: string='';
  roleId: number = 3;
  constructor(){

  }


}

export interface IUser{
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  roleId: number;
}
