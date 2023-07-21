import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-signature-verification',
  templateUrl: './signature-verification.component.html',
  styleUrls: ['./signature-verification.component.scss']
})
export class SignatureVerificationComponent {
  option!: string;
  cities: City[] = [];
    
  formGroup: FormGroup | undefined;
  selectedCity: City | undefined;


  ngOnInit() {
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    this.formGroup = new FormGroup({
        selectedCity: new FormControl<City | null>(null)
    });
}

}
