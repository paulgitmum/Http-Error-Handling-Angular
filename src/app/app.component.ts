import { Component } from '@angular/core';
import { ApiservicesService } from './services/apiservices.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  error: String;
  title = 'Angular Error Handling';

  constructor(private service: ApiservicesService) {}

  fetchUser() {
    this.service.getUser().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
