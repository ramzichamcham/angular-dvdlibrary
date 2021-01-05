import { Location } from '@angular/common';
import { DvdService } from './../../dvd.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {

  selectedRating= "G";

  ngOnInit(): void {
    
  }

  constructor(private dvdS: DvdService, private route: ActivatedRoute, private location: Location) {
    
  }

  title = 'Create a Dvd';
  @ViewChild('f', { static: false }) createDvdForm: NgForm;

  note = '';

  dvd = {
    title: '',
    releaseYear: '',
    director: '',
    rating: 'G',
    notes: ''
  };
  submitted = false;


  onSubmit() {
    this.submitted = true;
    this.dvd.title = this.createDvdForm.value.dvdData.dvdTitle;
    this.dvd.releaseYear = this.createDvdForm.value.dvdData.dvdReleaseYear;
    this.dvd.director = this.createDvdForm.value.dvdData.dvdDirector;
    // this.dvd.rating = this.createDvdForm.value.dvdRating;
    this.dvd.notes = this.createDvdForm.value.dvdData.dvdNotes;

    console.log(this.dvd.rating);
    this.dvdS.addDvd(this.dvd);
    this.createDvdForm.reset();
  }

  onCancel(){
    this.location.back();
  }
}
