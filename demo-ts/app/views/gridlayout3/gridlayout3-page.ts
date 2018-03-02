/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { Color } from "color";
import { EventData } from "data/observable";
import { Button } from "ui/button";
import * as view from "ui/core/view";
import { Label } from "ui/label";
import { GridLayout, GridUnitType, ItemSpec } from "ui/layouts/grid-layout";
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
   // Grid wrapper
   const grid = new GridLayout();
   grid.backgroundColor = new Color("green");

   // Create title Label and add is as a child to our grid
   const titleLabel = new Label();
   titleLabel.text = "NativeScript";
   grid.addChild(titleLabel);

   // Create info Label and add is as a child to our grid
   const infoLabel = new Label();
   infoLabel.text = "Truly native mobile apps";
   infoLabel.backgroundColor = new Color("gray");
   grid.addChild(infoLabel);

   // Create the share button and add is as a child to our grid
   const shareButton = new Button();
   shareButton.text = "Share This!";
   grid.addChild(shareButton);

   // Add Grid Rows as if rows="*, 100, auto" cols="250, *"

   // * - occupy the remaining available space
   grid.addRow(new ItemSpec(1, GridUnitType.STAR));

   // 100 - fixed column width.
   // If elements in this columns wants to be more - we will coerce their width to the column width.
   grid.addRow(new ItemSpec(100, GridUnitType.PIXEL));

   // auto - the column width will be the width of the widest element in that column.
   grid.addRow(new ItemSpec(1, GridUnitType.AUTO));

   grid.addColumn(new ItemSpec(250, GridUnitType.PIXEL));
   grid.addColumn(new ItemSpec(1, GridUnitType.STAR));

   // Assign views to their row (if not set default row is 0)
   GridLayout.setRow(titleLabel, 0); // titleLabel set to row 0
   GridLayout.setRow(infoLabel, 1);  // infoLabel set to row 1
   GridLayout.setRow(shareButton, 2); // shareButton set to row 2

   // Assign views to their col (if not set default column is 0)
   GridLayout.setColumn(titleLabel, 0); // titleLabel set to column 0
   GridLayout.setColumn(infoLabel, 0);  // infoLabel set to column 0
   GridLayout.setColumn(shareButton, 1); // shareButton set to column 1

   // Assign ColumnSpan for views
   GridLayout.setColumnSpan(infoLabel, 2); // infoLabel set with columnSpan = 2

   // Add Grid to StackLayout
   const page = args.object as Page;
   const stackLayout = view.getViewById(page, "stackLayout1") as StackLayout;
   stackLayout.addChild(grid);

   // Replace Page content by Grid
//    page.content = grid;
}