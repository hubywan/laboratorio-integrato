import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AutService {
    private loginURL = "http://localhost:8090/areariservata/login";

    constructor(private http: HttpClient) {}

    login(utente: string, password: string): Observable<any> {
        const body = { utente, password };
        return this.http.post(`${this.loginURL}`, body);
    }
}
