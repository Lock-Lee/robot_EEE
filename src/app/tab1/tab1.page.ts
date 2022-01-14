import { Component, OnInit } from '@angular/core';
import { MicrogearService } from '../microgear.service';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public i
  public msg
  public sw =  false
  public sw1 =  true
  public BME280 ="0"
  public Ampmeter="0"
  public Wild_Speed="0"
  public Ultrasonic="0"
  public keyword="https://e6de-1-47-2-229.ngrok.io/"
  public  IP ="https://e6de-1-47-2-229.ngrok.io/"
  public Evap: boolean = false;
  constructor(public service: MicrogearService,public http:HttpClient) { 
    this.service.message((val) => {
     console.log(val);
     if(val.topic==="/RobotCarEEE/RobotCar/all"){
    
      
      this.BME280 = `${val.message}`.split(',')[0];
      this.Ampmeter = `${val.message}`.split(',')[1];
      this.Wild_Speed = `${val.message}`.split(',')[2];
      this.Ultrasonic = `${val.message}`.split(',')[3];
     }
    });


   }
   ngOnInit() {
   
    
    this.http.get(this.IP+"video_feed")
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
    });
   
}
public onClickEvap = (e) => {
 
  var x
  if (e.detail.checked) {
    x ="6"
  } else {
    x ="5"
  }
  this.http.get(this.IP+x)
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
    });

  
    
   
};
   conIP(){
    this.sw = true
    this.sw1 = false
    this.http.get(this.IP+"video_feed")
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
    });
   }
   readIP = (e)=>{
    this.keyword = e
     console.log(e);
     this.http.get(this.IP)
     .subscribe(data => {
       console.log(data);
      }, error => {
       console.log(error);
     });
     
   }
   setIP(e){
    console.log(e);
    
    this.IP = this.keyword
     this.sw1 = true
    this.sw = false
    this.http.get(this.IP)
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
    });
  }
  public start= (e) => {
    this.http.get(this.IP+e)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
 
   
   
   
  
  
   
  }
  public  end=  (e) => {
     
   
    this.http.get(this.IP+e)
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
    });
  }

 

}
