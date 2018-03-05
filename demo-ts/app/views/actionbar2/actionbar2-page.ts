/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
import { EventData, Observable } from "data/observable";
import * as view from "ui/core/view";
import { Page } from "ui/page";

let context;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */

    const page = args.object as Page;
    if (!context) {
        console.log("初始化 actionbar2 page context");
        context = new Observable();
        page.bindingContext = context;
        page.bindingContext.set("isEditing", false);
    }
}

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    const page = args.object as Page;
}

export function onEdit(args: EventData) {
    console.log("Edit item tapped.");
    const btn = args.object as view.View;
    btn.bindingContext.set("isEditing", true);
}

export function onSave(args: EventData) {
    console.log("Save item tapped.");
    const btn = args.object as view.View;
    btn.bindingContext.set("isEditing", false);
}

export function onCancel(args: EventData) {
    console.log("Cancel item tapped.");
    const btn = args.object as view.View;
    btn.bindingContext.set("isEditing", false);
}
