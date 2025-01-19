import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-country-page',
  standalone: false,
  
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }


    searchByRegion(term: string): void{
      this.countriesService.searchRegion(term)
        .subscribe(countries => {
          this.countries = countries;
        });
    }
}
