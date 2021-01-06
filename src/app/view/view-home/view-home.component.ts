import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DvdService } from './../../dvd.service';
import { Component, OnInit } from '@angular/core';
import { Dvd } from './../../dvd';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  dvd: Dvd = {
    id: null,
    title: '',
    director: '',
    rating: '',
    releaseYear: null, 
    notes: ''
  };

  constructor(private dvdServ: DvdService, 
    private route: ActivatedRoute,
    private location: Location
) {}

  ngOnInit(): void {
    this.getDvd();
  }


  getDvd() {
    //get dvd id from path
    const id = +this.route.snapshot.paramMap.get('id');

    //get dvd by id using service
    this.dvdServ.getDvd(id)
    .subscribe(dvd => this.dvd = dvd);
  }

  onCancel(){
    this.location.back();
  }

}
