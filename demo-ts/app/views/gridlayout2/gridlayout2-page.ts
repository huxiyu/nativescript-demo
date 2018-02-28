/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { Color } from "color";
import { EventData } from "data/observable";
import { Button } from "ui/button";
import { Label } from "ui/label";
import { GridLayout, GridUnitType, ItemSpec } from "ui/layouts/grid-layout";
import { Page } from "ui/page";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;
    
}

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {  
   const page = <Page>args.object;
}