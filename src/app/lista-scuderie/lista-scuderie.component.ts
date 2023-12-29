import { Component } from "@angular/core";
import { MockDataService } from "src/services/lista-scuderie.service";

@Component({
    selector: "app-lista-scuderie",
    templateUrl: "./lista-scuderie.component.html",
    styleUrls: ["./lista-scuderie.component.css"],
})
export class ListaScuderieComponent {
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
