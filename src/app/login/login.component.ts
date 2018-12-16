import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  formdata;
  public user1;
  unotvalid=true;
  pnotvalid=true;
  constructor(private router:Router,private AuthService:AuthService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      username:new FormControl("",Validators.compose([
        Validators.required,
      ])),
      password:new FormControl("",Validators.compose([
        Validators.required
      ]))
    });
  }
  Register()
  {
    this.router.navigateByUrl('/signup'); 
  }
  onClickSubmit(data1:NgForm){
    this.user1 = data1.value
    this.AuthService.loginuser(data1.value).subscribe(data=>{
      console.log(data)
      if(data.username === this.user1.username)
        {
          sessionStorage.setItem("username",data.username);
          this.router.navigateByUrl('/homepage');
        }
      else
      { 
        this.router.navigateByUrl('/login')
      }
    })
  }
  viewPassword(){
    var x=document.getElementById("password-field");
    if(x.getAttribute("type")=="password")
    {
      x.setAttribute("type","text");
    }
    else
    {
      x.setAttribute("type","password");
    }
  }
}
