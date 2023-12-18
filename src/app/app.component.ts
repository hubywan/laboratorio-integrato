import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    hideFooterPaths: string[] = ["/login"];
    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.checkFooterVisibility();
            }
        });
    }
    mostraFooter(): boolean {
        return !this.hideFooterPaths.includes(this.router.url);
    }
    checkFooterVisibility(): void {
        const shouldShowFooter = this.mostraFooter();
        const footerElement = document.querySelector("app-footer");
        if (footerElement) {
            if (shouldShowFooter) {
                footerElement.classList.remove("hide-footer");
            } else {
                footerElement.classList.add("hide-footer");
            }
        }
    }
}
