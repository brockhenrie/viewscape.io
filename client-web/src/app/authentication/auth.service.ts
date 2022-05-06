import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log(email, password)
   return this.http
      .post(`${environment.apiUrl}/login`, {
        email: email,
        password: password,
      },
      {
        withCredentials:true
      })

  }

  register(data:FormData){
  console.log(data)
  return this.http
      .post(`${environment.apiUrl}/register`, {
      ...data
      },
      {
        withCredentials:true
      }).subscribe(
        {
          error: (err)=> console.log(err)
        }
      )
  }
}
