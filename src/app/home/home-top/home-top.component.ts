import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.css']
})
export class HomeTopComponent implements OnInit {

  @ViewChild('f', { static: false }) searchDvdForm: NgForm;

    selectedCategory: string;
    term: string;

  onSearch(){
    
    //get category value

    console.log(this.selectedCategory);

    //get search term value
  
    // this.term = 'A Wonderful Tale';
    console.log(this.term);

    //call child onSearch()

  }

  constructor() { }

  ngOnInit(): void {
  }

}
