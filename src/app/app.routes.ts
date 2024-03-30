import { Routes } from '@angular/router';
import { NxgMainComponent } from './components/main/main.component';
import { NxgNotFoundComponent } from './errors/not-found/not-found.component';
import { NxgHomeComponent } from './components/main/home/home.component';
import { NxgAboutComponent } from './components/main/about/about.component';
import { NxgPortfolioComponent } from './components/main/portfolio/portfolio.component';
import { NxgProjectComponent } from './components/main/project/project.component';
import { NxgContactComponent } from './components/main/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/main/main.component')
            .then((c) => c.NxgMainComponent),
        children: [
            {
                path: '', component: NxgHomeComponent
            },
            {
                path: 'home', component: NxgHomeComponent
            },
            {
                path: 'about', component: NxgAboutComponent,
            },
            {
                path: 'portfolio', component: NxgPortfolioComponent,
            },
            {
                path: 'project', component: NxgProjectComponent,
            },
            {
                path: 'contact', component: NxgContactComponent,
            }
        ]
    },
    //{ path: '', component: NxgMainComponent },
    { path: 'not-found', component: NxgNotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];
