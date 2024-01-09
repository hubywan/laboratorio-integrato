import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-articoli",
    templateUrl: "./articoli.component.html",
    styleUrls: ["./articoli.component.css"],
})
export class ArticoliComponent {
    items: any;
    immagineArticolo: any;
    imageUrl: string = "";
    id = 1;

    constructor(private apiservice: ApiService, private router: Router) {}
    ngOnInit(): void {
        this.fetchArticoli();
    }
    fetchArticoli(): void {
        this.apiservice.getArticoli().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
                this.getImagesForArticoli(this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    redirectToDettaglioArticolo(id: number): void {
        this.router.navigate(["/dettaglio-articolo"], {
            queryParams: { id },
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
    getImagesForArticoli(items: any[]): void {
        items.forEach((items) => {
            const id = items.id;
            this.getImmagine(id, items);
        });
    }
}
