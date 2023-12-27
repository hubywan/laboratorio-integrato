import { Component } from "@angular/core";
import { MockDataService } from "src/services/lista-tracciati.service";

@Component({
    selector: "app-lista-tracciati",
    templateUrl: "./lista-tracciati.component.html",
    styleUrls: ["./lista-tracciati.component.css"],
})
export class ListaTracciatiComponent {
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
