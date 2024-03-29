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
import { DettaglioTracciatoComponent } from "./dettaglio-tracciato/dettaglio-tracciato.component";
import { ListaGranPremiComponent } from "./lista-gran-premi/lista-gran-premi.component";
import { ListaTracciatiComponent } from "./lista-tracciati/lista-tracciati.component";
import { ArticoliComponent } from "./articoli/articoli.component";
import { AreaRiservataComponent } from "./area-riservata/area-riservata.component";
import { GraficoScuderiaComponent } from "./grafico-scuderia/grafico-scuderia.component";
import { GraficoPilotaComponent } from "./grafico-pilota/grafico-pilota.component";
import { GraficoPilotaAndamentoStagioneComponent } from "./grafico-pilota-andamento-stagione/grafico-pilota-andamento-stagione.component";
import { TabellaPilotaAndamentoStagioneComponent } from "./tabella-pilota-andamento-stagione/tabella-pilota-andamento-stagione.component";
import { ListaPilotiComponent } from "./lista-piloti/lista-piloti.component";
import { DettaglioGranPremioComponent } from "./dettaglio-gran-premio/dettaglio-gran-premio.component";
import { DettaglioArticoloComponent } from "./dettaglio-articolo/dettaglio-articolo.component";
import { CaroselloHomeComponent } from "./carosello-home/carosello-home.component";
import { LoginComponent } from "./login/login.component";
import { StesuraArticoloComponent } from "./stesura-articolo/stesura-articolo.component";
import { CountdownComponent } from "./countdown/countdown.component";
import { ConfrontoPilotiComponent } from "./confronto-piloti/confronto-piloti.component";
import { AnnoComponent } from "./anno/anno.component";
import { SottoCofanoComponent } from "./sotto-cofano/sotto-cofano.component";

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
        DettaglioTracciatoComponent,
        ListaGranPremiComponent,
        ListaTracciatiComponent,
        AreaRiservataComponent,
        GraficoScuderiaComponent,
        GraficoPilotaComponent,
        GraficoPilotaAndamentoStagioneComponent,
        TabellaPilotaAndamentoStagioneComponent,
        ArticoliComponent,
        DettaglioArticoloComponent,
        CaroselloHomeComponent,
        LoginComponent,
        StesuraArticoloComponent,
        CountdownComponent,
        ConfrontoPilotiComponent,
        StesuraArticoloComponent,
        AnnoComponent,
        SottoCofanoComponent,
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
