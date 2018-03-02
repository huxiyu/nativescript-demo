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
    tipLabel.text = "Swipe Direction: ";
    /**
     * Swipe: Action: Swiftly slide your finger across the screen.
     * Swipes are quick and affect the screen even after the finger is lifted off the screen.
     * (SwipeDirection: include right, left, up, down)
     */
    var gesturelayout = view.getViewById(page, "gesturelayout");
    gesturelayout.on(gestures_1.GestureTypes.swipe, function (argv) {
        var d;
        if (argv.direction === gestures_1.SwipeDirection.left) {
            d = "left";
        }
        else if (argv.direction === gestures_1.SwipeDirection.right) {
            d = "right";
        }
        else if (argv.direction === gestures_1.SwipeDirection.up) {
            d = "up";
        }
        else if (argv.direction === gestures_1.SwipeDirection.down) {
            d = "down";
        }
        console.log("Swipe Direction: " + d);
        tipLabel.text = "Swipe Direction: " + d;
    });
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZXMyLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXN0dXJlczItcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7RUFJRTs7QUFHRixtQ0FBcUM7QUFDckMsd0NBQW9HO0FBS3BHLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4Qzs7OztNQUlFO0lBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWMsQ0FBQztBQUNyQyxDQUFDO0FBUEQsb0NBT0M7QUFFRCxrRUFBa0U7QUFDbEUsb0JBQTJCLElBQWU7SUFDdEMsMEJBQTBCO0lBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7SUFFakMsWUFBWTtJQUNaLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBc0IsQ0FBQztJQUN6RSxRQUFRLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO0lBRXBDOzs7O09BSUc7SUFDSCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxlQUFlLENBQW1CLENBQUM7SUFDaEYsYUFBYSxDQUFDLEVBQUUsQ0FBQyx1QkFBWSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQTJCO1FBQzdELElBQUksQ0FBUyxDQUFDO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyx5QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyx5QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUsseUJBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUsseUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsR0FBRyxNQUFNLENBQUM7UUFDZixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxRQUFRLENBQUMsSUFBSSxHQUFHLG1CQUFtQixHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUE1QkQsZ0NBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlVHlwZXMsIFN3aXBlRGlyZWN0aW9uLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCAqIGFzIGxhYmVsTW9kdWxlIGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgQWJzb2x1dGVMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XG59XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJsb2FkZWRcIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvLyBBZGQgR3JpZCB0byBTdGFja0xheW91dFxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xuXG4gICAgLy8gdGlwIGxhYmVsXG4gICAgY29uc3QgdGlwTGFiZWwgPSB2aWV3LmdldFZpZXdCeUlkKHBhZ2UsIFwidGlwTGFiZWxcIikgYXMgbGFiZWxNb2R1bGUuTGFiZWw7XG4gICAgdGlwTGFiZWwudGV4dCA9IFwiU3dpcGUgRGlyZWN0aW9uOiBcIjtcblxuICAgIC8qKlxuICAgICAqIFN3aXBlOiBBY3Rpb246IFN3aWZ0bHkgc2xpZGUgeW91ciBmaW5nZXIgYWNyb3NzIHRoZSBzY3JlZW4uXG4gICAgICogU3dpcGVzIGFyZSBxdWljayBhbmQgYWZmZWN0IHRoZSBzY3JlZW4gZXZlbiBhZnRlciB0aGUgZmluZ2VyIGlzIGxpZnRlZCBvZmYgdGhlIHNjcmVlbi5cbiAgICAgKiAoU3dpcGVEaXJlY3Rpb246IGluY2x1ZGUgcmlnaHQsIGxlZnQsIHVwLCBkb3duKVxuICAgICAqL1xuICAgIGNvbnN0IGdlc3R1cmVsYXlvdXQgPSB2aWV3LmdldFZpZXdCeUlkKHBhZ2UsIFwiZ2VzdHVyZWxheW91dFwiKSBhcyBBYnNvbHV0ZUxheW91dDtcbiAgICBnZXN0dXJlbGF5b3V0Lm9uKEdlc3R1cmVUeXBlcy5zd2lwZSwgKGFyZ3Y6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICBsZXQgZDogc3RyaW5nO1xuICAgICAgICBpZiAoYXJndi5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLmxlZnQpIHtcbiAgICAgICAgICAgIGQgPSBcImxlZnRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChhcmd2LmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24ucmlnaHQpIHtcbiAgICAgICAgICAgIGQgPSBcInJpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndi5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLnVwKSB7XG4gICAgICAgICAgICBkID0gXCJ1cFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3YuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5kb3duKSB7XG4gICAgICAgICAgICBkID0gXCJkb3duXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJTd2lwZSBEaXJlY3Rpb246IFwiICsgZCk7XG4gICAgICAgIHRpcExhYmVsLnRleHQgPSBcIlN3aXBlIERpcmVjdGlvbjogXCIgKyBkO1xuICAgIH0pO1xufSJdfQ==