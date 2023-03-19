import {Component, Input, OnInit} from '@angular/core';
import {SnapyApp} from "../models/snapy.model";

@Component({
  selector: 'app-snap-app',
  templateUrl: './snap-app.component.html',
  styleUrls: ['./snap-app.component.scss']
})
export class SnapAppComponent implements OnInit{
  @Input() snapyApp!: SnapyApp;

  title: string | undefined;
  description: string | undefined;
  createdDate: Date | undefined;
  snaps: number | undefined;
  imageUrl: string | undefined;
  buttonText: string | undefined;
  mySnap: any;

  ngOnInit() {
    this.title = 'ONeill';
    this.description = 'My Brother';
    this.createdDate = new Date();
    this.snaps = 10;
    this.imageUrl = 'https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_FMjpg_UX1000_.jpg' ;
    this.buttonText ='Snaps';
  }
  onSnap(){
    if(this.buttonText == 'Snaps'){
      this.snapyApp.snaps++;
      this.buttonText = 'already snapped'
    }
    else {
      this.snapyApp.snaps--;
      this.buttonText = 'Snaps'
    }
  }
}
