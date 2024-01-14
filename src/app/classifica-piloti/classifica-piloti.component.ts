import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-classifica-piloti",
    templateUrl: "./classifica-piloti.component.html",
    styleUrls: ["./classifica-piloti.component.css"],
})
export class ClassificaPilotiComponent {
    items: any;
    selectedYear: number = 2023;
    showMoreData: boolean[] = [];
    showGrafico: boolean = true;
    showTabella: boolean = false;
    showGraficoMobile: boolean[] = [];
    showGraficoDesktop: boolean[] = [];
    showTabellaMobile: boolean[] = [];
    showTabellaDesktop: boolean[] = [];

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedYear = +params["anno"] || this.selectedYear;
            this.fetchDataForYear(this.selectedYear);
            this.initializeShowMoreData();
            this.initializeGraficoVisibility();
            this.initializeTabellaVisibility();
        });
    }

    fetchDataForYear(year: number): void {
        this.apiservice.getClassifica(year).subscribe(
            (data) => {
                this.items = data;
                console.log(
                    "Dati API ottenuti per l'anno",
                    year,
                    ":",
                    this.items
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    redirectToDettaglioPilota(id: number): void {
        this.router.navigate(["/dettaglio-pilota"], {
            queryParams: { id },
        });
    }

    initializeShowMoreData() {
        this.showMoreData = this.items ? this.items.map(() => false) : [];
    }

    initializeGraficoVisibility() {
        this.showGraficoMobile = this.items ? this.items.map(() => true) : [];
        this.showTabellaMobile = this.items ? this.items.map(() => false) : [];

        if (this.showGraficoDesktop && this.showTabellaDesktop) {
            // Imposta la visualizzazione del grafico come vero e la tabella come falsa per l'indice 0
            this.showGraficoDesktop[0] = true;
            this.showTabellaDesktop[0] = false;
        }
    }

    initializeTabellaVisibility() {
        this.showTabellaMobile = this.items ? this.items.map(() => false) : [];
        this.showTabellaDesktop = this.items ? this.items.map(() => false) : [];
    }

    mostraGrafico() {
        this.showGrafico = true;
        this.showTabella = false;
    }

    mostraTabella() {
        this.showTabella = true;
        this.showGrafico = false;
    }

    mostraGraficoMobile(index: number) {
        this.showGraficoMobile[index] = true;
        this.showGraficoDesktop[index] = false;
        this.showTabellaMobile[index] = false;
        this.showTabellaDesktop[index] = true;
    }

    mostraGraficoDesktop(index: number) {
        this.showGraficoDesktop[index] = true;
        this.showGraficoMobile[index] = false;
        this.showTabellaDesktop[index] = false;
        this.showTabellaMobile[index] = true;
    }

    mostraTabellaMobile(index: number) {
        this.showTabellaMobile[index] = true;
        this.showTabellaDesktop[index] = false;
        this.showGraficoMobile[index] = false;
        this.showGraficoDesktop[index] = true;
    }

    mostraTabellaDesktop(index: number) {
        this.showTabellaDesktop[index] = true;
        this.showTabellaMobile[index] = false;
        this.showGraficoDesktop[index] = false;
        this.showGraficoMobile[index] = true;
    }
    toggleMoreData(index: number) {
        if (this.showMoreData[index]) {
            this.closeSection(index);
        } else {
            this.openSection(index);
        }
    }

    openSection(index: number) {
        this.showMoreData[index] = true;
        this.resetVisibility(index);
    }

    closeSection(index: number) {
        this.showMoreData[index] = false;
        this.resetVisibility(index);
    }

    resetVisibility(index: number) {
        for (let i = 0; i < this.showMoreData.length; i++) {
            if (i !== index) {
                this.showMoreData[i] = false;
            }
        }

        if (this.showGraficoMobile && this.showGraficoDesktop) {
            this.showGraficoMobile[index] = this.showMoreData[index];
            this.showTabellaMobile[index] = !this.showMoreData[index];
            // Assicura che il grafico sia visibile subito anche su desktop
            if (!this.showMoreData[index]) {
                this.showGraficoDesktop[index] = false;
                this.showTabellaDesktop[index] = true;
            } else {
                this.showGraficoDesktop[index] = false;
                this.showTabellaDesktop[index] = true;
            }
        }
    }
}
