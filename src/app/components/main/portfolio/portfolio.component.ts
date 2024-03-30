import { Component, Input } from '@angular/core';
import { NxgBannerComponent } from '../../../shared/banner/banner.component';

@Component({
  selector: 'nxg-portfolio',
  standalone: true,
  imports: [NxgBannerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class NxgPortfolioComponent {
  title: string = 'Portfolio';
  @Input() hidden: any;
}
