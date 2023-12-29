import { Component } from "@angular/core";
import { MockDataService } from "src/services/mock-service";

@Component({
    selector: "app-classifica-piloti",
    templateUrl: "./classifica-piloti.component.html",
    styleUrls: ["./classifica-piloti.component.css"],
})
export class ClassificaPilotiComponent {
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
