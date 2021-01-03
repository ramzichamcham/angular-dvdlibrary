import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {
  ngOnInit(): void {
    
  }

  title = 'Create a Dvd';
  @ViewChild('f', { static: false }) signupForm: NgForm;

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
    this.dvd.title = this.signupForm.value.dvdData.dvdTitle;
    this.dvd.releaseYear = this.signupForm.value.dvdData.dvdReleaseYear;
    this.dvd.director = this.signupForm.value.dvdData.dvdDirector;
    // this.dvd.rating = this.signupForm.value.dvdRating;
    this.dvd.notes = this.signupForm.value.dvdData.dvdNotes;

    console.log(this.dvd.rating);
    console.log("hey");
    this.signupForm.reset();
  }
}
