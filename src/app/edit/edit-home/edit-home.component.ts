import { DvdService } from './../../dvd.service';
import { Component, OnInit, ViewChild} from '@angular/core';

import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private dvdS: DvdService) {
    
  }

  title = 'Edit Dvd';
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

}
