import { Component, OnInit } from '@angular/core';

const STAFFS: Staff[] = [
  {
    name: 'John Doe',
    position: 'Store Manager',
    description: 'Lorel ipsum if you are looking for a man of man of naem',
    imgeUrl: 't1.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  },
  {
    name: 'John Doe',
    position: 'Store Manager',
    description: 'Lorel ipsum if you are looking for a man of man of naem',
    imgeUrl: 't2.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  },
  {
    name: 'John Doe',
    position: 'Store Manager',
    description: 'Lorel ipsum if you are looking for a man of man of naem',
    imgeUrl: 't3.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  },
  {
    name: 'John Doe',
    position: 'Store Manager',
    description: 'Lorel ipsum if you are looking for a man of man of naem',
    imgeUrl: 't4.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  }
];

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs: Staff[];
  constructor() { }

  ngOnInit() {
    this.staffs = STAFFS;
  }

}

interface Staff {
  name: string;
  position: string;
  description: string;
  imgeUrl: string;
  profileLink: string;
}
