import { Component } from "@angular/core";
import { MockDataService } from "src/services/dettaglio-scuderia.service";

@Component({
    selector: "app-dettaglio-scuderia",
    templateUrl: "./dettaglio-scuderia.component.html",
    styleUrls: ["./dettaglio-scuderia.component.css"],
})
export class DettaglioScuderieComponent {
    items: any;

    constructor(private mockDataService: MockDataService) {}

    ngOnInit(): void {
        this.mockDataService.getMockData().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati mock ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
