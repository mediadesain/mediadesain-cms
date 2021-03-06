import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class LoginComponent implements OnInit {
  
  pop:string = '';

  constructor(public authSrvc: AuthService) {}

  ngOnInit(){}

  masuk(val:any){
    console.log("asd")
    this.authSrvc.signIn(val);
  }
  keluar(){
    console.log(this.authSrvc)
    this.authSrvc.signOut()
  }
  resetSandi(val:any){
    console.log(this.authSrvc)
    this.authSrvc.resetPassword(val.email)
  }
  perbaharuiData(){
    console.log(this.authSrvc.data)
    this.authSrvc.updateDataAuth(this.authSrvc.data)
  }
  daftar(register:any){
    //User Data Structure
    var userdata : any = {
        address : [{ city: "", detail: "", type: "", notes: "", zip: "" }],
        avatar : "",
        fullname: "",
        phone : "",
        role : "user",
        username : ""
    }
    userdata['datecreate'] = new Date().getTime();
    userdata['datelogin'] = new Date().getTime();
    userdata['email'] = register.email;
    userdata['password'] = register.password;
    //console.log('register', userdata)
    this.authSrvc.registerAccount(userdata)
  }
  removeMessage(){
    this.authSrvc.hideMessage()
  }
}
