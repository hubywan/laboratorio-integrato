import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";

@Component({
    selector: "app-dettaglio-scuderia",
    templateUrl: "./dettaglio-scuderia.component.html",
    styleUrls: ["./dettaglio-scuderia.component.css"],
})
export class DettaglioScuderieComponent {
    items: any;

    constructor(private apiservice: ApiService) {}

    ngOnInit(): void {
        this.apiservice.getDettaglioScuderia(7).subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
