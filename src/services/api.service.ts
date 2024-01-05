import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Importa HttpHeaders
import { map } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getDettaglioPilota(id: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };

        return this.http
            .get(`http://localhost:8090/piloti/${id}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getDettaglioScuderia(id: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };

        return this.http
            .get(`http://localhost:8090/scuderie/${id}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }

    getListaGranPremi(anno: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/competizioni/${anno}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getListaPiloti() {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };
        return this.http.get(`http://localhost:8090/piloti`, options).pipe(
            map((data: any) => {
                return data;
            })
        );
    }

    getListaStagioni() {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http.get("http://localhost:8090/stagioni", options).pipe(
            map((data: any) => {
                return data;
            })
        );
    }
    getClassifica(anno: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/piloti/classifica/${anno}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getClassificaScuderie(anno: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/scuderie/classifica/${anno}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getDettaglioGranPremio(idgara: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(
                `http://localhost:8090/competizioni/classifica/${idgara}`,
                options
            )
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
}
