import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-snap-app',
  templateUrl: './snap-app.component.html',
  styleUrls: ['./snap-app.component.scss']
})
export class SnapAppComponent implements OnInit{
  title: string | undefined;
  description: string | undefined;
  createdDate: Date | undefined;
  snaps: number | undefined;

  ngOnInit() {
    this.title = 'ONeill';
    this.description = 'My Brother';
    this.createdDate = new Date();
    this.snaps = 10;
  }
}
