import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
    selector: "app-dettaglio-tracciato",
    templateUrl: "./dettaglio-tracciato.component.html",
    styleUrls: ["./dettaglio-tracciato.component.css"],
})
export class DettaglioTracciatoComponent implements OnInit {
    items: any;
    selectedIdPilota: number = 1;
    safeVideoUrl: SafeResourceUrl | undefined;

    constructor(
        private apiservice: ApiService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedIdPilota = +params["id"] || this.selectedIdPilota;
            this.fetchDataForId(this.selectedIdPilota);
        });
    }

    fetchDataForId(id: number): void {
        this.apiservice.getDettaglioCircuito(id).subscribe(
            (data) => {
                this.items = data;
                console.log("Dati api ottenuti per id", id, ":", this.items);
                this.safeVideoUrl =
                    this.sanitizer.bypassSecurityTrustResourceUrl(
                        this.items.video
                    );
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
