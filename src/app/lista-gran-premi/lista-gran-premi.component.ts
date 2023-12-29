import { Component } from "@angular/core";
import { MockDataService } from "src/services/lista-gran-premi.service";
@Component({
    selector: "app-lista-gran-premi",
    templateUrl: "./lista-gran-premi.component.html",
    styleUrls: ["./lista-gran-premi.component.css"],
})
export class ListaGranPremiComponent {
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
