import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import * as dayjs from "dayjs";
import "dayjs/locale/it";

@Component({
    selector: "app-dettaglio-gran-premio",
    templateUrl: "./dettaglio-gran-premio.component.html",
    styleUrls: ["./dettaglio-gran-premio.component.css"],
})
export class DettaglioGranPremioComponent {
    items: any;
    showAllClassGP = false;
    showAllSprint = false;
    showAllSQ1 = false;
    showAllSQ2 = false;
    showAllSQ3 = false;
    showAllQ1 = false;
    showAllQ2 = false;
    showAllQ3 = false;
    showAllP1 = false;
    showAllP2 = false;
    showAllP3 = false;
    selectedIdGara: number = 1;
    giroVeloceId: number = 0;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedIdGara = +params["idgara"] || this.selectedIdGara;
            this.fetchDataForId(this.selectedIdGara);
        });
    }

    fetchDataForId(idgara: number): void {
        this.apiservice.getDettaglioGranPremio(idgara).subscribe(
            (data) => {
                this.items = data;
                this.items.data = this.formatDate(this.items.data);
                if (this.items.giroVeloce && this.items.giroVeloce.pilota) {
                    this.giroVeloceId = this.items.giroVeloce.pilota.id;
                    console.log(
                        "ID del pilota associato al giro veloce:",
                        this.giroVeloceId
                    );
                }

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
    formatDate(apiDateString: string): string {
        const formattedDate = dayjs(apiDateString)
            .locale("it")
            .format("DD MM YYYY");
        return formattedDate;
    }
}
