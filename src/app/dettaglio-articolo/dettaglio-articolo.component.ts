import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import * as dayjs from "dayjs";
import "dayjs/locale/it";

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
                this.articolo.testo = this.formatText(this.articolo.testo);
                this.articolo.data = this.formatDate(this.articolo.data);
                console.log("Dati API ottenuti per ID", id, ":", this.articolo);
                this.getImagesForArticolo(this.articolo);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    getImmagine(articolo: any): void {
        const id = articolo.id;
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
    formatText(text: string): string {
        return text.replace(/\n/g, "<br>");
    }
    getImagesForArticolo(articolo: any): void {
        this.getImmagine(articolo);
    }
    formatDate(apiDateString: string): string {
        const formattedDate = dayjs(apiDateString)
            .locale("it")
            .format("DD MMMM YYYY");
        return formattedDate;
    }
}
