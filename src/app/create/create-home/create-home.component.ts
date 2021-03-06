import { Location } from '@angular/common';
import { DvdService } from './../../dvd.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Dvd} from './../../dvd'
@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {

  title = 'Create Dvd';

  newDvd: Dvd = {
    id: null,
    title: '',
    director: '',
    rating: '',
    releaseYear: null, 
    notes: ''
  };

  errors = '';

  ngOnInit(): void {
    
  }

  constructor(
    private dvdServ: DvdService,
    private route: ActivatedRoute,
    private location: Location
    ) {}


  @ViewChild('f', { static: false }) createDvdForm: NgForm;


  onSubmit() {
    // validate input and add dvd
    if(this.validInput()){
      this.errors='';
      this.addDvd();

    this.createDvdForm.reset();
    }

  }

  addDvd(){
    this.dvdServ.addDvd(this.newDvd)
    .subscribe(response => console.log(response.toString()))
    ;
  }

  onCancel(){
    this.location.back();
  }

  validInput(): boolean{
    // validate title exits, year is 4 digit number
    if(this.newDvd.title==""){
      this.errors='<li class=" alert alert-danger">Please enter a title for the Dvd </li>';
      return false;
    }else if(this.newDvd.releaseYear == null){
      this.errors='<li class=" alert alert-danger">Please enter a release year </li>';
      return false;
    }else if(this.newDvd.releaseYear.toString().length !=4){
      this.errors='<li class=" alert alert-danger">Please enter a 4-digit year </li>';
      return false;
    }else{
      return true;
    }

  }


}
