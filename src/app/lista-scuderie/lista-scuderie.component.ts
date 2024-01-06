import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { Router } from "@angular/router";
@Component({
    selector: "app-lista-scuderie",
    templateUrl: "./lista-scuderie.component.html",
    styleUrls: ["./lista-scuderie.component.css"],
})
export class ListaScuderieComponent {
    items: any;

    constructor(private apiservice: ApiService, private router: Router) {}

    ngOnInit(): void {
        this.apiservice.getListaScuderie().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    redirectToDettaglioScuderia(id: number): void {
        this.router.navigate(["/dettaglio-scuderia"], {
            queryParams: { id },
        });
    }
}
