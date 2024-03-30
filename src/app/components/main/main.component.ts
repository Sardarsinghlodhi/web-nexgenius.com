import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NxgHomeComponent } from './home/home.component';
import { NxgHeaderComponent } from '../header/header.component';
import { NxgFooterComponent } from '../footer/footer.component';
import { mainRoutingModule } from './main.routing';

@Component({
  selector: 'nxg-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, mainRoutingModule, NxgHomeComponent, NxgHeaderComponent, NxgFooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class NxgMainComponent {

}
