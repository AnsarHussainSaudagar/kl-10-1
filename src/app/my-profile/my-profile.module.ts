import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from '../addresses/addresses.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { MyProfileComponent } from './my-profile.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    children: [
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'addresses', component: AddressesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    MyProfileComponent,
    PersonalDetailsComponent,
    AddressesComponent,
  ],
  imports: [CommonModule,  RouterModule.forChild(routes)],
})
export class MyProfileModule {
  constructor(){
    console.log("ansar");
    
  }
}
