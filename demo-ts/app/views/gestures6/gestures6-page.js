"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var view = require("ui/core/view");
var gestures_1 = require("ui/gestures");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Add Grid to StackLayout
    var page = args.object;
    // tip label
    var tipLabel = view.getViewById(page, "tipLabel");
    tipLabel.text = "x: None; \ny: None;";
    /**
     * Touch: Action: A finger action was performed.
     */
    var gesturelayout = view.getViewById(page, "gesturelayout");
    gesturelayout.on(gestures_1.GestureTypes.touch, function (argv) {
        console.log("Touch: x: " + argv.getX() + " y: " + argv.getY());
        tipLabel.text = "x: " + (argv.getX() + "") + " \ny: " + (argv.getY() + "");
    });
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZXM2LXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXN0dXJlczYtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7RUFJRTs7QUFHRixtQ0FBcUM7QUFDckMsd0NBQW9GO0FBS3BGLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4Qzs7OztNQUlFO0lBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWMsQ0FBQztBQUNyQyxDQUFDO0FBUEQsb0NBT0M7QUFFRCxrRUFBa0U7QUFDbEUsb0JBQTJCLElBQWU7SUFDdEMsMEJBQTBCO0lBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7SUFFakMsWUFBWTtJQUNaLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBc0IsQ0FBQztJQUN6RSxRQUFRLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRXRDOztPQUVHO0lBQ0gsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFtQixDQUFDO0lBQ2hGLGFBQWEsQ0FBQyxFQUFFLENBQUMsdUJBQVksQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUEyQjtRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFoQkQsZ0NBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlVHlwZXMsIFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0ICogYXMgbGFiZWxNb2R1bGUgZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcbn1cblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcImxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIEFkZCBHcmlkIHRvIFN0YWNrTGF5b3V0XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XG5cbiAgICAvLyB0aXAgbGFiZWxcbiAgICBjb25zdCB0aXBMYWJlbCA9IHZpZXcuZ2V0Vmlld0J5SWQocGFnZSwgXCJ0aXBMYWJlbFwiKSBhcyBsYWJlbE1vZHVsZS5MYWJlbDtcbiAgICB0aXBMYWJlbC50ZXh0ID0gXCJ4OiBOb25lOyBcXG55OiBOb25lO1wiO1xuXG4gICAgLyoqXG4gICAgICogVG91Y2g6IEFjdGlvbjogQSBmaW5nZXIgYWN0aW9uIHdhcyBwZXJmb3JtZWQuXG4gICAgICovXG4gICAgY29uc3QgZ2VzdHVyZWxheW91dCA9IHZpZXcuZ2V0Vmlld0J5SWQocGFnZSwgXCJnZXN0dXJlbGF5b3V0XCIpIGFzIEFic29sdXRlTGF5b3V0O1xuICAgIGdlc3R1cmVsYXlvdXQub24oR2VzdHVyZVR5cGVzLnRvdWNoLCAoYXJndjogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG91Y2g6IHg6IFwiICsgYXJndi5nZXRYKCkgKyBcIiB5OiBcIiArIGFyZ3YuZ2V0WSgpKTtcbiAgICAgICAgdGlwTGFiZWwudGV4dCA9IFwieDogXCIgKyAoYXJndi5nZXRYKCkgKyBcIlwiKSArIFwiIFxcbnk6IFwiICsgKGFyZ3YuZ2V0WSgpICsgXCJcIik7XG4gICAgfSk7XG59XG4iXX0=