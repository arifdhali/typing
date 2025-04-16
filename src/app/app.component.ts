import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  imports: [RouterLink],
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "App Component"

}
