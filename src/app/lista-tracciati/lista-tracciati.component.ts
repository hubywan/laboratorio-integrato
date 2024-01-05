import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { Router } from "@angular/router";
@Component({
    selector: "app-lista-tracciati",
    templateUrl: "./lista-tracciati.component.html",
    styleUrls: ["./lista-tracciati.component.css"],
})
export class ListaTracciatiComponent {
    items: any;

    constructor(private apiservice: ApiService, private router: Router) {}

    ngOnInit(): void {
        this.apiservice.getListaCircuiti().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    redirectToDettaglioCircuito(id: number): void {
        this.router.navigate(["/dettaglio-tracciato"], {
            queryParams: { id },
        });
    }
}
