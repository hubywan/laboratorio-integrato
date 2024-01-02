import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import Chart from "chart.js/auto";
import { MockDataService } from "src/services/grafico-scuderia.service";

@Component({
    selector: "app-grafico-scuderia",
    templateUrl: "./grafico-scuderia.component.html",
    styleUrls: ["./grafico-scuderia.component.css"],
})
export class GraficoScuderiaComponent {
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
        this.mockDataService.getMockData();
    }
}
