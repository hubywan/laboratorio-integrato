import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ClassificheComponent } from "./classifiche/classifiche.component";
import { ClassificheAnnoComponent } from "./classifiche-anno/classifiche-anno.component";
import { ClassificaPilotiComponent } from "./classifica-piloti/classifica-piloti.component";
import { ClassificaScuderieComponent } from "./classifica-scuderie/classifica-scuderie.component";
import { ListaScuderieComponent } from "./lista-scuderie/lista-scuderie.component";
import { DettaglioScuderieComponent } from "./dettaglio-scuderia/dettaglio-scuderia.component";
import { DettaglioPilotaComponent } from "./dettaglio-pilota/dettaglio-pilota.component";
import { ListaGranPremiComponent } from "./lista-gran-premi/lista-gran-premi.component";
import { ListaTracciatiComponent } from "./lista-tracciati/lista-tracciati.component";
import { ArticoliComponent } from "./articoli/articoli.component";
import { AreaRiservataComponent } from "./area-riservata/area-riservata.component";
import { GraficoScuderiaComponent } from "./grafico-scuderia/grafico-scuderia.component";
import { GraficoPilotaComponent } from "./grafico-pilota/grafico-pilota.component";
import { ListaPilotiComponent } from "./lista-piloti/lista-piloti.component";
import { DettaglioGranPremioComponent } from "./dettaglio-gran-premio/dettaglio-gran-premio.component";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        ClassificheComponent,
        ClassificheAnnoComponent,
        ClassificaPilotiComponent,
        ClassificaScuderieComponent,
        ListaScuderieComponent,
        ListaPilotiComponent,
        DettaglioScuderieComponent,
        DettaglioPilotaComponent,
        DettaglioGranPremioComponent,
        ListaGranPremiComponent,
        ListaTracciatiComponent,
        AreaRiservataComponent,
        GraficoScuderiaComponent,
        GraficoPilotaComponent,
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
