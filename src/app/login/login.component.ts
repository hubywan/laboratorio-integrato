import { Component } from "@angular/core";
import { AutService } from "src/services/autenticazione.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent {
    utente: string = "";
    password: string = "";
    feedbackMessage: string = "";

    constructor(private autService: AutService, private router: Router) {}

    onSubmit(): void {
        this.autService.login(this.utente, this.password).subscribe(
            (response) => {
                console.log(response);
                if (response && response.token) {
                    localStorage.setItem("autenticationToken", response.token);
                    this.router.navigate(["/area-riservata"]);
                }
            },
            (error) => {
                console.error(error);
                this.feedbackMessage = "Credenziali non valide. Riprova.";
            }
        );
    }
}
