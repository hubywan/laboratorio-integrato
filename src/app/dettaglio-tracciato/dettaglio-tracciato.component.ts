import { Component } from "@angular/core";
import { MockDataService } from "src/services/dettaglio-tracciato.service";

@Component({
    selector: "app-dettaglio-tracciato",
    templateUrl: "./dettaglio-tracciato.component.html",
    styleUrls: ["./dettaglio-tracciato.component.css"],
})
export class DettaglioTracciatoComponent {
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
