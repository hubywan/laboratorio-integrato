import { Component, AfterViewInit, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: "app-sotto-cofano",
    templateUrl: "./sotto-cofano.component.html",
    styleUrls: ["./sotto-cofano.component.css"],
})
export class SottoCofanoComponent {
    dettaglioPilota: any;
    showDettaglioPilota: boolean = false;
    listaScuderie: any;
    showListaScuderie: boolean = false;
    classificaPiloti2023: any;
    showClassificaPilota2023: boolean = false;
    dettaglioGrandPrix: any;
    showDettaglioGrandPrix: boolean = false;
    calendario2024: any;
    showCalendario2024: boolean = false;
    andamentoPilota: any;
    showAndamentoPilota: boolean = false;

    constructor(private apiservice: ApiService) {}
    getDettaglioPilota(id: number): void {
        this.apiservice.getDettaglioPilota(id).subscribe(
            (data) => {
                this.dettaglioPilota = data;
                console.log(
                    "Dati api ottenuti per dettaglio pilota ",
                    id,
                    ":",
                    this.dettaglioPilota
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
        this.showDettaglioPilota = true;
    }
    hideDettaglioPilota() {
        this.showDettaglioPilota = false;
    }
    getListaScuderie(id: number): void {
        this.apiservice.getListaScuderie().subscribe(
            (data) => {
                this.listaScuderie = data;
                console.log(
                    "Dati api ottenuti per lista scuderie",
                    this.listaScuderie
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
        this.showListaScuderie = true;
    }
    hideListaScuderie() {
        this.showListaScuderie = false;
    }
    getClassificaPiloti2023(year: number): void {
        this.apiservice.getClassifica(year).subscribe(
            (data) => {
                this.classificaPiloti2023 = data;
                console.log(
                    "Dati API classifica piloti ottenuti per l'anno",
                    year,
                    ":",
                    this.classificaPiloti2023
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
        this.showClassificaPilota2023 = true;
    }
    hideClassificaPiloti2023() {
        this.showClassificaPilota2023 = false;
    }
    getDettaglioGrandPrix(id: number): void {
        this.apiservice.getDettaglioGranPremio(id).subscribe(
            (data) => {
                this.dettaglioGrandPrix = data;

                console.log(
                    "Dati api per dettaglio grand prix ottenuti per id ",
                    id,
                    ":",
                    this.dettaglioGrandPrix
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
        this.showDettaglioGrandPrix = true;
    }
    hideDettaglioGrandPrix() {
        this.showDettaglioGrandPrix = false;
    }
    getCalendario2024(): void {
        this.apiservice.getStagione2024().subscribe(
            (data) => {
                this.calendario2024 = data;
                console.log(
                    "Dati api ottenuti per calendario2024:",
                    this.calendario2024
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
        this.showCalendario2024 = true;
    }
    hideCalendario2024() {
        this.showCalendario2024 = false;
    }
    getAndamentoPilota(id: number): void {
        this.apiservice.getAndamentoPilota(id).subscribe(
            (data) => {
                this.andamentoPilota = data;
                console.log(
                    "Dati api per andamento pilota ottenuti per id ",
                    id,
                    ":",
                    this.andamentoPilota
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
        this.showAndamentoPilota = true;
    }
    hideAndamentoPilota() {
        this.showAndamentoPilota = false;
    }
}
