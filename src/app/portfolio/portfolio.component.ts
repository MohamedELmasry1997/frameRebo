import { Component } from '@angular/core';
interface IPortfolio {
  imgSrc: string;
  name: string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  portfolio: IPortfolio[] = [
    { imgSrc: './assets/images/1.png', name: 'img' },
    { imgSrc: './assets/images/2.png', name: 'img' },
    { imgSrc: './assets/images/3.png', name: 'img' },
    { imgSrc: './assets/images/1.png', name: 'img' },
    { imgSrc: './assets/images/2.png', name: 'img' },
    { imgSrc: './assets/images/3.png', name: 'img' },
  ];
  click(eventInfo: any) {
    let clicked = eventInfo.target.src;
    console.log(clicked);
  }
}
