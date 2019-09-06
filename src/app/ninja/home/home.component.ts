import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  
  info: string;
  img: string;
  ngOnInit() {
    const historyData = this.activatedRoute.snapshot.data['history'];
    this.info = historyData.info;
    this.img = historyData.img;
  }

}
