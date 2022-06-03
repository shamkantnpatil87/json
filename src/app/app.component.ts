import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Json';
  myData:any;
  constructor(public json:AppSettingsService) {

  }
  ngOnInit() {
    this.json.getJSON().subscribe((data:any)=> {
console.log(data);
this.myData = data;
alert(this.myData.menu.id)
    });
  }
}

