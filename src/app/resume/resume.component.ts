import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Data } from '../model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  skillArr: any;
  work: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.getInfo()
  }
  
  getInfo() {
    this.portfolioService.getData().subscribe(
      (response: Data) => {
        this.skillArr = response.skills;
        this.work = response.work;
      },
      error => {
        console.error('Error fetching skills:', error);
      })
  }

}
