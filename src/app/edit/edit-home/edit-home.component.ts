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

  title = 'Edit Dvd';
  @ViewChild('f', { static: false }) createDvdForm: NgForm;

  dvd: Dvd = {
    id: null,
    title: '',
    director: '',
    rating: '',
    releaseYear: null, 
    notes: ''
  };

  errors='';


  ngOnInit(): void {

    this.getDvd();
  }

  constructor(private dvdServ: DvdService, 
              private route: ActivatedRoute,
              private location: Location
    ) {}



  onSubmit() {
    // validate input, update dvd and go back to home
    if(this.validInput()){
      this.updateDvd();
      this.goBack();
    }


  }
  // get dvd by id
  getDvd() {
    //get id from path
    const id = +this.route.snapshot.paramMap.get('id');
    //get dvd by id using service
    this.dvdServ.getDvd(id)
    .subscribe(dvd => this.dvd = dvd);
  }

  onCancel(){
    //go back
    this.location.back();
  }

  updateDvd(){
    //update dvd using service
    this.dvdServ.updateDvd(this.dvd)
    .subscribe(response => console.log(response));
    ;
  }

  goBack(){
    this.location.back();
  }
  
  validInput(): boolean{
    // check title exists, and release year is 4 digit number
    if(this.dvd.title==""){
      this.errors='<li class=" alert alert-danger">Please enter a title for the Dvd </li>';
      return false;
    }else if(this.dvd.releaseYear == null){
      this.errors='<li class=" alert alert-danger">Please enter a release year </li>';
      return false;
    }else if(this.dvd.releaseYear.toString().length !== 4){
      this.errors='<li class=" alert alert-danger">Please enter a 4-digit year </li>';
      return false;
    }else{
      return true;
    }

  }

}
