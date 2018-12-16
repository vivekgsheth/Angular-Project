import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import { Session } from 'protractor';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  username;
  password1;
  password2;
  formdata;
  email;
  pswerror:string="";
  see=true;
  constructor(private router: Router,private AuthService:AuthService) { }

  ngOnInit() {

     
  }
  Login()
  {
    this.router.navigateByUrl('/login');
  }
  onClickSubmit(data:NgForm){
   if(data.value.password1 === data.value.password2)
   {
     
    console.log("user registerd is "+data.value);
    this.AuthService.registeruser(data.value).subscribe(data=>{
      console.log(data);
      console.log(data.username)
      if(data)
        {
          sessionStorage.setItem("username",data.username); 
          this.router.navigate(['/homepage']);
        }
      else
        this.router.navigate(['/register'])
    })

    } 
   else
   {
      this.pswerror="passwords dont match";
   }  
  }

}
