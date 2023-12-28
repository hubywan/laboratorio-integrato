import { Component } from "@angular/core";
import { ApiService } from "src/services/dettaglio-pilota.service";
@Component({
    selector: "app-dettaglio-pilota",
    templateUrl: "./dettaglio-pilota.component.html",
    styleUrls: ["./dettaglio-pilota.component.css"],
})
export class DettaglioPilotaComponent {
    items: any;

    constructor(private apiservice: ApiService) {}

    ngOnInit(): void {
        this.apiservice.getDettaglioPilota(2).subscribe(
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
