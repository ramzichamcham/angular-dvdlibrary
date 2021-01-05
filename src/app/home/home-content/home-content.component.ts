import { DvdService } from './../../dvd.service';
import { Component, OnInit, Input } from '@angular/core';
import {Dvd} from './../../dvd'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  dvds: Dvd[];

  @Input() category;

  @Input() term;

  constructor(private dvdServ: DvdService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit(): void {

    //if category and term are defined, then call on search(category, term)
    
    this.getDvds();
    //print dvd array


  }


  getDvds(): void{
    this.dvdServ.getDvds()
    .subscribe(dvds => this.dvds = dvds)
  }

}
