import { Component } from "@angular/core";
import { AutService } from "src/services/post.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-stesura-articolo",
    templateUrl: "./stesura-articolo.component.html",
    styleUrls: ["./stesura-articolo.component.css"],
})
export class StesuraArticoloComponent {
    titolo: string = "";
    testo: string = "";
    immagine: File | undefined;
    dataPubblicazione: string | undefined;
    feedbackMessage: string = "";
    showDataPubblicazione: boolean = false;
    immagineCaricata: boolean = false;

    constructor(private autService: AutService, private router: Router) {}

    handleFileSelect(event: any): void {
        const fileList: FileList = event.target.files;

        if (fileList.length > 0) {
            this.immagine = fileList[0];
            console.log("Nome del file:", this.immagine.name);
            console.log("Tipo del file:", this.immagine.type);
            console.log("Dimensione del file:", this.immagine.size, "bytes");
            this.immagineCaricata = true;
            this.feedbackMessage = "";
        } else {
            console.log("Nessun file selezionato");
        }
    }

    toggleDataPubblicazione(): void {
        this.showDataPubblicazione = !this.showDataPubblicazione;
    }

    publishArticle(): void {
        this.autService
            .creazioneArticolo(
                this.titolo,
                this.testo,
                this.immagine,
                undefined
            )
            .subscribe(
                (response) => {
                    console.log(response);
                    if (response && response.token) {
                        localStorage.setItem(
                            "autenticationToken",
                            response.token
                        );
                    }
                },
                (error) => {
                    console.error(error);
                    this.feedbackMessage =
                        "Operazione di pubblicazione immediata fallita";
                }
            );
    }

    scheduleArticle(): void {
        if (this.showDataPubblicazione && !this.dataPubblicazione) {
            this.feedbackMessage = "Seleziona una data di pubblicazione valida";
            return;
        }

        this.autService
            .creazioneArticolo(
                this.titolo,
                this.testo,
                this.immagine,
                this.showDataPubblicazione ? this.dataPubblicazione : undefined
            )
            .subscribe(
                (response) => {
                    console.log(response);
                    if (response && response.token) {
                        localStorage.setItem(
                            "autenticationToken",
                            response.token
                        );
                    }
                },
                (error) => {
                    console.error(error);
                    this.feedbackMessage =
                        "Operazione di programmazione fallita";
                }
            );
    }

    onSubmit(): void {
        if (this.showDataPubblicazione) {
            this.scheduleArticle();
        } else {
            this.publishArticle();
        }
    }
}
