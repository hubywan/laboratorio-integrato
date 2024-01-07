import { Component, AfterViewInit, OnInit, Input } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

declare var Chart: any;

@Component({
    selector: "app-tabella-pilota-andamento-stagione",
    templateUrl: "./tabella-pilota-andamento-stagione.component.html",
    styleUrls: ["./tabella-pilota-andamento-stagione.component.css"],
})
export class TabellaPilotaAndamentoStagioneComponent {
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
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
