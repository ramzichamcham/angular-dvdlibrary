import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.css']
})
export class HomeTopComponent implements OnInit {

  @ViewChild('f', { static: false }) searchDvdForm: NgForm;

    category: string;
    term: string;

  onSearch(){
    console.log("hello");
    
    //get category value
    this.category = this.searchDvdForm.value.searchData.categorySelect;
    this.category = 'title';
    console.log(this.category)

    //get search term value
    this.term = this.searchDvdForm.value.searchData.searchTerm;
    this.term = 'A Wonderful Tale';
    console.log(this.term);
    
    //set category and term properties to use in data binding with child component

    //reload page or content component
  }

  constructor() { }

  ngOnInit(): void {
  }

}
