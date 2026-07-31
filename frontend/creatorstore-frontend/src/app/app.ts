import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Products ,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}