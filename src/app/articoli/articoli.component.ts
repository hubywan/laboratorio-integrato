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
    constructor(private apiservice: ApiService, private router: Router) {}
    ngOnInit(): void {
        this.apiservice.getArticoli().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
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
}
