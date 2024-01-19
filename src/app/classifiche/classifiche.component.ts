import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/services/api.service";

@Component({
    selector: "app-classifiche",
    templateUrl: "./classifiche.component.html",
    styleUrls: ["./classifiche.component.css"],
})
export class ClassificheComponent {
    items: any;

    constructor(private apiservice: ApiService, private router: Router) {}

    ngOnInit(): void {
        this.apiservice.getListaStagioni().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    redirectToClassificheAnno(anno: number): void {
        this.router.navigate(["/classifiche-anno/piloti"], {
            queryParams: { anno },
        });
    }
}
