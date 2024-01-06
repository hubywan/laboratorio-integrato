import { Component, AfterViewInit, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-dettaglio-articolo",
    templateUrl: "./dettaglio-articolo.component.html",
    styleUrls: ["./dettaglio-articolo.component.css"],
})
export class DettaglioArticoloComponent {
    items: any;
    selectedIdArticolo: number = 1;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedIdArticolo = +params["id"] || this.selectedIdArticolo;
            this.fetchDataForId(this.selectedIdArticolo);
        });
    }

    fetchDataForId(id: number): void {
        this.apiservice.getDettaglioArticolo(id).subscribe(
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
