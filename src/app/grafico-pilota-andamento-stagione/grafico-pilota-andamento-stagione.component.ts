import { Component, AfterViewInit, OnInit, Input } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

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
    selectedIdPilota: number = 25;

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
        this.apiservice.getAndamentoStagionePilota(id).subscribe(
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
        const years = this.items.map((item: any) => item.competizione.nome);
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
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Giorno Gara",
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
