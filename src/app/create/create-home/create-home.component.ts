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
  newDvd: Dvd;
  
  selectedRating= 'G';
  note='';

  ngOnInit(): void {
    
  }

  constructor(private dvdServ: DvdService, private route: ActivatedRoute, private location: Location) {
    
  }

  title = 'Create a Dvd';
  @ViewChild('f', { static: false }) createDvdForm: NgForm;

  submitted = false;


  onSubmit() {
    this.submitted = true;
    //fill new dvd with user input
    this.newDvd = {
      id: null,
      title: this.createDvdForm.value.dvdData.dvdTitle,
      releaseYear: this.createDvdForm.value.dvdData.dvdReleaseYear, 
      director: this.createDvdForm.value.dvdData.dvdDirector,
      rating: this.selectedRating, 
      notes: this.createDvdForm.value.dvdData.dvdNotes
    }

    console.log(this.newDvd)

    this.dvdServ.addDvd(this.newDvd)
    .subscribe(response => console.log(response.toString))
    ;

    this.createDvdForm.reset();
    //service.add




    // this.dvd.title = this.createDvdForm.value.dvdData.dvdTitle;
    // this.dvd.releaseYear = this.createDvdForm.value.dvdData.dvdReleaseYear;
    // this.dvd.director = this.createDvdForm.value.dvdData.dvdDirector;
    // this.dvd.rating = this.selectedRating;
    // this.dvd.notes = this.createDvdForm.value.dvdData.dvdNotes;

    // console.log(this.dvd.rating);

    // this.dvdS.addDvd(this.dvd);

  }

  onCancel(){
    this.location.back();
  }
}
