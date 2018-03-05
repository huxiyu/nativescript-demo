/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, Observable } from "data/observable";
import * as frames from "ui/frame";
import { GestureEventData } from "ui/gestures";
// import { View } from "ui/core/view"
import { Page } from "ui/page";
import { MainModel } from "../../view_models/main/main-view-model";
// To import the "ui/frame" module:

let context;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    console.log("navigatingTo main-page");

    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = args.object as Page;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    // page.bindingContext = new MainModel();
    if (!context) {
        context = new MainModel();
        console.log("初始化 context");
        page.bindingContext = context;
    }
}

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    const page = args.object as Page;
    console.log("pageLoaded main-page");
}

export function buttonTap(args: GestureEventData) {
    context.onTap();
}

export function frameButtonTap(args) {
    // Get the event sender
    console.log("frameButtonTap");
    const dataItem = args.object;
    console.log("framename: " + dataItem.framename);
    // console.log(" dataItem: " + JSON.stringify(dataItem));

    // Navigate to page
    frames.topmost().navigate("views/" + dataItem.framename + "/" + dataItem.framename + "-page");
}