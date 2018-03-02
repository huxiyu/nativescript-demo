/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
import { Color } from "color";
import { EventData } from "data/observable";
import * as ImageModule from "tns-core-modules/ui/image";
import * as view from "ui/core/view";
import {AnimationCurve} from "ui/enums";
import { GestureEventData, GestureTypes } from "ui/gestures";
import { StackLayout } from "ui/layouts/stack-layout";
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
    const page = args.object as Page;

    // https://docs.nativescript.org/ui/animation
    /** Example 1 we will change the background color of a button from
     * "red" to "green". You can use JavaScript or TypeScript code to
     * do the following:
     */
    const example1layout = view.getViewById(page, "example1layout") as StackLayout;
    example1layout.backgroundColor = new Color("red");
    example1layout.on(GestureTypes.tap, (argv: GestureEventData) => {
        example1layout.animate({ backgroundColor: new Color("green"), duration: 2000 });
    });

    /**
     * Example 3: How to customize the animation timing function
     */
    const example3layout = view.getViewById(page, "example3layout") as StackLayout;
    const image3 = view.getViewById(page, "image3") as ImageModule.Image;
    example3layout.on(GestureTypes.tap, (argv: GestureEventData) => {
        image3.animate({
            curve: AnimationCurve.easeIn,
            duration: 1000,
            translate: { x: 300, y: 0},
        });
    });

    /**
     * Example 4: How to create own animation curve via cubic Bezier
     */
    const example4layout = view.getViewById(page, "example4layout") as StackLayout;
    const image4 = view.getViewById(page, "image4") as ImageModule.Image;
    example4layout.on(GestureTypes.tap, (argv: GestureEventData) => {
        image4.animate({
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1),
            duration: 1000,
            translate: { x: 300, y: 0 },
        });
    });
}