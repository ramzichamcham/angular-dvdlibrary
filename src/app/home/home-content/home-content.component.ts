import { DvdService } from './../../dvd.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  @Input() dvds = [];

  @Input() category;

  @Input() term;

  constructor(private dvd: DvdService) {
    
   }

  ngOnInit(): void {
    console.log("content oninit");
    console.log("got category: " + this.category + " and " + this.term)

    //if category and term are defined, then call on search(category, term)
    
    this.dvd.getAllDvds().subscribe((response: any) => {
      this.dvds = response;
    });


  }

  onSearch(category, term){
    this.dvd.findDvdbycategory(category, term).subscribe((response: any)=> {
      this.dvds = response;
  });
  }

}
