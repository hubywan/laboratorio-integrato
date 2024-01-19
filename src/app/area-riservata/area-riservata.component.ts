import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { Router } from "@angular/router";
import * as dayjs from "dayjs";
import "dayjs/locale/it";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-area-riservata",
    templateUrl: "./area-riservata.component.html",
    styleUrls: ["./area-riservata.component.css"],
})
export class AreaRiservataComponent {
    items: any = 0;
    nome: string = "";

    constructor(
        private apiservice: ApiService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.nome = params["nome"];
        });

        this.apiservice.getArticoloUtente().subscribe(
            (data) => {
                this.items = data;
                this.items.forEach((item: any) => {
                    item.dataPubblicazione = this.formatDate(
                        item.dataPublicazione
                    );
                });
                console.log("Dati api ottenuti:", this.items);
                this.getImagesForArticoli(this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }

    redirectToDettaglioArticolo(id: number): void {
        this.router.navigate(["/dettaglio-articolo"], {
            queryParams: { id, nome: this.nome },
        });
    }
    getNomeByRoute(): void {
        this.route.queryParams.subscribe((params) => {
            this.nome = params["nome"];
        });
    }
    redirectToStesuraArticolo(): void {
        this.router.navigate(["/stesura-articolo"]);
    }
    getImmagine(id: number, articolo: any): void {
        this.apiservice.getImmagineArticoli(id).subscribe(
            (data: any) => {
                console.log("Array di byte:", data);
                const blob = new Blob([data], { type: "image/png" });
                const url = window.URL.createObjectURL(blob);
                articolo.imageUrl = url;
            },
            (error) => {
                console.error(
                    "Errore durante il recupero dell'immagine:",
                    error
                );
            }
        );
    }
    getImagesForArticoli(items: any[]): void {
        items.forEach((items) => {
            const id = items.id;
            this.getImmagine(id, items);
        });
    }
    formatDate(apiDateString: string): string {
        const formattedDate = dayjs(apiDateString)
            .locale("it")
            .format("DD MMMM YYYY");
        return formattedDate;
    }
}
