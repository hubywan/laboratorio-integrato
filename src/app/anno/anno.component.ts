import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-anno",
    templateUrl: "./anno.component.html",
    styleUrls: ["./anno.component.css"],
})
export class AnnoComponent {
    selectedYear: number = 2023;

    constructor(private route: ActivatedRoute) {}
    isActive(routeName: string): boolean {
        return this.route.snapshot.routeConfig?.path === routeName;
    }
    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.selectedYear = +params["anno"] || this.selectedYear;
        });
    }
}
