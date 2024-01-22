import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
    isOverlayActive = false;
    currentPage: string = "";

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                this.currentPage =
                    this.activatedRoute.snapshot.routeConfig?.path || "";
            });
    }

    toggleOverlay() {
        console.log("Toggle Overlay");
        this.isOverlayActive = !this.isOverlayActive;
        console.log("isOverlayActive:", this.isOverlayActive);
    }
}
