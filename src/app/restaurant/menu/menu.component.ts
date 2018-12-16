import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Router} from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router)
   {
     this.route.params.subscribe(res => console.log(res.name));
  }
  zesty=[{"tomato soup ":" 80 " },{"manchow soup":" 90 "},{"hot & sour soup":" 100 "},{" cheese butter masala ":" 200 "}];
  taj=[{"jeera rice ":" 295 " },{"dal makhni":" 490 "},{"cheese naan":" 240 "},{" paneer bhurji ":" 365 "}];
  wokonfire=[{"dry manchurian ":" 250 " },{"fried rice":" 280 "},{"noodles":"230 "},{" chinese bhel ":" 300 "}];
  key;
  value;
  convert(x)
  {
    var k1=Object.keys(x);
    this.key=k1;
    this.value=x[this.key];
    console.log(this.key);
    console.log(this.value);
  }
  dis;
  firstParam;
  ngOnInit() {
    //learn this
    var x=sessionStorage.getItem("username");
  if(x==null)
  {
    alert("not loogeed in");
    this.router.navigateByUrl('/login');
    return;
  }
     this.firstParam = this.route.snapshot.paramMap.get('name');
    if(this.firstParam=="Zesty")
    {
        this.firstParam=this.zesty;
    }
    if(this.firstParam=="WokonFire")
    {
        this.firstParam=this.wokonfire;
    }
    if(this.firstParam=="Taj")
    {
        this.firstParam=this.taj;
    }
    console.log(this.firstParam);
   
  
}  
  
  

}
