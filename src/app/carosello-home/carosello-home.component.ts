import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";
import * as dayjs from "dayjs";
import "dayjs/locale/it";

@Component({
    selector: "app-carosello-home",
    templateUrl: "./carosello-home.component.html",
    styleUrls: ["./carosello-home.component.css"],
})
export class CaroselloHomeComponent {
    items: any;
    constructor(private apiservice: ApiService) {}
    ngOnInit(): void {
        this.apiservice.getStagione2024().subscribe(
            (data) => {
                this.items = data;
                this.items.forEach((item: any) => {
                    item.dataDay = this.formatDateDay(item.data);
                    item.dataMonth = this.formatDateMonth(item.data);
                });
                console.log("Datai ottenuti:", this.items);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
    formatDateDay(apiDateString: string): string {
        const formattedDate = dayjs(apiDateString).locale("it").format("DD");
        return formattedDate;
    }
    formatDateMonth(apiDateString: string): string {
        const formattedDate = dayjs(apiDateString).locale("it").format("MMMM");
        return formattedDate;
    }
}
