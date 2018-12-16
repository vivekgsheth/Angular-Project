import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homeservices',
  templateUrl: './homeservices.component.html',
  styleUrls: ['./homeservices.component.css']
})
export class HomeservicesComponent implements OnInit {

  constructor(private router:Router,private AuthService:AuthService) { }

  ngOnInit() {
    var x=sessionStorage.getItem("username");
    if(x==null)
    {
      alert("not logged in");
      this.router.navigateByUrl('/login');
      return;
    }
  }

}
