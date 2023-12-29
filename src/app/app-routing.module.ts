import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ChisiamoComponent } from "./chi-siamo/chi-siamo.component";
import { ScuderieComponent } from "./scuderie/scuderie.component";
import { PilotiComponent } from "./piloti/piloti.component";
import { ClassificheAnnoComponent } from "./classifiche-anno/classifiche-anno.component";
import { TracciatiComponent } from "./tracciati/tracciati.component";
import { ArticoliComponent } from "./articoli/articoli.component";
import { LoginComponent } from "./login/login.component";
import { ClassificaPilotiComponent } from "./classifica-piloti/classifica-piloti.component";
import { ClassificaGranPremiComponent } from "./classifica-gran-premi/classifica-gran-premi.component";
import { ClassificaScuderieComponent } from "./classifica-scuderie/classifica-scuderie.component";
import { ClassificheComponent } from "./classifiche/classifiche.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "chi-siamo", component: ChisiamoComponent },
    { path: "classifiche", component: ClassificheComponent },
    { path: "scuderie", component: ScuderieComponent },
    { path: "piloti", component: PilotiComponent },
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
                component: ClassificaGranPremiComponent,
            },
            {
                path: "scuderie",
                component: ClassificaScuderieComponent,
            },
        ],
    },
    { path: "tracciati", component: TracciatiComponent },
    { path: "articoli", component: ArticoliComponent },
    { path: "login", component: LoginComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
