"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// import { View } from "ui/core/view"
var frames = require("ui/frame");
var label_1 = require("ui/label");
var page_1 = require("ui/page");
var main_view_model_1 = require("../../models/main/main-view-model");
// To import the "ui/frame" module:
var context;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    console.log("navigatingTo main-page");
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
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
        context = new main_view_model_1.MainModel();
        console.log("初始化 context");
        page.bindingContext = context;
    }
}
exports.navigatingTo = navigatingTo;
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    console.log("pageLoaded main-page");
}
exports.pageLoaded = pageLoaded;
function buttonTap(args) {
    context.onTap();
}
exports.buttonTap = buttonTap;
function frameButtonTap(args) {
    var dataItem = args.object;
    console.log("main-page tap framename: " + dataItem.framename);
    // console.log(" dataItem: " + JSON.stringify(dataItem));
    // Navigate to page
    frames.topmost().navigate("views/" + dataItem.framename + "/" + dataItem.framename + "-page");
}
exports.frameButtonTap = frameButtonTap;
function navigate3Tap(args) {
    /**
     * Navigate using a function:
     * Example 3: How to navigate to a page dynamically created via code.
     */
    var factoryFunc = function () {
        var label = new label_1.Label();
        label.text = "Hello, world! Example 3: How to navigate to a page dynamically created via code.";
        var page = new page_1.Page();
        page.content = label;
        return page;
    };
    frames.topmost().navigate(factoryFunc);
}
exports.navigate3Tap = navigate3Tap;
function navigate4Tap(args) {
    /**
     * Navigate and pass context:
     * Example 4: How to pass content between different pages.
     */
    var navigationEntry = {
        animated: false,
        context: { info: "something you want to pass to your page" },
        moduleName: "views/pagemanagement4/pagemanagement4-page",
    };
    frames.topmost().navigate(navigationEntry);
}
exports.navigate4Tap = navigate4Tap;
function navigate5Tap(args) {
    /**
     * Navigate and set bindingContext to the page:
     * Example 5: How to provide bindingContext automaticlly while navigating to a page.
     */
    // Navigate to page called “my-page” and provide "bindingContext"
    frames.topmost().navigate({
        bindingContext: new main_view_model_1.MainModel(),
        moduleName: "views/pagemanagement5/pagemanagement5-page",
    });
}
exports.navigate5Tap = navigate5Tap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUdGLHNDQUFzQztBQUN0QyxpQ0FBbUM7QUFFbkMsa0NBQWlDO0FBQ2pDLGdDQUErQjtBQUMvQixxRUFBOEQ7QUFDOUQsbUNBQW1DO0FBRW5DLElBQUksT0FBTyxDQUFDO0FBRVosd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUV0Qzs7OztNQUlFO0lBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWMsQ0FBQztJQUVqQzs7Ozs7Ozs7O01BU0U7SUFDRix5Q0FBeUM7SUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1gsT0FBTyxHQUFHLElBQUksMkJBQVMsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDbEMsQ0FBQztBQUNMLENBQUM7QUExQkQsb0NBMEJDO0FBRUQsa0VBQWtFO0FBQ2xFLG9CQUEyQixJQUFlO0lBQ3RDLHVCQUF1QjtJQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBSkQsZ0NBSUM7QUFFRCxtQkFBMEIsSUFBc0I7SUFDNUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFGRCw4QkFFQztBQUVELHdCQUErQixJQUFJO0lBQy9CLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQseURBQXlEO0lBRXpELG1CQUFtQjtJQUNuQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ2xHLENBQUM7QUFQRCx3Q0FPQztBQUVELHNCQUE2QixJQUFJO0lBQzdCOzs7T0FHRztJQUNILElBQU0sV0FBVyxHQUFHO1FBQ2hCLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLElBQUksR0FBRyxrRkFBa0YsQ0FBQztRQUNoRyxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBYkQsb0NBYUM7QUFFRCxzQkFBNkIsSUFBSTtJQUM3Qjs7O09BR0c7SUFDSCxJQUFNLGVBQWUsR0FBRztRQUNwQixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSx5Q0FBeUMsRUFBRTtRQUM1RCxVQUFVLEVBQUUsNENBQTRDO0tBQzNELENBQUM7SUFDRixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFYRCxvQ0FXQztBQUVELHNCQUE2QixJQUFJO0lBQzdCOzs7T0FHRztJQUNILGlFQUFpRTtJQUNqRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ3RCLGNBQWMsRUFBRSxJQUFJLDJCQUFTLEVBQUU7UUFDL0IsVUFBVSxFQUFFLDRDQUE0QztLQUMzRCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVkQsb0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG4vLyBpbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiXG5pbXBvcnQgKiBhcyBmcmFtZXMgZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBNYWluTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL21haW4vbWFpbi12aWV3LW1vZGVsXCI7XG4vLyBUbyBpbXBvcnQgdGhlIFwidWkvZnJhbWVcIiBtb2R1bGU6XG5cbmxldCBjb250ZXh0O1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRpbmdUbyBtYWluLXBhZ2VcIik7XG5cbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XG5cbiAgICAvKlxuICAgIEEgcGFnZeKAmXMgYmluZGluZ0NvbnRleHQgaXMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcGVyZm9ybVxuICAgIGRhdGEgYmluZGluZyBiZXR3ZWVuIFhNTCBtYXJrdXAgYW5kIFR5cGVTY3JpcHQgY29kZS4gUHJvcGVydGllc1xuICAgIG9uIHRoZSBiaW5kaW5nQ29udGV4dCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgdGhlIHt7IH19IHN5bnRheCBpbiBYTUwuXG4gICAgSW4gdGhpcyBleGFtcGxlLCB0aGUge3sgbWVzc2FnZSB9fSBhbmQge3sgb25UYXAgfX0gYmluZGluZ3MgYXJlIHJlc29sdmVkXG4gICAgYWdhaW5zdCB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IGNyZWF0ZVZpZXdNb2RlbCgpLlxuXG4gICAgWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGRhdGEgYmluZGluZyBpbiBOYXRpdmVTY3JpcHQgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb3JlLWNvbmNlcHRzL2RhdGEtYmluZGluZy5cbiAgICAqL1xuICAgIC8vIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTWFpbk1vZGVsKCk7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgTWFpbk1vZGVsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyWIGNvbnRleHRcIik7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn1cblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcImxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIEdldCB0aGUgZXZlbnQgc2VuZGVyXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XG4gICAgY29uc29sZS5sb2coXCJwYWdlTG9hZGVkIG1haW4tcGFnZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgY29udGV4dC5vblRhcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVCdXR0b25UYXAoYXJncykge1xuICAgIGNvbnN0IGRhdGFJdGVtID0gYXJncy5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJtYWluLXBhZ2UgdGFwIGZyYW1lbmFtZTogXCIgKyBkYXRhSXRlbS5mcmFtZW5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiIGRhdGFJdGVtOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFJdGVtKSk7XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBwYWdlXG4gICAgZnJhbWVzLnRvcG1vc3QoKS5uYXZpZ2F0ZShcInZpZXdzL1wiICsgZGF0YUl0ZW0uZnJhbWVuYW1lICsgXCIvXCIgKyBkYXRhSXRlbS5mcmFtZW5hbWUgKyBcIi1wYWdlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGUzVGFwKGFyZ3MpIHtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZSB1c2luZyBhIGZ1bmN0aW9uOlxuICAgICAqIEV4YW1wbGUgMzogSG93IHRvIG5hdmlnYXRlIHRvIGEgcGFnZSBkeW5hbWljYWxseSBjcmVhdGVkIHZpYSBjb2RlLlxuICAgICAqL1xuICAgIGNvbnN0IGZhY3RvcnlGdW5jID0gKCk6IFBhZ2UgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuICAgICAgICBsYWJlbC50ZXh0ID0gXCJIZWxsbywgd29ybGQhIEV4YW1wbGUgMzogSG93IHRvIG5hdmlnYXRlIHRvIGEgcGFnZSBkeW5hbWljYWxseSBjcmVhdGVkIHZpYSBjb2RlLlwiO1xuICAgICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UoKTtcbiAgICAgICAgcGFnZS5jb250ZW50ID0gbGFiZWw7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH07XG4gICAgZnJhbWVzLnRvcG1vc3QoKS5uYXZpZ2F0ZShmYWN0b3J5RnVuYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZTRUYXAoYXJncykge1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIGFuZCBwYXNzIGNvbnRleHQ6XG4gICAgICogRXhhbXBsZSA0OiBIb3cgdG8gcGFzcyBjb250ZW50IGJldHdlZW4gZGlmZmVyZW50IHBhZ2VzLlxuICAgICAqL1xuICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICBjb250ZXh0OiB7IGluZm86IFwic29tZXRoaW5nIHlvdSB3YW50IHRvIHBhc3MgdG8geW91ciBwYWdlXCIgfSxcbiAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9wYWdlbWFuYWdlbWVudDQvcGFnZW1hbmFnZW1lbnQ0LXBhZ2VcIixcbiAgICB9O1xuICAgIGZyYW1lcy50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlNVRhcChhcmdzKSB7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGUgYW5kIHNldCBiaW5kaW5nQ29udGV4dCB0byB0aGUgcGFnZTpcbiAgICAgKiBFeGFtcGxlIDU6IEhvdyB0byBwcm92aWRlIGJpbmRpbmdDb250ZXh0IGF1dG9tYXRpY2xseSB3aGlsZSBuYXZpZ2F0aW5nIHRvIGEgcGFnZS5cbiAgICAgKi9cbiAgICAvLyBOYXZpZ2F0ZSB0byBwYWdlIGNhbGxlZCDigJxteS1wYWdl4oCdIGFuZCBwcm92aWRlIFwiYmluZGluZ0NvbnRleHRcIlxuICAgIGZyYW1lcy50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBiaW5kaW5nQ29udGV4dDogbmV3IE1haW5Nb2RlbCgpLFxuICAgICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL3BhZ2VtYW5hZ2VtZW50NS9wYWdlbWFuYWdlbWVudDUtcGFnZVwiLFxuICAgIH0pO1xufVxuIl19