import { Component, AfterViewInit, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

declare var Chart: any;

@Component({
    selector: "app-grafico-scuderia",
    templateUrl: "./grafico-scuderia.component.html",
    styleUrls: ["./grafico-scuderia.component.css"],
})
export class GraficoScuderiaComponent implements OnInit, AfterViewInit {
    items: any;
    selectedIdPilota: number = 1;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedIdPilota = +params["id"] || this.selectedIdPilota;
            this.fetchDataForId(this.selectedIdPilota);
        });
    }

    fetchDataForId(id: number): void {
        this.apiservice.getAndamentoScuderia(id).subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti per id ", id, ":", this.items);
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
