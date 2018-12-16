import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

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
