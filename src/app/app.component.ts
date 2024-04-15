import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './shared/components/button/button.component';
import { ListgroupComponent } from './shared/components/listgroup/listgroup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,ButtonComponent,ListgroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'etiya-angular';
  cars = [
    {
      "brand": "Toyota",
      "model": "Corolla",
      "price": 75000,
      "variant": "primary"
    },
    {
      "brand": "Honda",
      "model": "Civic",
      "price": 70000,
      "variant": "secondary"
    },
    {
      "brand": "BMW",
      "model": "3 Series",
      "price": 85000,
      "variant": "success"
    },
    {
      "brand": "Mercedes-Benz",
      "model": "C-Class",
      "price": 90000,
      "variant": "danger"
    },
    {
      "brand": "Ford",
      "model": "Focus",
      "price": 65000,
      "variant": "warning"
    },
    {
      "brand": "Volkswagen",
      "model": "Golf",
      "price": 68000,
      "variant": "info"
    },
    {
      "brand": "Audi",
      "model": "A4",
      "price": 95000,
      "variant": "light"
    },
    {
      "brand": "Nissan",
      "model": "Altima",
      "price": 72000,
      "variant": "dark"
    },
  ];
}
