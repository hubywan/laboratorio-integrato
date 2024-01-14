import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-dettaglio-articolo",
    templateUrl: "./dettaglio-articolo.component.html",
    styleUrls: ["./dettaglio-articolo.component.css"],
})
export class DettaglioArticoloComponent implements OnInit {
    articolo: any;
    selectedIdArticolo: number = 1;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedIdArticolo = +params["id"] || this.selectedIdArticolo;
            this.fetchDataForId(this.selectedIdArticolo);
        });
    }

    fetchDataForId(id: number): void {
        this.apiservice.getDettaglioArticolo(id).subscribe(
            (data) => {
                this.articolo = data;
                console.log("Dati API ottenuti per ID", id, ":", this.articolo);

                // Chiamata per ottenere le immagini degli articoli
                this.getImagesForArticoli([this.articolo]);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    getImagesForArticoli(items: any[]): void {
        items.forEach((item) => {
            if (item && item.imageUrl) {
                // L'immagine è già presente, non c'è bisogno di chiamare la funzione getImmagine
                console.log("Immagine già disponibile:", item.imageUrl);
            } else if (item && item.articolo) {
                const currentArticolo = item.articolo;
                this.getImmagine(this.selectedIdArticolo, currentArticolo);
            }
        });
    }

    getImmagine(id: number, articolo: any): void {
        this.apiservice.getImmagineArticoli(id).subscribe(
            (data: any) => {
                console.log("Array di byte:", data);
                const blob = new Blob([data], { type: "image/png" });
                const url = window.URL.createObjectURL(blob);
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
