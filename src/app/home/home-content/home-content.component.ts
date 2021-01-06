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

  dvds: Dvd[]=[];
  errors='';

  @Input() category;

  @Input() term;

  constructor(private dvdServ: DvdService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit(): void {
    
    this.getDvds();

  }


  getDvds(): void{
    this.dvdServ.getDvds()
    .subscribe(dvds => this.dvds = dvds);
  }

  getByCategory(){
    console.log(this.category);
    console.log(this.term);

    if(this.validInput()){
      this.errors='';
      this.dvdServ.getByCategory(this.category, this.term)
      .subscribe(dvds => this.dvds = dvds);
    }else{

    }

  }

  delete(id: number){
    if(window.confirm('Are sure you want to delete this Dvd from your collection ?')){
      this.dvdServ.deleteById(id)
      .subscribe(response => console.log(response));
      
      this.dvds = this.dvds.filter(function(obj){
        return obj.id !== id;
    });
    }
  }

  validInput(): boolean{
    if(this.category=="" || this.term==""){
      this.errors='<li class=" alert alert-danger">Both Search Category and Search Term are required</li>';
      return false;
    }else{
      return true;
    }

  }

}
