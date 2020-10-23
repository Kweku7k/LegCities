import { Component, OnInit } from "@angular/core";
// import { RouterExtensions } from "@nativescript/angular/router";
import { ItemService, Item } from "./usage.service";
// import { ItemEventData } from "tns-core-modules/ui/list-view";
import { DataService, DataItem } from "../shared/data.service";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
// public Teams =["One","Two","Three"];
items: Array<Item>;

    constructor(private _itemService: ItemService) {
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
