import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  temp1;
  resname=["","",""];
  ratings=["","",""];
  phoneno=["","",""];
  address=["","",""];
  timings=["","",""];
  cost=["","",""];
  //zesty=[{"tomato soup ":" 80 " },{"manchow soup":" 90 "},{"hot & souroup":" 100 "},{" cheese butter masala ":" 200 "}];
  constructor(private router: Router,private AuthService:AuthService){

  } 
  public dispmenu(names)
  {

    this.router.navigate(['/restaurants',names]);
    
  }
  
  ngOnInit()
   {
    var x=sessionStorage.getItem("username");
    if(x==null)
    {
      alert("not logged in");
      this.router.navigateByUrl('/login');
      return;
    }

    $(document).ready(function()
    {
      $("#symbolcuisine").click(function()
      {
        $("#cuisine").toggle();
        var abc=$("#symbolcuisine").html();
        console.log("hello "+ abc);
        if(abc=="&gt;")
        {
          $("#symbolcuisine").html("&or;");
        }
        else
        {
          $("#symbolcuisine").html("&gt;");
        }
    })
    $("#symbolcost").click(function()
    {
      $("#averagecost").toggle();
      var abc=$("#symbolcost").html();
      console.log("hello "+ abc);
      if(abc=="&gt;")
      {
        $("#symbolcost").html("&or;");
      }
      else
      {
        $("#symbolcost").html("&gt;");
      }
  })
    $("#symbolarea").click(function()
    {
      $("#area").toggle();
      var abc=$("#symbolarea").html();
      console.log("hello "+ abc);
      if(abc=="&gt;")
      {
        $("#symbolarea").html("&or;");
      }
      else
      {
        $("#symbolarea").html("&gt;");
      }
  })
  })
  }
}