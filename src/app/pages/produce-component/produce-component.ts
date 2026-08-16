import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Navbar } from '../../layout/navbar/navbar';

@Component({
  selector: 'app-produce-component',
  imports: [Sidebar,Navbar],
  templateUrl: './produce-component.html',
  styleUrl: './produce-component.css',
})
export class ProduceComponent {}
