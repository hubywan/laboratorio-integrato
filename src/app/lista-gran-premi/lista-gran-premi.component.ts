import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
    selector: "app-lista-gran-premi",
    templateUrl: "./lista-gran-premi.component.html",
    styleUrls: ["./lista-gran-premi.component.css"],
})
export class ListaGranPremiComponent implements OnInit {
    items: any;
    formattedDate: string = "";
    selectedYear: number = 2023;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedYear = +params["anno"] || this.selectedYear;
            this.fetchDataForYear(this.selectedYear);
        });
    }

    fetchDataForYear(year: number): void {
        this.apiservice.getListaGranPremi(year).subscribe(
            (data) => {
                this.items = data;
                console.log(
                    "Dati API ottenuti per l'anno",
                    year,
                    ":",
                    this.items
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    redirectToDettaglioGranPremio(idgara: number): void {
        this.router.navigate(["/dettaglio-gran-premio"], {
            queryParams: { idgara },
        });
    }
}
