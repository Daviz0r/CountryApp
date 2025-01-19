import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-country-page',
  standalone: false,
  
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }


    searchByCountry(term: string): void{
      this.countriesService.searchCountry(term)
        .subscribe(countries => {
          this.countries = countries;
        });
    }
}
