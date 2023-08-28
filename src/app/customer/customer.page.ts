import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  customer: any = null;
  searchedUser: any
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUsers()
    .subscribe(data =>{
      console.log('res: ', data)
      this.customer = data;
      this.searchedUser = this.customer;
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

  searchCustomer(event: any){
    console.log("dasdsa")
    const text = event.target.value;
    this.searchedUser = this.customer;
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user: any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase())  > -1);
      })
    }
  }
}
