import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import * as dayjs from "dayjs";

@Component({
    selector: "app-countdown",
    templateUrl: "./countdown.component.html",
    styleUrls: ["./countdown.component.css"],
})
export class CountdownComponent implements OnInit {
    constructor(private apiservice: ApiService) {}

    items: any;
    futureDate!: dayjs.Dayjs;
    remainingTime: any = {};

    ngOnInit(): void {
        this.getData();
    }

    updateTimeRemaining(): void {
        if (this.items && this.items.length > 0) {
            this.futureDate = dayjs(this.items[0].data);
            const now = dayjs();
            const duration = this.futureDate.diff(now, "second");
            this.remainingTime = this.calculateTimeRemaining(duration);
        }
    }
    calculateTimeRemaining(seconds: number): any {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const remainingSeconds = seconds % 60;

        return {
            days,
            hours,
            minutes,
            seconds: remainingSeconds,
        };
    }
    getData(): void {
        this.apiservice.getStagione2024().subscribe(
            (data) => {
                this.items = data;
                console.log("Dati ottenuti:", this.items);
                this.updateTimeRemaining();
                setInterval(() => {
                    this.updateTimeRemaining();
                }, 1000);
            },
            (error) => {
                console.error("Errore durante il recupero dei dati:", error);
            }
        );
    }
}
