import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-dettaglio-scuderia",
    templateUrl: "./dettaglio-scuderia.component.html",
    styleUrls: ["./dettaglio-scuderia.component.css"],
})
export class DettaglioScuderieComponent {
    items: any;
    selectedIdScuderia: number = 1;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedIdScuderia = +params["id"] || this.selectedIdScuderia;
            this.fetchDataForId(this.selectedIdScuderia);
        });
    }
    fetchDataForId(idgara: number): void {
        this.apiservice.getDettaglioScuderia(idgara).subscribe(
            (data) => {
                this.items = data;
                console.log(
                    "Dati api ottenuti per id ",
                    idgara,
                    ":",
                    this.items
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
