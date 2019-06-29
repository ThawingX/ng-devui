import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ave-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {
  searchText = 'test';
  constructor() { }

  ngOnInit() {
  }

  onSearch(term) {
      console.log(term);
  }

}