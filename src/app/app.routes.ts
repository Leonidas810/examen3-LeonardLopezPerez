import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { TvShowsPage } from './pages/tv-shows/tv-shows.page';
import { ErrorPage } from './pages/error/error.page';

export const routes: Routes = [
    { path: '', redirectTo: 'tvshows', pathMatch: 'full' }, // Redireccionar a 'tvshows' si la ruta está vacía
    { path: 'home', component: HomePage },
    { path: 'contact', component: ContactPage },
    { path: 'about', component: AboutPage },
    { path: 'tvshows', component: TvShowsPage },
    { path: 'error', component: ErrorPage }, // Ruta para la página de error
    { path: '**', redirectTo: 'error', pathMatch: 'full' } // Redireccionar a 'error' si la ruta no coincide con ninguna definida
];
