import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import * as dayjs from "dayjs";
import "dayjs/locale/it";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Renderer2, ElementRef } from "@angular/core";

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
        private route: ActivatedRoute,
        private renderer: Renderer2,
        private el: ElementRef
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedYear = +params["anno"] || this.selectedYear;
            this.fetchDataForYear(this.selectedYear);
            this.fetchArticoli();
        });
    }
    formatDate(apiDateString: string): string {
        const formattedDate = dayjs(apiDateString)
            .locale("it")
            .format("DD MMMM YYYY");
        return formattedDate;
    }
    fetchArticoli(): void {
        this.apiservice.getArticoli().subscribe(
            (data) => {
                this.articoli = data;
                this.articoli.forEach((articolo: any) => {
                    articolo.data = this.formatDate(articolo.data);
                });
                console.log("Dati api ottenuti:", this.articoli);
                this.getImagesForArticoli(this.articoli);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    getImagesForArticoli(articoli: any[]): void {
        articoli.forEach((articolo) => {
            const id = articolo.id;
            this.getImmagine(id, articolo);
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
