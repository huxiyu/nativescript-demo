/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
import { EventData } from "data/observable";
import * as view from "ui/core/view";
import * as frames from "ui/frame";
import * as labelModule from "ui/label";
import { Page } from "ui/page";

let tipLabel: labelModule.Label;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = args.object as Page;
}

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    const page = args.object as Page;

    // tip label
    tipLabel = view.getViewById(page, "tipLabel") as labelModule.Label;
    tipLabel.text = "";
}

export function onNavBtnTap() {
    // This code will be called only in Android.
    console.log("Navigation button tapped!");
    frames.goBack();
}

export function onShare(args: EventData) {
    console.log("Share action item tapped.");
    tipLabel.text = "Share action item tapped.";
}

export function onDelete(args: EventData) {
    console.log("Delete action item tapped.");
    tipLabel.text = "Delete action item tapped.";
}