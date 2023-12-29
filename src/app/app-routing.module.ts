import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ChisiamoComponent } from "./chi-siamo/chi-siamo.component";
import { ListaScuderieComponent } from "./lista-scuderie/lista-scuderie.component";
import { ClassificheAnnoComponent } from "./classifiche-anno/classifiche-anno.component";
import { ListaTracciatiComponent } from "./lista-tracciati/lista-tracciati.component";
import { ArticoliComponent } from "./articoli/articoli.component";
import { LoginComponent } from "./login/login.component";
import { ListaGranPremiComponent } from "./lista-gran-premi/lista-gran-premi.component";
import { ClassificaPilotiComponent } from "./classifica-piloti/classifica-piloti.component";
import { ClassificaScuderieComponent } from "./classifica-scuderie/classifica-scuderie.component";
import { ClassificheComponent } from "./classifiche/classifiche.component";
import { ListaPilotiComponent } from "./lista-piloti/listaPiloti.component";
import { DettaglioScuderieComponent } from "./dettaglio-scuderia/dettaglio-scuderia.component";
import { DettaglioPilotaComponent } from "./dettaglio-pilota/dettaglio-pilota.component";
import { AreaRiservataComponent } from "./area-riservata/area-riservata.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "chi-siamo", component: ChisiamoComponent },
    { path: "classifiche", component: ClassificheComponent },
    { path: "scuderie", component: ListaScuderieComponent },
    { path: "scuderie/dettaglio", component: DettaglioScuderieComponent },
    { path: "piloti", component: ListaPilotiComponent },
    { path: "dettaglio-pilota", component: DettaglioPilotaComponent },
    { path: "tracciati", component: ListaTracciatiComponent },
    {
        path: "classifiche-anno",
        component: ClassificheAnnoComponent,
        children: [
            {
                path: "piloti",
                component: ClassificaPilotiComponent,
            },
            {
                path: "gran-premi",
                component: ListaGranPremiComponent,
            },
            {
                path: "scuderie",
                component: ClassificaScuderieComponent,
            },
        ],
    },
    { path: "articoli", component: ArticoliComponent },
    { path: "login", component: LoginComponent },
    { path: "area-riservata", component: AreaRiservataComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
