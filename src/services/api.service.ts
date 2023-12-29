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
}
