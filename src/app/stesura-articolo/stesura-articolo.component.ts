import { Component } from "@angular/core";
import { MockDataService } from "src/services/articoli.service";

@Component({
    selector: "app-stesura-articolo",
    templateUrl: "./stesura-articolo.component.html",
    styleUrls: ["./stesura-articolo.component.css"],
})
export class StesuraArticoloComponent {
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
