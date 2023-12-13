import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.page.html',
  styleUrls: ['./detail-tour.page.scss'],
})
export class DetailTourPage implements OnInit {
  dob: string = '';

  constructor() { }

  ngOnInit() {
  }

}
