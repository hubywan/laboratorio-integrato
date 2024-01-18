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
    feedbackMessage: string = "";

    constructor(private autService: AutService) {}

    onSubmit(): void {
        this.autService.creazioneArticolo(this.titolo, this.testo).subscribe(
            (response) => {
                console.log(response);
                if (response && response.token) {
                    localStorage.setItem("autenticationToken", response.token);
                }
            },
            (error) => {
                console.error(error);
                this.feedbackMessage = "operazione fallita";
            }
        );
    }
}
