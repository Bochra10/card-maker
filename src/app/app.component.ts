import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
  displayNewCardComponent: boolean = false;
  updatingCard: boolean = false;
  cardToUpdate: any;
  cardsList: any[] = [];
  title = 'Card Maker';



  
  ngOnInit(): void {
    // Call your API here to fetch data and populate cardsList
    // For demonstration, I'm simulating an API call with a timeout
    this.fetchDataaFromApi();
  }

  fetchDataFromApi(): void {
    this.dataService.getUsers().subscribe(
      (data) => {
        this.cardsList = data;
      },
      (error) => {
        this.cardsList = [];
      }
    );
  }
  fetchDataaFromApi(): void {
    // Simulating API call with a timeout (replace with your actual API call)
    setTimeout(() => {
      // Replace this with your actual API response handling logic
      // For example, if you have an API service, you can call its method to get data
      // this.apiService.getData().subscribe(response => {
      //   this.cardsList = response;
      // });

      // Simulated data
      this.cardsList = [
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
        { 'email': 'bochra@arfaoui.com', 'firstname': 'bochra', 'lastname': 'arfaoui', 'city': 'rades' },
      ];

    }, 1000); // Simulated 1-second delay
  }

  toggleCardFormComponent(item?: any): void {
    this.displayNewCardComponent = !this.displayNewCardComponent;

    if (item != null) {
      this.updatingCard = true;
      this.cardToUpdate = item;
    }
  }
}
