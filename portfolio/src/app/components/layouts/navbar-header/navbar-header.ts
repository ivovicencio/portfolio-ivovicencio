import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-header.html',
  styleUrls: ['./navbar-header.css'],
})
export class NavbarHeader {}