import { Component, AfterViewInit, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-dettaglio-pilota",
    templateUrl: "./dettaglio-pilota.component.html",
    styleUrls: ["./dettaglio-pilota.component.css"],
})
export class DettaglioPilotaComponent {
    items: any;
    selectedIdPilota: number = 1;
    ElencoPiloti: any;

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
    getPiloti(): void {
        this.apiservice.getListaPiloti().subscribe(
            (data) => {
                this.ElencoPiloti = data;
                console.log("Datai ottenuti:", this.ElencoPiloti);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    fetchDataForId(id: number): void {
        this.apiservice.getDettaglioPilota(id).subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti per id ", id, ":", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    OnSelect() {
        this.getPiloti();
    }
}
