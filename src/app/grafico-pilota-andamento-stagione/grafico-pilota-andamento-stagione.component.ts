import { Component, AfterViewInit, OnInit, Input } from "@angular/core";
import { ApiService } from "src/services/api.service";

declare var Chart: any;

@Component({
    selector: "app-grafico-pilota-andamento-stagione",
    templateUrl: "./grafico-pilota-andamento-stagione.component.html",
    styleUrls: ["./grafico-pilota-andamento-stagione.component.css"],
})
export class GraficoPilotaAndamentoStagioneComponent
    implements OnInit, AfterViewInit
{
    items: any;
    @Input() idPilota = 0;
    // selectedIdPilota: number = 25;

    constructor(private apiservice: ApiService) {}
    ngOnInit(): void {
        if (this.idPilota !== 0) {
            this.fetchDataForId(this.idPilota);
        }
    }

    fetchDataForId(id: number): void {
        this.apiservice.getAndamentoStagionePilota(id).subscribe(
            (data) => {
                this.items = data;
                console.log(
                    "Dati api ottenuti per id ",
                    this.idPilota,
                    ":",
                    this.items
                );
                this.createChart();
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    ngAfterViewInit(): void {}

    createChart(): void {
        const ctx = document.getElementById("myChart") as HTMLCanvasElement;
        const years = this.items.map((item: any) => item.competizione.nome);
        const points = this.items.map((item: any) => item.punti);

        let existingChart = Chart.getChart(ctx);
        if (existingChart) {
            existingChart.destroy(); // distruggi il grafico esistente se presente
        }

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
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Giorno Gara",
                            color: "white",
                        },
                        ticks: {
                            color: "white",
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Punti",
                            color: "white",
                        },
                        ticks: {
                            color: "white",
                        },
                        beginAtZero: true,
                    },
                },
            },
        });
    }
}
