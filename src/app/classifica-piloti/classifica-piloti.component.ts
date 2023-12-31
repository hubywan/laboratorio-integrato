import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
    selector: "app-classifica-piloti",
    templateUrl: "./classifica-piloti.component.html",
    styleUrls: ["./classifica-piloti.component.css"],
})
export class ClassificaPilotiComponent {
    items: any;
    selectedYear: number = 2023;
    id: number = 1;
    showMoreData: boolean[] = [];
    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}
    showGrafico: boolean = true;
    showTabella: boolean = false;

    mostraGrafico() {
        this.showGrafico = true;
        this.showTabella = false;
    }

    mostraTabella() {
        this.showTabella = true;
        this.showGrafico = false;
    }
    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedYear = +params["anno"] || this.selectedYear;
            this.fetchDataForYear(this.selectedYear);
            this.initializeShowMoreData();
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
    redirectToDettaglioPilota(id: number): void {
        this.router.navigate(["/dettaglio-pilota"], {
            queryParams: { id },
        });
    }
    initializeShowMoreData() {
        this.showMoreData = this.items.map(() => false);
    }

    toggleMoreData(index: number, id: number) {
        this.showMoreData[index] = !this.showMoreData[index];
        if (!this.showMoreData[index]) {
            this.router.navigate(["/classifiche-anno/piloti"]);
        } else {
            this.router.navigate(["/classifiche-anno/piloti"], {
                queryParams: { id },
            });
        }
    }
}
