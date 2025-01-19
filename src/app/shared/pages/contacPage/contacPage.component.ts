import { Component } from '@angular/core';

@Component({
  selector: 'shared-contact-page',
  standalone: false,
  templateUrl: './contacPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ContactPageComponent { }
