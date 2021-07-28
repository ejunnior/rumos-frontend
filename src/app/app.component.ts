import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'fm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'finance';

  constructor(public authenticationService: AuthenticationService) { }
}
