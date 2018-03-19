/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, Observable } from "data/observable";
// import { View } from "ui/core/view"
import * as frames from "ui/frame";
import { GestureEventData } from "ui/gestures";
import { Label } from "ui/label";
import { Page } from "ui/page";
import { MainModel } from "../../models/main/main-view-model";
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
    const dataItem = args.object;
    console.log("main-page tap framename: " + dataItem.framename);
    // console.log(" dataItem: " + JSON.stringify(dataItem));

    // Navigate to page
    frames.topmost().navigate("views/" + dataItem.framename + "/" + dataItem.framename + "-page");
}

export function navigate3Tap(args) {
    /**
     * Navigate using a function:
     * Example 3: How to navigate to a page dynamically created via code.
     */
    const factoryFunc = (): Page => {
        const label = new Label();
        label.text = "Hello, world! Example 3: How to navigate to a page dynamically created via code.";
        const page = new Page();
        page.content = label;
        return page;
    };
    frames.topmost().navigate(factoryFunc);
}

export function navigate4Tap(args) {
    /**
     * Navigate and pass context:
     * Example 4: How to pass content between different pages.
     */
    const navigationEntry = {
        animated: false,
        context: { info: "something you want to pass to your page" },
        moduleName: "views/pagemanagement4/pagemanagement4-page",
    };
    frames.topmost().navigate(navigationEntry);
}

export function navigate5Tap(args) {
    /**
     * Navigate and set bindingContext to the page:
     * Example 5: How to provide bindingContext automaticlly while navigating to a page.
     */
    // Navigate to page called “my-page” and provide "bindingContext"
    frames.topmost().navigate({
        bindingContext: new MainModel(),
        moduleName: "views/pagemanagement5/pagemanagement5-page",
    });
}
