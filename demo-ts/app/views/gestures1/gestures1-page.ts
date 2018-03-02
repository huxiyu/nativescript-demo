/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { Color } from "color";
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
    // const page = <Page>args.object;

}

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Add Grid to StackLayout
    const page = args.object as Page;

    // tip label
    const tipLabel = view.getViewById(page, "tipLabel") as labelModule.Label;
    tipLabel.text = "Result: None";

    /**
     * Tap: Action: Briefly touch the screen.
     */
    // create label
    const label = new labelModule.Label();
    label.backgroundColor = new Color("yellow");
    label.width = 200;
    label.height = 200;
    label.on(GestureTypes.tap, (argv: GestureEventData) => {
        console.log("Tap");
        tipLabel.text = "Result: Tap";
    });
    // add label
    const tapLayout = view.getViewById(page, "tapLayout") as AbsoluteLayout;
    tapLayout.addChild(label);

    /**
     * Double Tap: Action: Two taps in a quick succession.
     */
    const doubleTapLayout = view.getViewById(page, "doubleTapLayout") as AbsoluteLayout;
    doubleTapLayout.on(GestureTypes.doubleTap, (argv: GestureEventData) => {
        console.log("Double Tap");
        tipLabel.text = "Result: Double Tap";
    });

    /**
     * Long Press: Action: Press your finger against the screen for a few moments.
     */
    const longPressLayout = view.getViewById(page, "longPressLayout") as AbsoluteLayout;
    longPressLayout.on(GestureTypes.longPress, (argv) => {
        console.log("Long Press");
        tipLabel.text = "Result: Long Press";
    });

}
