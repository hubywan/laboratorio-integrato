import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-dettaglio-gran-premio",
    templateUrl: "./dettaglio-gran-premio.component.html",
    styleUrls: ["./dettaglio-gran-premio.component.css"],
})
export class DettaglioGranPremioComponent {
    items: any;
    selectedIdGara: number = 1;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedIdGara = +params["idgara"] || this.selectedIdGara;
            this.fetchDataForId(this.selectedIdGara); // Passa this.selectedIdGara alla funzione
        });
    }

    fetchDataForId(idgara: number): void {
        // Aggiungi il parametro idgara
        this.apiservice.getDettaglioGranPremio(idgara).subscribe(
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
