import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  languageList = [
    { code: 'en', label: 'English' , color:"primary"},
    { code: 'hi', label: 'हिंदी' , color:"accent"},
    { code: 'es', label: 'Espanol', color:"warn" },
    { code: 'fr', label: 'french' , color:"primary"},


  ];
}
