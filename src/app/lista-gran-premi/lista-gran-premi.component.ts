import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import * as dayjs from "dayjs";

@Component({
    selector: "app-lista-gran-premi",
    templateUrl: "./lista-gran-premi.component.html",
    styleUrls: ["./lista-gran-premi.component.css"],
})
export class ListaGranPremiComponent {
    items: any;
    formattedDate: string = "";

    constructor(private apiservice: ApiService) {}

    ngOnInit(): void {
        this.apiservice.getListaGranPremi(2023).subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
