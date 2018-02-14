import { RouterModule, Routes }  from "@angular/router";
import { AboutComponent, PortafolioComponent, PortafolioItemComponent } from "./components/index.paginas";

const APP_ROUTES: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: PortafolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });