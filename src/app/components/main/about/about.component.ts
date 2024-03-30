import { Component, Input } from '@angular/core';
import { NxgBannerComponent } from '../../../shared/banner/banner.component';

@Component({
  selector: 'nxg-about',
  standalone: true,
  imports: [NxgBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class NxgAboutComponent {
  title: string = 'About';
  @Input() hidden: any;
}
