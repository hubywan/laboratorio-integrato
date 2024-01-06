import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-lista-piloti",
    templateUrl: "./lista-piloti.component.html",
    styleUrls: ["./lista-piloti.component.css"],
})
export class ListaPilotiComponent {
    searchName: string = "";
    items: any;
    selectedYear: number | undefined;
    availableYears: number[] = [];
    selectedFilter: string = "";

    constructor(private apiservice: ApiService, private router: Router) {}

    ngOnInit(): void {
        this.apiservice.getListaPiloti().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    onYearChange(): void {
        if (this.selectedYear) {
            this.apiservice.getListaPilotibyAnno(this.selectedYear).subscribe(
                (data) => {
                    this.items = data;
                    console.log(
                        "Dati filtrati per anno:",
                        this.selectedYear,
                        this.items
                    );
                },
                (error) => {
                    console.error(
                        "Errore durante il recupero dei dati per l'anno:",
                        error
                    );
                }
            );
        } else {
        }
    }
    redirectToDettaglioPilota(id: number): void {
        this.router.navigate(["/dettaglio-pilota"], {
            queryParams: { id },
        });
    }

    get filteredItems(): any[] {
        if (!this.searchName.trim()) {
            return this.items;
        } else {
            return this.items.filter((item: any) =>
                item.nome.toLowerCase().includes(this.searchName.toLowerCase())
            );
        }
    }
}
