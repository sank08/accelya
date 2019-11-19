import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = "search";
  gifList = [];
  constructor(private service: SearchServiceService) { }

  ngOnInit() {
    this.callSearch();
  }

  callSearch() {
    if (this.search != '') {
      this.service.getSearch(this.search).subscribe(result => {
        let jsonData: any = result.body;
        if (jsonData.data && jsonData.data.length > 0) {
          this.gifList = jsonData.data;
        }
      });
    }
    else{
      alert("Enter Search Criteria")
    }

  }

}
