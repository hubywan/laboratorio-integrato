import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-classifica-piloti",
    templateUrl: "./classifica-piloti.component.html",
    styleUrls: ["./classifica-piloti.component.css"],
})
export class ClassificaPilotiComponent {
    items: any;
    selectedYear: number = 2023;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedYear = +params["anno"] || this.selectedYear;
            this.fetchDataForYear(this.selectedYear);
        });
    }
    fetchDataForYear(year: number): void {
        this.apiservice.getClassifica(year).subscribe(
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
}
