import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MockDataService } from "src/services/lista-stagioni.service";

@Component({
    selector: "app-classifiche",
    templateUrl: "./classifiche.component.html",
    styleUrls: ["./classifiche.component.css"],
})
export class ClassificheComponent {
    items: any;

    constructor(
        private mockDataService: MockDataService,
        private router: Router
    ) {}

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
    redirectToClassificheAnno(anno: number): void {
        this.router.navigate(["/classifiche-anno"], {
            queryParams: { anno },
        });
    }
}
