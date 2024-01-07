import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {
    items: any;
    articoli: any;
    imageUrl: string = "";
    selectedYear: number = 2023;
    immagineArticolo: any;
    carosello: any = [
        {
            nazione: "bahrain",
            nome: "Bahrain Grand Prix",
        },
        {
            nazione: "bahrain",
            nome: "Bahrain Grand Prix",
        },
        {
            nazione: "bahrain",
            nome: "Bahrain Grand Prix",
        },
    ];

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedYear = +params["anno"] || this.selectedYear;
            this.fetchDataForYear(this.selectedYear);
            this.fetchArticoli();
        });
    }
    fetchArticoli(): void {
        this.apiservice.getArticoli().subscribe(
            (data) => {
                this.articoli = data;
                console.log("Dati api ottenuti:", this.articoli);
                this.getImagesForArticoli(this.articoli); // Chiamata per ottenere le immagini
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    getImagesForArticoli(articoli: any[]): void {
        articoli.forEach((articolo) => {
            const id = articolo.id; // Supponendo che ogni articolo abbia un campo 'id' che identifica l'articolo
            this.getImmagine(id, articolo); // Passiamo anche l'articolo alla funzione getImmagine
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
    getImmagine(id: number, articolo: any): void {
        this.apiservice.getImmagineArticoli(id).subscribe(
            (data: any) => {
                console.log("Array di byte:", data);
                const blob = new Blob([data], { type: "image/png" }); // Sostituisci 'image/png' con il tipo di immagine che stai gestendo
                const url = window.URL.createObjectURL(blob);
                // Assegniamo l'URL dell'immagine all'articolo corrispondente
                // Assicurati che la struttura dell'articolo abbia un campo 'imageUrl'
                articolo.imageUrl = url;
            },
            (error) => {
                console.error(
                    "Errore durante il recupero dell'immagine:",
                    error
                );
            }
        );
    }
}
