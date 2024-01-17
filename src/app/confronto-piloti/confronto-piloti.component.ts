import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "src/services/api.service";

@Component({
    selector: "app-confronto-piloti",
    templateUrl: "./confronto-piloti.component.html",
    styleUrls: ["./confronto-piloti.component.css"],
})
export class ConfrontoPilotiComponent implements OnInit {
    items: any;
    secondItems: any;
    elencoPiloti: any;
    @Input() idPilota = 0;

    constructor(private apiservice: ApiService) {}

    ngOnInit(): void {
        if (this.idPilota !== 0) {
            this.fetchDataForId(this.idPilota);
        }
        this.getListaPiloti();
    }

    fetchDataForId(id: number): void {
        this.apiservice.getDettaglioPilota(id).subscribe(
            (data) => {
                this.items = data;
                console.log(
                    "Dati api ottenuti per id ",
                    this.idPilota,
                    ":",
                    this.items
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    fetchDataForSecodId(id: number): void {
        this.apiservice.getDettaglioPilota(id).subscribe(
            (data) => {
                this.secondItems = data;
                console.log(
                    "Dati API ottenuti per id ",
                    id,
                    ":",
                    this.secondItems
                );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    getListaPiloti(): void {
        this.apiservice.getListaPiloti().subscribe(
            (data) => {
                this.elencoPiloti = data;
                console.log("Dati api ottenuti per id ", this.elencoPiloti);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    onPilotaSelection(event: Event): void {
        const selectedId = (event.target as HTMLSelectElement).value;

        if (selectedId) {
            this.fetchDataForSecodId(Number(selectedId));
        }
    }
}
