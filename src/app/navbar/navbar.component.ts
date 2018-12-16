import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  public logout(){
    sessionStorage.removeItem("username");
    console.log("in here");
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
