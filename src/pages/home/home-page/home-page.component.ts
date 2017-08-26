import { Component, OnInit } from '@angular/core';

interface Train{
  num:string,
  type:string,
  departureTime:string,
  arrivalTIme:string
  random?:number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  trains: Array<Train>;
  firstLine:string;
  constructor() {
    this.getTrains()
  }

  ngOnInit() {
  }
  
  getTrains(){
     this.trains = [
      {num:"K531",type:"快速",departureTime:"12:00",arrivalTIme:"18:00"},
      {num:"T532",type:"特快",departureTime:"13:00",arrivalTIme:"17:00"},
      {num:"G533",type:"高铁",departureTime:"14:00",arrivalTIme:"16:30"},
      {num:"G534",type:"高铁",departureTime:"09:00",arrivalTIme:"11:00"}
    ]
  }
  
  doSort(type="asc",col="departureTime"){

    if(col=="random"){
      this.trains.forEach(function(train) {
          train.random = Math.round( Math.random() * 100 )
      })
    }
    
    this.trains.sort(function(a,b){
      if(type=="asc")
        return Number( a[col] > b[col] )
      else
        return Number( a[col] <= b[col] )
    })
  }

}
