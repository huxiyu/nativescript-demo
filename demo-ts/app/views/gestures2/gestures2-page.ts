/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "data/observable";
import * as view from "ui/core/view";
import { GestureEventData, GestureTypes, SwipeDirection, SwipeGestureEventData } from "ui/gestures";
import * as labelModule from "ui/label";
import { AbsoluteLayout } from "ui/layouts/absolute-layout";
import { Page } from "ui/page";

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
    // Add Grid to StackLayout
    const page = args.object as Page;

    // tip label
    const tipLabel = view.getViewById(page, "tipLabel") as labelModule.Label;
    tipLabel.text = "Swipe Direction: ";

    /**
     * Swipe: Action: Swiftly slide your finger across the screen.
     * Swipes are quick and affect the screen even after the finger is lifted off the screen.
     * (SwipeDirection: include right, left, up, down)
     */
    const gesturelayout = view.getViewById(page, "gesturelayout") as AbsoluteLayout;
    gesturelayout.on(GestureTypes.swipe, (argv: SwipeGestureEventData) => {
        let d: string;
        if (argv.direction === SwipeDirection.left) {
            d = "left";
        } else if (argv.direction === SwipeDirection.right) {
            d = "right";
        } else if (argv.direction === SwipeDirection.up) {
            d = "up";
        } else if (argv.direction === SwipeDirection.down) {
            d = "down";
        }
        console.log("Swipe Direction: " + d);
        tipLabel.text = "Swipe Direction: " + d;
    });
}