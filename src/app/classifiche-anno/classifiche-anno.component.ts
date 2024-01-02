import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-classifiche-anno",
    templateUrl: "./classifiche-anno.component.html",
    styleUrls: ["./classifiche-anno.component.css"],
})
export class ClassificheAnnoComponent {
    constructor(private route: ActivatedRoute) {}
    isActive(routeName: string): boolean {
        return this.route.snapshot.routeConfig?.path === routeName;
    }
}
