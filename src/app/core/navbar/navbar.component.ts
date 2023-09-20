import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  showMenu: boolean = false;
  loggedUser: string = ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {}

}
