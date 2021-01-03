import { DvdService } from './../../dvd.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  @Input() dvds = [];

  constructor(private dvd: DvdService) {
    
   }

  ngOnInit(): void {
    this.dvd.getAllDvds().subscribe((response: any) => {
      this.dvds = response;
    });


  }

  onSearch(category, value){
    this.dvd.findDvdbycategory('director', 'Joe Smith').subscribe((response: any)=> {
      this.dvds = response;
  });
  }

}
