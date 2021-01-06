import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.css']
})
export class HomeTopComponent implements OnInit {

  @ViewChild('f', { static: false }) searchDvdForm: NgForm;
    
  // binded variables
    selectedCategory: string = '';
    term: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
