import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AutService {
    private loginURL = "http://localhost:8090/areariservata/login";
    private creazioneURL = "http://localhost:8090/articoli/nuovo";

    constructor(private http: HttpClient) {}

    login(utente: string, password: string): Observable<any> {
        const body = { utente, password };
        return this.http.post(`${this.loginURL}`, body);
    }
    creazioneArticolo(
        titolo: string,
        testo: string,
        immagine: any,
        dataPubblicazione: string | undefined
    ): Observable<any> {
        const autToken = localStorage.getItem("autenticationToken");
        if (autToken) {
            var formData = new FormData();
            formData.append("titolo", titolo);
            formData.append("testo", testo);
            formData.append("immagine", immagine);

            if (dataPubblicazione) {
                formData.append("dataPubblicazione", dataPubblicazione);
            }

            const headers = new HttpHeaders({
                Authorization: autToken,
            });

            const options = {
                headers: headers,
            };

            return this.http.post(`${this.creazioneURL}`, formData, options);
        } else {
            console.error("Token non trovato nel local storage");
            return new Observable();
        }
    }
}
