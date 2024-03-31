import { Component, Input } from '@angular/core';
import { NxgBannerComponent } from '../../../shared/banner/banner.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nxg-portfolio',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, NxgBannerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class NxgPortfolioComponent {
  title: string = 'Portfolio';
  @Input() hidden: any;
  portfolioGellary: any = [
    {
      url: '/portfolio/view',
      src: 'assets/images/portfolio/portfolio1.png',
      alt: 'portfolio1.png',
      title: 'Musician',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, deleniti'
    },
    {
      url: '/',
      src: 'assets/images/portfolio/portfolio2.png',
      alt: 'portfolio1.png',
      title: 'SoftwareM4',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, deleniti'
    },
    {
      url: '/',
      src: 'assets/images/portfolio/portfolio3.png',
      alt: 'portfolio1.png',
      title: 'Photography',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, deleniti'
    },
    {
      url: '/',
      src: 'assets/images/portfolio/portfolio4.png',
      alt: 'portfolio1.png',
      title: 'University',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, deleniti'
    },
    {
      url: '/',
      src: 'assets/images/portfolio/portfolio5.png',
      alt: 'portfolio1.png',
      title: 'Logistics',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, deleniti'
    },
    {
      url: '/',
      src: 'assets/images/portfolio/portfolio6.png',
      alt: 'portfolio1.png',
      title: 'Logis',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, deleniti'
    },
  ]
}
