import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NxgHeaderComponent } from './components/header/header.component';
import { NxgMainComponent } from './components/main/main.component';
import { NxgFooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app.routing';
import { NxgHomeComponent } from './components/main/home/home.component';
import { mainRoutingModule } from './components/main/main.routing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NxgMainComponent,NxgHeaderComponent, NxgHomeComponent,NxgFooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
