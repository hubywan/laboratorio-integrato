import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ChisiamoComponent } from "./chi-siamo/chi-siamo.component";
import { Stagione2023Component } from "./stagione-2023/stagione-2023.component";
import { ScuderieComponent } from "./scuderie/scuderie.component";
import { PilotiComponent } from "./piloti/piloti.component";
import { ClassificheComponent } from "./classifiche/classifiche.component";
import { TracciatiComponent } from "./tracciati/tracciati.component";
import { ArticoliComponent } from "./articoli/articoli.component";
import { AreaRiservataComponent } from "./area-riservata/area-riservata.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "chi-siamo", component: ChisiamoComponent },
    { path: "stagione-2023", component: Stagione2023Component },
    { path: "scuderie", component: ScuderieComponent },
    { path: "piloti", component: PilotiComponent },
    { path: "classifiche", component: ClassificheComponent },
    { path: "tracciati", component: TracciatiComponent },
    { path: "articoli", component: ArticoliComponent },
    { path: "area-riservata", component: AreaRiservataComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
