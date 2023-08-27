import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUsers()
    .subscribe(data =>{
      console.log('res: ', data)
    })
  }

  getUsers(){
    return this.http
    .get("assets/files/customer.json")
    .pipe(
      map((res: any)=>{
        return res.data;
      })
    )
  }

}
