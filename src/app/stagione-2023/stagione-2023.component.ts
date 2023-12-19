import { Component } from "@angular/core";
import { MockDataService } from "src/services/mock-service";

@Component({
    selector: "app-stagione-2023",
    templateUrl: "./stagione-2023.component.html",
    styleUrls: ["./stagione-2023.component.css"],
})
export class Stagione2023Component {
    items: any;

    constructor(private mockDataService: MockDataService) {}

    ngOnInit(): void {
        this.mockDataService.getMockData().subscribe(
            (data) => {
                this.items = data.classifica;
                console.log("Dati mock ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
