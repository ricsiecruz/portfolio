import { Component } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  menu: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getData().subscribe(res => {
      console.log('menu', res, res.menu)
      this.menu = res.menu;
    })
  }
}
