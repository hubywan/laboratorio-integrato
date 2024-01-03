import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
    selector: "app-classifica-scuderie",
    templateUrl: "./classifica-scuderie.component.html",
    styleUrls: ["./classifica-scuderie.component.css"],
})
export class ClassificaScuderieComponent {
    items: any;
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
        this.apiservice.getClassificaScuderie(year).subscribe(
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
    redirectToDettaglioScuderia(id: number): void {
        this.router.navigate(["/dettaglio-scuderia"], {
            queryParams: { id },
        });
    }
}
