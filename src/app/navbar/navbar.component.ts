import { Component } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
    isOverlayActive = false;

    toggleOverlay() {
        console.log("Toggle Overlay");
        this.isOverlayActive = !this.isOverlayActive;
        console.log("isOverlayActive:", this.isOverlayActive);
    }
}
