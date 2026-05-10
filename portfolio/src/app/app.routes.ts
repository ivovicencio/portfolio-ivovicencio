import { Routes } from '@angular/router';
import { Home } from './components/layouts/home/home';
import { Projects } from './components/projects/projects';
import { ContactMe } from './components/contact-me/contact-me';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'contact-me',
        component: ContactMe
    },

    // Redirección de seguridad
  { path: '**', redirectTo: 'home' }
];
