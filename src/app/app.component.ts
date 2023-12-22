import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cardsList: any[] = [{'email':'bochra@arfaoui.com','firstname':'bochra','lastname':'arfaoui', 'city':'rades'},{'email':'bochra@arfaoui.com','firstname':'bochra','lastname':'arfaoui', 'city':'rades'},{'email':'bochra@arfaoui.com','firstname':'bochra','lastname':'arfaoui', 'city':'rades'},{'email':'bochra@arfaoui.com','firstname':'bochra','lastname':'arfaoui', 'city':'rades'},{'email':'bochra@arfaoui.com','firstname':'bochra','lastname':'arfaoui', 'city':'rades'}];
  title = 'Card Maker';
}
