import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { ContactItem, Data } from '../model';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {

  contactItems: any;
  
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getData().subscribe((data: Data) => {
      this.contactItems = data.contact;
    });
  }

  openPdfInNewWindow() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/resume.pdf';

    // Open the new window with the PDF URL
    window.open(pdfUrl, '_blank');
  }

  cv() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/cv.pdf';

    // Open the new window with the PDF URL
    window.open(pdfUrl, '_blank');
  }

}
