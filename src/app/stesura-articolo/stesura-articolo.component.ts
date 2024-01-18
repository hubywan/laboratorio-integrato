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
    immagine: File | undefined; // Definire una variabile per l'immagine
    feedbackMessage: string = "";

    constructor(private autService: AutService) {}
    handleFileSelect(event: any): void {
        const fileList: FileList = event.target.files;

        if (fileList.length > 0) {
            this.immagine = fileList[0];
            console.log("Nome del file:", this.immagine.name);
            console.log("Tipo del file:", this.immagine.type);
            console.log("Dimensione del file:", this.immagine.size, "bytes");
        } else {
            console.log("Nessun file selezionato");
        }
    }
    onSubmit(): void {
        console.log(this.immagine);
        this.autService
            .creazioneArticolo(this.titolo, this.testo, this.immagine)
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
                    this.feedbackMessage = "operazione fallita";
                }
            );
    }
}
