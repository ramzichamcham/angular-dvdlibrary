import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DvdService } from './../../dvd.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Dvd } from './../../dvd';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {
  dvd: Dvd = {
    id: null,
    title: '',
    director: '',
    rating: '',
    releaseYear: null, 
    notes: ''
  };


  ngOnInit(): void {
    this.getDvd();
  }



  constructor(private dvdServ: DvdService, 
              private route: ActivatedRoute,
              private location: Location
    ) {}

  title = 'Edit Dvd';
  @ViewChild('f', { static: false }) createDvdForm: NgForm;


  submitted = false;


  onSubmit() {

    this.dvdServ.updateDvd(this.dvd)
    .subscribe(response => console.log(response));
    ;
    this.goBack();
  }

  getDvd() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.dvdServ.getDvd(id)
    .subscribe(dvd => this.dvd = dvd);
  }

  onCancel(){
    this.location.back();
  }

  goBack(){
    this.location.back();
  }
  

}
