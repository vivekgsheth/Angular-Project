import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import{Router} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  imgarr=["/himeimg1.jpg","/himeimg2.jpg"];
  i=0;
  constructor(private router: Router)
  {

  }
  //  myindex=0;
  // carousel1();
  // function carousel1(){
  //   var i;
  //   var x=document.getElementById("imghead1");
    

  // }
  public ngOnInit() {
  
  var x=sessionStorage.getItem("username");
  if(x==null)
  {
    alert("not logged in");
    this.router.navigateByUrl('/login');
    return;
  }
  var myIndex = 0;

  carousel1();
  function carousel1() {
    var i;
    let x=document.getElementsByClassName("imghead1") as HTMLCollectionOf<HTMLElement>;
    // var x = document.getElementsByClassName("imghead1");
    for (i = 0; i < x.length; i++) {
      
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel1, 2500);    
    }
  }
  //public nn="hello";
  public onClickres(x){
    console.log(x);
    //this.nn="hiii";
    //alert(x);
    this.router.navigateByUrl('/restaurants');
    //window.open('/restaurants');
  }
  public onClickonshop(x){
    console.log(x);
    //this.nn="hiii";
    //alert(x);
    this.router.navigateByUrl('/onlineshopping');
    //window.open('/restaurants');
  }
  public onClickmovie(x){
    console.log(x);
    //this.nn="hiii";
    //alert(x);
    this.router.navigateByUrl('/movies');
    //window.open('/restaurants');
  }
  public onClickdaily(x){
    console.log(x);
    //this.nn="hiii";
    //alert(x);
    this.router.navigateByUrl('/daily');
    //window.open('/restaurants');
  }
  public onClickhomeser(x){
    console.log(x);
    //this.nn="hiii";
    //alert(x);
    this.router.navigateByUrl('/homeservices');
    //window.open('/restaurants');
  }
}
