import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Data
  today: Date = new Date();

  // Checker
  isCollapsed = true;

  // Image
  imgLogo = 'assets/img/logo/logo-erebat.png'
  imgEnv = 'assets/img/default/environment.png'
  imgApple = 'assets/img/badge/appstore.svg'
  imgAndroid = 'assets/img/badge/playstore.svg'
  imgSmart = 'assets/img/logo/logo-mbpj.png'
  imgMBPJ = 'assets/img/logo/logo-smart-pj.png'

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

}
