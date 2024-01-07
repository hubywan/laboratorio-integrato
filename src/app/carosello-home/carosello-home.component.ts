import { Component } from "@angular/core";

@Component({
    selector: "app-carosello-home",
    templateUrl: "./carosello-home.component.html",
    styleUrls: ["./carosello-home.component.css"],
})
export class CaroselloHomeComponent {
    carosello: any = [
        {
            nazione: "BAHRAIN",
            nome: "Bahrain Grand Prix",
            giorni: "29-02",
            mese: "febbraio-marzo",
        },
        {
            nazione: "SAUDI ARABIA",
            nome: "Saudi Arabian Grand Prix",
            giorni: "07-09",
            mese: "marzo",
        },
        {
            nazione: "AUSTRALIA",
            nome: "Australian Grand Prix",
            giorni: "22-24",
            mese: "marzo",
        },
        {
            nazione: "JAPAN",
            nome: "Japanese Grand Prix",
            giorni: "05-07",
            mese: "aprile",
        },
        {
            nazione: "CHINA",
            nome: "Chinese Grand Prix",
            giorni: "19-21",
            mese: "aprile",
        },
        {
            nazione: "UNITED STATES",
            nome: "Miami Grand Prix",
            giorni: "03-05",
            mese: "maggio",
        },
        {
            nazione: "ITALY",
            nome: "Gran Premio dell'emilia Romagna",
            giorni: "17-19",
            mese: "maggio",
        },
        {
            nazione: "MONACO",
            nome: "Gran Prix de Monaco",
            giorni: "24-26",
            mese: "maggio",
        },
        {
            nazione: "CANADA",
            nome: "Gran Prix du Canada",
            giorni: "07-09",
            mese: "giugno",
        },
        {
            nazione: "SPAIN",
            nome: "Gran Premio de Espana",
            giorni: "21-23",
            mese: "giugno",
        },
        {
            nazione: "AUSTRIA",
            nome: "Austrian Grand Prix",
            giorni: "28-30",
            mese: "giugno",
        },
        {
            nazione: "GREAT BRITAIN",
            nome: "British Grand Prix",
            giorni: "05-07",
            mese: "luglio",
        },
        {
            nazione: "HUNGARY",
            nome: "Hungaria Grand Prix",
            giorni: "19-21",
            mese: "luglio",
        },
        {
            nazione: "BELGIUM",
            nome: "Belgium Grand Prix",
            giorni: "26-28",
            mese: "luglio",
        },
        {
            nazione: "NETHERLANDS",
            nome: "Dutch Grand Prix",
            giorni: "23-25",
            mese: "agosto",
        },
        {
            nazione: "ITALY",
            nome: "Gran Premio d'Italia",
            giorni: "30-01",
            mese: "agosto-settembre",
        },
        {
            nazione: "AZERBAIJAN",
            nome: "Azerbaijan Grand Prix",
            giorni: "13-15",
            mese: "settembre",
        },
        {
            nazione: "SINGAPORE",
            nome: "Singapore Grand Prix",
            giorni: "20-22",
            mese: "settembre",
        },
        {
            nazione: "UNITED STATES",
            nome: "United States Grand Prix",
            giorni: "18-20",
            mese: "ottobre",
        },
        {
            nazione: "MEXICO",
            nome: "Gran Premio de la ciudad de Mexico",
            giorni: "25-27",
            mese: "ottobre",
        },
        {
            nazione: "BRAZIL",
            nome: "Brazilian Grand Prix",
            giorni: "01-03",
            mese: "novembre",
        },
        {
            nazione: "UNITED STATES",
            nome: "Las Vegas Grand Prix",
            giorni: "21-23",
            mese: "novembre",
        },
        {
            nazione: "QATAR",
            nome: "Qatar Grand Prix",
            giorni: "29-01",
            mese: "novembre-dicembre",
        },
        {
            nazione: "ABU-DHABI",
            nome: "Abu Dhabi Grand Prix",
            giorni: "06-08",
            mese: "dicembre",
        },
    ];
}
