import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-onlineshopping',
  templateUrl: './onlineshopping.component.html',
  styleUrls: ['./onlineshopping.component.css']
})
export class OnlineshoppingComponent implements OnInit {


  constructor(private router:Router,private AuthService:AuthService) { }
  // abc=["1","2","3","4","5","6","8"];
  // pqr=["1","2","3","4","5","6","7"];
 // trial=[{name:"aditya",surname:"shanbhog"},{name:"meet",surname:"mehta"},{name:"jay",surname:"shah"}];
  imgsource=["/hyatt.jpg","/boomboom.jpg","/ibis.jpg"];
  resname=["Hyatt","Leela Palace","Ibis"];
  address=["","",""];
  roomavail=["","",""];
  price=["2k","3k","4k"];
  detailcheckprice=["2k","3k","4k"];
  rating=["3","4","5"];
  showinit=[true,true,true];
  // show=[false,false,false];
  showstar=[false,false,false];
  showbudget=[false,false,false];
  showplace=[false,false,false,false];
  detailcheckstar=["3","4","5"];
  place=["Nadiad","Vadodara","Ahmedabad"];
  temp;
  temp1;
  count=0; 
  arrtemp;
  
  public search(pl,indate,outdate,adult,child)
  {
  
    var date=new Date(indate);
    var date1=new Date(outdate);
    console.log("date is "+date);
    console.log("date1 is "+date1);
    if(date.toDateString()=="Invalid Date"||date1.toDateString()=="Invalid Date")
    {
      alert("Fill the checkin and checkout dates");
    }
    else if(date>date1){
       alert("CheckIn Date cant be More than CheckOut Date");
    }
    else
    {
      //alert("correct checkin and checkout date");
      
    //  console.log("hello ");  
    this.AuthService.getsearch(pl).subscribe(data=>{
      if(data)
        this.temp1=data;
      console.log(this.temp1);
 
    })
      
            
    }
  }
  public check(a,x,y,z)
  {
    // alert(x+" "+y);
    
    var j=0;
    for(j=0;j<this.showinit.length;j++)
    {
        this.showinit[j]=false;
    }
    var i=-1;
    if(a=="budget")
    {
      this.temp=this.price;
      while((i=this.temp.indexOf(x,i+1))!=-1)
    {
      if(z==false)
      {
        
        this.showbudget[i]=true;
        console.log("z is false");
      }
      else
      {
        this.showbudget[i]=false; 
        console.log("z is true");
      }
    }
    }
    else if(a=="stars")
    {
      this.temp=this.rating;
      while((i=this.temp.indexOf(x,i+1))!=-1)
    {
      if(y==false)
      {
        
        this.showstar[i]=true;
        console.log("y is false");
      }
      else
      {
        this.showstar [i]=false; 
        console.log("y is true");
      }
    }
    }
    //alert(a);
    
  }
  ngOnInit() { 
      
    var x=sessionStorage.getItem("username");
    if(x==null)
    {
      alert("not logged in");
      this.router.navigateByUrl('/login');
      return;
    }  
    this.AuthService.getRestaurants().subscribe(data=>{
      if(data)
        this.temp1=data;
      console.log(this.temp1);
 
    })
    this.AuthService.getRestaurantsCount().subscribe(data=>{
      if(data)
        this.count=Number(data);
      console.log(this.temp1);
      //this.showinit=new Array(this.count);
     // this.showinit.fill(true);
      //console.log("count is tt "+this.count);
    })
    
    $(document).ready(function(){
    
   
        
    
      $("#symbolprice").click(function(){
        $("#price").toggle();
        var abc=$("#symbolprice").html();
        console.log("hello "+ abc);
        if(abc=="&gt;")
        {
          $("#symbolprice").html("&or;");
        }
        else
        {
          $("#symbolprice").html("&gt;");
        }
        
      })
      $("#symbolbrand").click(function(){
        $("#brand").toggle();
        var abc=$("#symbolbrand").html();
        console.log("hello "+ abc);
        if(abc=="&gt;")
        {
          $("#symbolbrand").html("&or;");
        }
        else
        {
          $("#symbolbrand").html("&gt;");
        }
      })
      $("#symbolscreen").click(function(){
        $("#screen").toggle();
        var abc=$("#symbolscreen").html();
        console.log("hello "+ abc);
        if(abc=="&gt;")
        {
          $("#symbolscreen").html("&or;");
        }
        else
        {
          $("#symbolscreen").html("&gt;");
        }
      })

    })
  }
  public onClick(x)
    {
      console.log(x);
    }
  
}
