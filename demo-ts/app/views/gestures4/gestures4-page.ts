/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "data/observable";
import * as view from "ui/core/view";
import { GestureEventData, GestureTypes, PinchGestureEventData } from "ui/gestures";
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
    tipLabel.text = "Pinch Scale: None";

    /**
     * Pinch: Action: Touch the screen using two of your fingers,
     * then move them towards each other or away from each other.
     */
    const gesturelayout = view.getViewById(page, "gesturelayout") as AbsoluteLayout;
    gesturelayout.on(GestureTypes.pinch, (argv: PinchGestureEventData) => {
        console.log("Pinch Scale: " + argv.scale);
        gesturelayout.scaleX = argv.scale;
        tipLabel.text = "Pinch Scale: " + argv.scale;
    });
}
