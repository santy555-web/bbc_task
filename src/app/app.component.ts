import { Component, OnInit } from '@angular/core';
import { NewsService } from "./app.service";

export interface ToggleBtn {
  state?: boolean;
  onText: string;
  offText?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'BBC';
  data = [];
  city:any;
  aqi:any;
  cigarette:any;
  img="assets/img/ciggrette_icon.png";
  cigarette_img:string[]=[];
  config: ToggleBtn;
  state: boolean;
  onText: string;
  offText: string;
  constructor(private newsService:NewsService){
    this.config = {
      state: false,
      onText: 'English',
      offText: 'हिन्दी',
    };
  }
  ngOnInit(){
    this.getData("hindi");
    if (this.config !== null) {
      this.state = this.config.state;
      this.onText = this.config.onText;
      this.offText = this.config.offText;
    }
  }
  getData(lang){
   this.newsService.getNewsDataByID(lang).subscribe((res:any)=>{
     this.data = [res];
   });
  }
  onClickCity(cityName,aq,cig){
    this.cigarette_img =[];
    this.city = cityName;
    this.aqi = aq;
    this.cigarette = cig;
     for(let i=0; i<cig;i++)
     {
        this.cigarette_img.push(this.img);
     }
  }
  public onClick(): void {
   this.state = !this.state;
   if(this.state == true)
   {
     this.getData('english');
   }
    else{
      this.getData('hindi');
    }
  }
}
