import { Component } from "@angular/core";
import { MockDataService } from "src/services/lista-piloti.service";

@Component({
    selector: "app-lista-piloti",
    templateUrl: "./lista-piloti.component.html",
    styleUrls: ["./lista-piloti.component.css"],
})
export class ListaPilotiComponent {
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
