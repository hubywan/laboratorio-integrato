import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Importa HttpHeaders
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getDettaglioCircuito(id: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };

        return this.http
            .get(`http://localhost:8090/circuiti/${id}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
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
    getListaPilotibyAnno(anno: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/piloti?anno=${anno}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getListaDettagliobyAnno(anno: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/scuderie?anno=${anno}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getListaCircuitibyAnno(anno: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/circuiti?anno=${anno}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getListaCircuiti() {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };
        return this.http.get(`http://localhost:8090/circuiti`, options).pipe(
            map((data: any) => {
                return data;
            })
        );
    }
    getListaScuderie() {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
        });
        const options = {
            headers: headers,
        };
        return this.http.get(`http://localhost:8090/scuderie`, options).pipe(
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
    getAndamentoScuderia(id: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/scuderie/${id}/andamento`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }

    getAndamentoPilota(id: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/piloti/${id}/andamento`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getAndamentoStagionePilota(id: number | null) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(
                `http://localhost:8090/piloti/${id}/andamentostagione`,
                options
            )
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getArticoli() {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/articoli/recenti`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getDettaglioArticolo(id: number) {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        });
        const options = {
            headers: headers,
        };
        return this.http
            .get(`http://localhost:8090/articoli/${id}`, options)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getImmagineArticoli(id: number): Observable<any> {
        const headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            // Il tipo di content type potrebbe variare a seconda del server
            // Ad esempio, per un array di byte, potrebbe essere "application/octet-stream"
            "Content-Type": "application/octet-stream",
        });

        const options = {
            headers: headers,
            responseType: "arraybuffer" as "json", // Imposta responseType a 'arraybuffer' per ricevere un array di byte
        };

        return this.http.get(
            `http://localhost:8090/articoli/${id}/img`,
            options
        );
    }
}
