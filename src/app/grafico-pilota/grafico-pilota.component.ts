import { Component, AfterViewInit, OnInit } from "@angular/core";
import { MockDataService } from "src/services/grafico-scuderia.service";

declare var Chart: any;

@Component({
    selector: "app-grafico-pilota",
    templateUrl: "./grafico-pilota.component.html",
    styleUrls: ["./grafico-pilota.component.css"],
})
export class GraficoPilotaComponent implements OnInit, AfterViewInit {
    items: any;

    constructor(private mockDataService: MockDataService) {}

    ngOnInit(): void {
        this.mockDataService.getMockData().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati mock ottenuti:", this.items);
                this.createChart();
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    ngAfterViewInit(): void {}

    createChart(): void {
        const ctx = document.getElementById("myChart");
        const years = this.items.map((item: any) => item.annoStagione);
        const points = this.items.map((item: any) => item.punti);

        const myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: years,
                datasets: [
                    {
                        label: "Punti",
                        data: points,
                        borderColor: "rgba(229, 79, 44, 1)",
                        borderWidth: 2,
                        fill: true,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Anno Stagione",
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Punti",
                        },
                        beginAtZero: true,
                    },
                },
            },
        });
    }
}
