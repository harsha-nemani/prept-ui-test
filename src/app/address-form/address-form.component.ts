import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  ngOnInit(): void {
  }

  name = 'Angular';
  baseURL = "http://localhost:3000/address"

  addressForm: FormGroup;

  constructor(private fb:FormBuilder, private http: HttpClient) {

    this.addressForm = this.fb.group({
      userId: '',
      addresses: this.fb.array([]) ,
    });
  }

  addresses() : FormArray {
    return this.addressForm.get("addresses") as FormArray
  }

  newAddress(): FormGroup {
    console.log(this.fb);

    return this.fb.group({
      country: '',
      state: '',
      city: '',
      street: ' ',
      house: '',
      addressType: '',
      userId: this.addressForm.get("userId")
    })
  }

  addAddress() {
    this.addresses().push(this.newAddress());
  }

  removeAddress(i:number) {
    this.addresses().removeAt(i);
  }

  onSubmit() {
    // console.log(JSON.stringify(this.addressForm.value));
    const body = JSON.stringify(this.addressForm.value);
    const headers = { 'content-type': 'application/json'};
    this.http.post(this.baseURL, body, {headers}).subscribe(data => {
      // console.log(data);
      ;
    })
  }

}
