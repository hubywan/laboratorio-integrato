import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { MockDataService } from "src/services/lista-gran-premi.service";
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
        private route: ActivatedRoute
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

export class ListaGranPremiComponent {
    items: any;

    constructor(private mockDataService: MockDataService) {}

    ngOnInit(): void {
        this.mockDataService.getMockData().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati mock ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
