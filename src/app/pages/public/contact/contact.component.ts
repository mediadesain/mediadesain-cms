import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  isLoading: boolean = false;
  data : any;
  filterBy : string[] = ['status','gender','group']
  filterSelected = {}
  page = 1
  constructor(
    private _database: DatabaseService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    var reference = { url: '/v2/item-test', query: false, /*key: 'gender', value: 'sss'*/ }
    this._database.getDatabase(reference).then(
      (val) => {
        this.data = Object.values(val);
        this.data.forEach((element:any,key:number) => element.img = 'https://picsum.photos/200/300?random='+ key+1);
        this.isLoading = false;
        console.log("Sumber data api", this.data);
      }
    )
  }

}
