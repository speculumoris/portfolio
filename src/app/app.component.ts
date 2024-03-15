import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { HeaderComponent } from "./pages/header/header.component";
import { Section1Component } from "./pages/section1/section1.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HeaderComponent, Section1Component, FooterComponent, HomeComponent, ContactComponent]
})
export class AppComponent {
  title = 'portfolio';
}
